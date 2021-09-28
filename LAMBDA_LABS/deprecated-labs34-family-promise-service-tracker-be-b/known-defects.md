# Known Issues
As of May 1, last day of Labs33 cohort:
- Service Entries authorization is not yet implemented - need to add middleware to restrict create/edit/delete of service_entries to authorized service_providers. 

As of May 25, last day of Labs34 cohort:
Authorization:
-Information on the profile requesting to the server is recieved under req.profile and it is not sent from the client. It is information recieved from Okta, and the specified user is identified by the bearer token that IS sent from the client. The authorization method we are currently using is by checking the role with req.profile.role.
-Some routes for reasons I am not sure, do not give req.profile, and that is the bug that needs fixing to allow all routes to use that middleware check for authorization.


Endpoints:
-The model for the endpoint to post a new service is not pathed correctly. It currently takes the id in the intermediary table that binds service type ids to their names, where as it needs to EITHER take the name of the service, and update the intermediary table accordingly, OR (the method I think would be simpler and superior)...
-Front end creates a dropdown menu for existing service_type s, each of these options in the menu will have a correlating numerical value, and upon submission, will send the correct service_type_id to the server, to which the correct service type name will still be affiliated through our current modeling.

- When adding recipients, currently you can add them through postman when testing the API. This is because the current Queries are only adding into the recipients table, which is expecting things like 'household_id'. Currently to add a household to a recipient you HAVE to use the ID number. When preforming crud operations on recipients you can get and see the data as expected, but adding and editing data will not work unless you explicitly define the id numbers you are attaching them to.
- Service notes crud operations have not been done at all. The current DB allows for notes functionality to be added later. see DB-Readme for further details.

Ddatabase:
- Currently in the migration files our tables are set to 'CASCADE' the deletes and updates. This was to ease the process of writing the crud operations and to get past bugs. These can (and probably should) be updated after working with product managers and stakeholder to figure out what they want cascading, and what they want restricted on deletion/updates.
