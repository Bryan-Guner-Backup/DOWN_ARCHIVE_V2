from pandas import DataFrame
from fastapi import APIRouter

from app.load import load_data

router = APIRouter()
DF: DataFrame = load_data()  # Global Data Source


@router.get("/report-by-id/")
async def report_by_id(idx: str):
    """ Get report by id number
    returns a single report as JSON object """
    return DF.iloc[int(idx)].to_dict()


@router.get("/report-by-city/")
async def report_by_city(city: str):
    """ Get reports by city name
    returns a list of reports as JSON objects """
    return DF[DF["city"] == city.title()].to_dict(orient="records")


@router.get("/report-by-state/")
async def report_by_state(state: str):
    """ Get reports by state name
    returns a list of reports as JSON objects """
    return DF[DF["state"] == state.title()].to_dict(orient="records")


@router.get("/full-report/")
async def full_report():
    """ Get all reports
    returns a list of reports as JSON objects """
    return DF.to_dict(orient="records")


@router.get("/reload/")
async def reload():
    """ Reloads data from source """
    global DF
    DF = load_data()
    return True
