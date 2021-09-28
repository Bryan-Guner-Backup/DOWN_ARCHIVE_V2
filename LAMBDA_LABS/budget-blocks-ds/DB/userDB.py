from DB.masterDB import *
import sqlite3 as sql
import pickle
import copy
from DB.DBhelper import sql_to_dict, dict_to_sql
from fastapi import HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
import os

load_dotenv()

DBNAME = os.getenv("DBNAME", default="OOPS")
AUSER = os.getenv("AUSER", default="OOPS")
DBPASSWORD = os.getenv("DBPASSWORD", default="OOPS")
HOST = os.getenv("HOST", default="OOPS")


def resetUserTable():
    """
    Function to create/reset user table to store custom categorization preferences
    Inputs: None
    Output: None
    """
    # Create the Connection object to the 'BudgetBlocks' DB
    conn = psycopg2.connect(dbname=DBNAME, user=AUSER,
                            password=DBPASSWORD, host=HOST)

    # Create the Cursor object
    c = conn.cursor()

    # Delete the table if it exists
    c.execute("""
    DROP TABLE IF EXISTS users
    """)

    # Create table
    c.execute("""
    CREATE TABLE users
    (user_id INTEGER,
    Key TEXT,
    PLAID_Values TEXT,
    is_custom BOOLEAN)
    """)

    conn.commit()

    conn.close()

    return 0


def getUser(user_id):
    """
    Function that checks if the user is currently in the users table
        If not in the table: Pulls from master to create their preferences and returns them as a dict
        If in the table, pulls their preferences and returns them as a dict
    Inputs: Unique user id
    Output: A dict of the user's preferences
    """
    conn = psycopg2.connect(dbname=DBNAME, user=AUSER,
                            password=DBPASSWORD, host=HOST)

    c = conn.cursor()

    find_user = (f"""
    SELECT *
    FROM users
    WHERE user_id = {user_id}
    """)

    c.execute(find_user)

    a_user = c.fetchall()
    # if the user already exists in the DB, grab whats currently there
    if a_user != []:
        # Query the master table for the keys and save them to val
        query1 = f"""
        SELECT Key
        from users
        WHERE user_id = {user_id}
        """

        # Query the master table for the strings that contain the lists of
        # values separated by '/'
        query2 = f"""
        SELECT PLAID_Values
        from users
        WHERE user_id = {user_id}
        """

        new_dict = sql_to_dict(query1=query1, query2=query2, c=c)

        conn.close()

        return new_dict

    # If the user doesn't exist in the DB, provide it the master dict
    else:
        current_dict = masterPull()
        dict_to_sql(current_dict=current_dict, is_master=False,
                    is_old_custom=False, c=c, user_id=user_id)

        conn.commit()

        conn.close()

        return current_dict


def updateUsers(new_dict: dict):
    """
    Function that takes in the newest default preferences, and replaces the preferences
        of users that are using the defaults
    Inputs: Dictionary of new defaults
    Outputs: None
    """
    conn = psycopg2.connect(dbname=DBNAME, user=AUSER,
                            password=DBPASSWORD, host=HOST)

    c = conn.cursor()

    modify_check = """
    SELECT DISTINCT user_id
    FROM users
    WHERE is_custom = FALSE
    """
    c.execute(modify_check)

    modified = c.fetchall()

    if modified == []:
        return 0
    user_ids = []
    for tup in modified:
        for value in tup:
            user_ids.append(value)

    delete_query = """
    DELETE
    FROM users
    WHERE is_custom = False
    """
    c.execute(delete_query)

    for user in user_ids:
        dict_to_sql(current_dict=new_dict, is_master=False,
                    is_old_custom=False, c=c, user_id=user)

    conn.commit()
    conn.close()

    return 0


class UpdatePreferences(BaseModel):
    plaid_cats: list
    old_BB: str
    new_BB: str
    user_id: int

    class Config:
        schema_extra = {
            "example": {
                "plaid_cats": ["Third Party", "Betterment"],
                "old_BB": "Savings",
                "new_BB": "Transfer",
                "user_id": 1
            }
        }

    def changePreferences(self):
        """
        Function to update a user's categorical preferences in the users table
        Inputs: self - object that has parameters for plaid_cats, old_BB, new_BB, and user_id
        Outputs: None
        """
        # If the user doesn't already exist then it breaks
        plaid_cats = self.plaid_cats
        old_BB = self.old_BB
        new_BB = self.new_BB
        user_id = self.user_id

        conn = psycopg2.connect(dbname=DBNAME, user=AUSER,
                                password=DBPASSWORD, host=HOST)

        c = conn.cursor()

        keys = []
        values = []
        # Query the users table for the keys and save them to val
        query1 = f"""
        SELECT Key
        from users
        WHERE user_id = {user_id}
        """

        # Query the users table for the strings that contain the lists of
        # values separated by '/'
        query2 = f"""
        SELECT PLAID_Values
        from users
        WHERE user_id = {user_id}
        """

        new_dict = sql_to_dict(query1=query1, query2=query2, c=c)

        # Exception for if plaid_cats is not in old_BB
        if plaid_cats not in new_dict[old_BB]:
            raise HTTPException(
                status_code=500,
                detail=f"{plaid_cats} is not in {old_BB} for user {user_id}")

        else:
            # Remove the plaid_cat from the old_cat's value list
            new_dict[old_BB].remove(plaid_cats)

            # Create the new BB category if it doesn't exist
            if new_BB not in new_dict:
                new_dict[new_BB] = []
            # Add the plaid_cat to the destination's value list
            new_dict[new_BB].append(plaid_cats)

        delete_query = f"""
        DELETE
        FROM users
        WHERE user_id = {user_id}
        """

        c.execute(delete_query)

        # Insert the new
        dict_to_sql(current_dict=new_dict, is_master=False,
                    user_id=user_id, c=c, is_old_custom=True)

        conn.commit()
        conn.close()

        return 0

class User(BaseModel):
    user_id: int

    class Config:
        schema_extra = {
            "example": {
                "user_id": 1
            }
        }
    
    def reset_user_cats(self):
        conn = psycopg2.connect(dbname=DBNAME, user=AUSER,
                                password=DBPASSWORD, host=HOST)

        c = conn.cursor()

        delete_query = f"""
        DELETE
        FROM users
        WHERE user_id = {self.user_id}
        """
        c.execute(delete_query)

        current_dict = masterPull()
        dict_to_sql(current_dict=current_dict, is_master=False,
                    is_old_custom=False, c=c, user_id=self.user_id)

        conn.commit()
        conn.close()

        return f"User {self.user_id} categorical preferences have been reset!"
    
    def delete_user(self):
        conn = psycopg2.connect(dbname=DBNAME, user=AUSER,
                                password=DBPASSWORD, host=HOST)

        c = conn.cursor()

        delete_query = f"""
        DELETE
        FROM users
        WHERE user_id = {self.user_id}
        """
        c.execute(delete_query)
        conn.commit()
        conn.close()
        return f"User {self.user_id} has been deleted"