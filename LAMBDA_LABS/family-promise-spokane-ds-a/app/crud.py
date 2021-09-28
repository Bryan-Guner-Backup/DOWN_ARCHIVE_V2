"""
File for all CRUD functions.
Sets today as 7 months ago to call valid data. See ReadME for details.
"""

from datetime import date, timedelta
from sqlalchemy import and_
from sqlalchemy import Integer
from sqlalchemy.sql import func
from sqlalchemy.orm import Session
from sqlalchemy.sql.sqltypes import Float

from .db_init import Members, Families

# Set all instances of today as 210 days ago
today = date.today() - timedelta(days = 210)


def view_member(db: Session, member_id: int):
    """
    Returns a member instance by their member id
    """
    return db.query(Members).filter(Members.id == member_id).first()


def view_family(db: Session, family_id: int):
    """
    Returns a family instance by their family_id
    """
    return db.query(Families).filter(Families.id == family_id).first()


def exit_date_subset(*, db: Session, table = Members, end = today, start_range: int):
    """
    Creates a subset of a table that falls withing a start and end date (inclusive)
    Start day is found as n days behind end date
    Parameters:
    db: Database session
    start_range: number of n days before end date (end date - start date)
    Defaults:
    Table: Members (SQLAlchemy model)
    end date: Today (datetime)
    """
    start = end - timedelta(days = start_range)
    subset = db.query(table).filter(and_(table.date_of_exit >= start, 
                                            table.date_of_exit <= end)).subquery()
    
    return subset


def count_exits(db: Session, exit_type: str, time_range: int, stop = today):
    """
    Returns the percentage of an exit type over a date range rounded to an integer
    Exit types are:
        - Permanent Exit
        - Temporary Exit
        - Transitional Housing
        - Emergency Shelter
        - Unknown/Other
    Parameters:
    db: Database session
    exit_type: Exit type to calculate percentage (str)
    time_range: n days to use for subset
    Defaults:
    stop: Last day to use in subset. Set for today (datetime)
    """
    # Get table subset for required days and count number of instances
    date_subset = exit_date_subset(db = db, start_range=time_range, end= stop)
    all_exit_count = db.query(func.count(date_subset.c.exit_destination)).one()[0]

    # Count number of occurrences of specific exit type
    exit_subset = db.query(date_subset).filter(date_subset.c.exit_destination.like(exit_type))
    exit_count = exit_subset.count()

    return round((exit_count / all_exit_count) * 100)


def avg_stay(db: Session, time_range: int):
    """
    Calculates the average length of stay of families over a date subset
    Returns the average rounded to an integer
    Parameters:
    db: Database session
    time_range: n days to use for subset
    """
    # Create date subset for required n days
    date_subset = exit_date_subset(db=db, start_range= time_range)

    # Query for average and call column value
    avg = db.query(func.avg(date_subset.c.length_of_stay)).one()[0]
    
    return round(avg)


def income_increase(db: Session, time_range: int):
    """
    Returns a count of families with increased income upon exit
    Parameters:
    db: Database session
    time_range: n days to use for subset
    """
    
    date_subset = exit_date_subset(db=db, start_range=time_range)

    #Filter for only those that reported income at entry
    #   and check if exit income greater than entry's
    income = db.query(date_subset).filter(and_(date_subset.c.demographics["income"].astext.cast(Float) != -1.0, 
                                                date_subset.c.income_at_exit > date_subset.c.demographics["income"].astext.cast(Float)))
    
    return income.count()