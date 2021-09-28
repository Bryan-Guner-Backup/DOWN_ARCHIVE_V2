## Known Potential Defects:

* Due to limited data, some locations may not be available. Some endpoints may not have been filtered for such cases because, initially we were going to cover that on the web team side where drop down of available locations will be provided. Having said that, these calls might result in an error. 


* For rental forecasting, the notebook is provided in the repo. However when running the models, due to limited RAM, it was not conducted all at once. There were 2263 cities processed, thus 2263 models for each city.  In the actual processing, I created the models 500 cities at a time. Then concatenated the results.


* Again, due to limited capacity, we cannot just pickle the models and call them as needed because that will take a long time. So instead, a forecast of the next five (5) months was computed. This is then saved on the database. These five months cover Jan 2021 to May 2021.


* For endpoints related to rental properties and for sale properties, they are pulled from the Realtor API on RapidAPI.com. This has a limited number of pulls per month.
