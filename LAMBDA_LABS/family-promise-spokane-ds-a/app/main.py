"""
Main app file for routes
"""
import pandas as pd
from fastapi import Depends, FastAPI, HTTPException, Path
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import MetaData
from sqlalchemy.orm import Session
from sqlalchemy.inspection import inspect

from .db_init import SessionLocal, engine, Members, Families
from .crud import view_family, view_member, count_exits, avg_stay, income_increase
from .visualizations import pie_exits, moving_average
from .predict import predictor

# Set app title and interactive docs for home route
app = FastAPI(title='Family Promise DS API - Team B',
    docs_url='/')


# CORS security. Currently allows access from any site's call
# Origins can be updated for only web's API when it's good to do so
# See ReadME for more info
app.add_middleware(CORSMiddleware, allow_origins = ["*"], allow_methods = ["*"], allow_headers = ["*"])


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Routes
#TODO: Add response_model to routes for data type validation and interactive docs schema
@app.get("/members/{member_id}", summary = "Find a member", 
            tags = ["Records"], response_description = "The identified member's details")
def read_member(member_id: int = Path(..., gt = 0), db: Session = Depends(get_db)):
    """
    Retrieves a member's details after passing in **member_id**.  
    If no such member in the database, returns 404 Error: Member not found in DB.
    """
    db_member = view_member(db, member_id= member_id)

    # Set error handling exception for member_id not in DB
    if db_member is None:
        raise HTTPException(status_code = 404, detail = "Member not found in DB")
    
    return db_member


@app.get("/families/{family_id}", summary = "Find a family", 
            tags = ["Records"], response_description = "The identified family's details")
def read_family(family_id: int = Path(..., gt= 0), db: Session = Depends(get_db)):
    """
    Retrieves a family's details after passing in their given **family_id**.<br />
    If no such family in the database, returns 404 Error: Family not found in DB.
    """
    db_family = view_family(db, family_id = family_id)

    # Set error handling exception for family_id not in DB
    if db_family is None:
        raise HTTPException(status_code= 404, detail = "Family not found in DB")
    
    return db_family


@app.get("/exits/{time_range}", summary = "View exit percentages", 
            tags = ["KPIs"], response_description = "Exit type percentages")
def all_exits(time_range: int = Path(..., gt = 0, le = 365), db: Session = Depends(get_db)):
    """
    Retrieve the breakdown of all exits in percentages over a date range.<br />
    Requires passing in a **time_range** integer to create the date range.<br />
    - *time_range = today - start date (in days)*
    - time_range limit set as 0 < time_range <= 365
    
    Returns percentage of each of these exit types:
    * Permanent Exit
    * Emergency Shelter
    * Temporary Exit
    * Transitional Housing
    * Unknown/Other
    """
    exits = ["Permanent Exit", "Emergency Shelter", "Temporary Exit", "Transitional Housing", "Unknown/Other"]

    # Initialize exits_dict to return with zeros
    exits_dict = {"Permanent Exits" : 0, "Emergency Shelter" : 0, "Temporary Exits" : 0, "Transitional Housing" : 0, "Unknown/Other" : 0}

    # Calculate average for each exit type over date range
    for key, each_exit in zip(exits_dict.keys(), exits):
        exits_dict[key] = count_exits(db, exit_type = each_exit, time_range= time_range)

    return exits_dict


@app.get("/average_stay/{time_range}", summary = "Average length of stay", 
            tags = ["KPIs"], response_description = "Families average length of stay")
def average_stay(time_range: int = Path(..., gt = 0, le = 365), db: Session = Depends(get_db)):
    """
    View the average length of families' stay in the shelter over a date range. <br />
    Requires passing in a **time_range** integer to create the date range.
    - *time_range = today - start date (in days)*
    - time_range limit set as 0 < time_range <= 365
    
    Returned average is value rounded to an integer.
    """
    # Calculate average over date range
    stay_avg = avg_stay(db, time_range = time_range)
    
    # JSON format for web calls
    avg = {"Average Stay" : stay_avg}

    return avg


@app.get("/income/{time_range}", summary = "Count income increases", 
            tags = ["KPIs"], response_description = "Families with increased income")
def view_income(time_range: int = Path(..., gt = 0, le = 365), db: Session = Depends(get_db)):
    """
    Count number of families with an increase in income at exit time.<br />
    Requires passing in a **time_range** integer to create the date range.
    - *time_range = today - start date (in days)*
    - time_range limit set as 0 < time_range <= 365
    """
    income = income_increase(db, time_range = time_range)
    return income


@app.get("/pie_exits/{time_range}", summary = "Exit percentages pie chart", 
            tags = ["Plots"], response_description = "The generated pie chart JSON")
def pie_chart(time_range: int = Path(..., gt= 0), db: Session = Depends(get_db)):
    """
    Generate a pie chart for exit type over a date range.<br />
    Requires passing in a **time_range** integer to create the date range.
    - *time_range = today - start date (in days)*
    - time_range set to only accept integers greater than 0
    
    Returns the JSON object for the generated interactive pie chart.
    """
    plotly_json = pie_exits(db, time_range = time_range)
    return plotly_json


@app.get("/avg_plot/{time_range}", summary = "90-day moving averages line chart", 
            tags = ["Plots"], response_description = "The generated line chart JSON")
def moving_average_plot(time_range: int = Path(..., ge = 5, le = 90), db: Session = Depends(get_db)):
    """
    Generate a line chart for exit types 90-day moving averages over a date range.<br />
    Each day's exit type percentages for the previous 90 days is plotted in a line chart.<br />
    <br />
    Requires passing in a **time_range** integer to create the date range.<br />
    Date range limit currently set for 90 days before today
    - *time_range = today - start date (in days)*
    - time_range limit set as 0 < time_range <= 365
    
    Returns the JSON object for the generated interactive line chart.    
    """
    avg_plot = moving_average(db, time_range= time_range)
    return avg_plot


@app.get("/predict_exits/{member_id}", summary = "Predict exit type", 
            tags = ["Prediction"], response_description = "The predicted exit")
def predict_exits(member_id: int = Path(..., gt = 0), db: Session = Depends(get_db)):
    """
    Predict a member's exit type.<br />
    Requires passing in a valid **member_id**.<br />
    Possible exit types would be:
    - Permanent Exit
    - Emergency Shelter
    - Temporary Exit
    - Transitional Housing
    - Unknown/Other
    """
    query = f'''select * from members where members.id = {member_id};'''
    df = pd.read_sql_query(query, engine)
    exit = predictor(df)
    return exit
 



# Debugging
def view_relations():
    all_relations = {"members" : [], "families" : []}
    member_relations = inspect(Members).relationships.items()
    for m in member_relations:
        all_relations["members"].append(m)
    family_relations = inspect(Families).relationships.items()
    for f in family_relations:
        all_relations["families"].append(f)
    return all_relations


if __name__ == "__main__":
    #print(view_relations())
    meta = MetaData()
    meta.reflect(bind= engine)
    print(meta.sorted_tables)