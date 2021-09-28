from psycopg2._psycopg import connection
from time import localtime, strftime
from sqlalchemy import create_engine, MetaData, Table
from sqlalchemy.orm import mapper, sessionmaker
from psycopg2 import connect, Error
import os

# this connection retrieves all the users on niyon_app
# the bug we discovered in demos was this call is only called during the heroku build
# we believe the solution would be to move this call to the 'on join' func
my_list_of_users = []
try:
    connection = connect(database=os.getenv('NIYON_HEROKU_DATABASE'),
                         user=os.getenv('NIYON_HEROKU_USER'),
                         password=os.getenv('NIYON_HEROKU_PASSWORD'),
                         host=os.getenv('NIYON_HEROKU_HOST'),
                         port=os.getenv('NIYON_PG_PORT'))
    cursor = connection.cursor()
    all_users = "SELECT id, first_name, last_name, user_type FROM public.user"

    cursor.execute(all_users)
    user_record = cursor.fetchall()

    for row in user_record:
        user_id, first_name, last_name, user_type = row
        temp_dict = {'user_id': user_id,
                     'first_name': first_name,
                     'last_name': last_name,
                     'user_type': user_type}
        my_list_of_users.append(temp_dict)


except (Exception, Error) as error:
    print("Error while connection to PostgreSQL", error)
finally:
    if connection:
        cursor.close()
        connection.close()

# this is the call that saw us create the room.py
# we included a possible solution in room.py
room_list = []
try:
    connection = connect(database=os.getenv('NIYON_CHAT_DATABASE'),
                         user=os.getenv('NIYON_CHAT_USER'),
                         host=os.getenv('NIYON_CHAT_HOST'),
                         password=os.getenv('NIYON_CHAT_PASSWORD'),
                         port=os.getenv('NIYON_PG_PORT'))
    cursor = connection.cursor()
    my_room_list = "SELECT id, roomname FROM public.roomname"

    cursor.execute(my_room_list)
    my_rooms = cursor.fetchall()

    for row in my_rooms:
        pg_room_id, pg_room_name = row
        temp_dict2 = {'id': pg_room_id,
                      'room': pg_room_name}
        room_list.append(temp_dict2)


except (Exception, Error) as error:
    print("Error getting room list", error)
finally:
    if connection:
        cursor.close()
        connection.close()

# db call is no longer being used
messages_list = []
try:
    connection = connect(database=os.getenv('NIYON_CHAT_DATABASE'),
                         user=os.getenv('NIYON_CHAT_USER'),
                         host=os.getenv('NIYON_CHAT_HOST'),
                         password=os.getenv('NIYON_CHAT_PASSWORD'),
                         port=os.getenv('NIYON_PG_PORT'))
    cursor = connection.cursor()
    messages = "SELECT * FROM public.messages"

    cursor.execute(messages)
    my_messages = cursor.fetchall()

    for row in my_messages:
        id, userid, roomname, mytimestamp, usertype, firstname, lastname, msg = row
        temp_dict3 = {'id': id,
                      'user_id': userid,
                      'room_name': roomname,
                      'timestamp': mytimestamp,
                      'user_type': usertype,
                      'first_name': firstname,
                      'last_name': lastname,
                      'msg': msg}
        messages_list.append(temp_dict3)

except (Exception, Error) as error:
    print("Error getting room list", error)
finally:
    if connection:
        cursor.close()
        connection.close()
