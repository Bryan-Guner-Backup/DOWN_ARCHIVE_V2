# Labs 24 deployment lesson
## Big picture

![](labs24-deployment-lesson/508398F9-4C67-4905-AB53-CFE9C63ABA63.png)

This tutorial is for online inference with AWS Elastic Beanstalk, FastAPI, and Pipenv.

To learn more about batch inference, read [Batch Inference vs Online Inference - ML in Production](https://mlinproduction.com/batch-inference-vs-online-inference/).


## Develop baseline API in Colab

### Hello World

You don’t have to prototype with Colab, but it is possible! Start your notebook with this cell:

```
!pip install fastapi pyngrok uvicorn
```

Then copy this code from the [First Steps - FastAPI](https://fastapi.tiangolo.com/tutorial/first-steps/#first-steps) tutorial.

> The simplest FastAPI file could look like this:  

```
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
```

Then end your notebook with the following cell. Your FastAPI app will be up as long as this cell is running.

```
from pyngrok import ngrok
import uvicorn

url = ngrok.connect(port=8000)
print('Public URL:', url)
uvicorn.run(app, port=8000)
```

Click the Public URL link: the URL will end with `ngrok.io`

This should open the URL in a new browser tab. You should see `{"message":"Hello World"}`

In your browser’s URL bar, add `/docs` to the end of the URL, then press Enter. You should see something like this:

![](labs24-deployment-lesson/C914874F-4B26-460F-B199-441747E2823B.png)

To make changes to your FastAPI app:

1. Stop the last cell from running. (The cell with `uvicorn.run` .)
2. Make your changes to the cell with `app = FastAPI()` and re-run it.
3. Re-run the last cell with `uvicorn.run`.
4. Click the new Public URL link that ends with `ngrok.io` 

### Docstrings, HTML

Let’s add a [docstring](https://fastapi.tiangolo.com/tutorial/path-operation-configuration/#description-from-docstring) and [HTML response](https://fastapi.tiangolo.com/advanced/custom-response/#html-response) to our first endpoint:

```
from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/")
async def root():
    """
    Verifies the API is deployed, and links to the docs
    """
    return HTMLResponse("""
    <h1>Fake News Detector API</h1>
    <p>Go to <a href="/docs">/docs</a> for documentation.</p>
    """)
```

Re-launch your app. Go to docs -> GET.

### POST request endpoint

Then add another endpoint, as a POST request:

```
@app.post('/predict')
async def predict():
    """
    Predicts whether a news article is real or fake news, 
    based on its title

    Naive baseline: Always predicts 'fake'
    """
    return {
        'prediction': 'fake', 
        'probability': 0.50
    }
```

Re-launch your app. Go to docs -> POST -> Try it out -> Execute.

According to [FastAPI’s tutorial](https://fastapi.tiangolo.com/tutorial/body/), 

> When you need to send data from a client (let’s say, a browser) to your API, you send it as a **request body**.  

Let’s set this up, following the tutorial instructions.

```
import pandas as pd
from pydantic import BaseModel

class Story(BaseModel):
    title: str 
    text: str

@app.post('/predict')
async def predict(story: Story):
    """
    Predict whether a news article is real or fake news, 
    based on its title & text

    Naive baseline: Always predicts 'fake'
    """

    # Doesn't do anything with the request body yet,
    # just verifies we can read it.
    print(story)
    X = pd.DataFrame([dict(story)])
    print(X.to_markdown())

    return {
        'prediction': 'fake', 
        'proobability': 0.50
    }
```

The code above shows how the request body object can be converted to a dictionary. Then, there are many ways to [create Pandas DataFrames from lists and dictionaries](https://pbpython.com/pandas-list-dict.html).

Re-launch your app. Go to docs -> POST -> Try it out -> Execute.

Try to change the Request body, then Execute again. The request body is a [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object, similar to a Python dictionary. 

What happens if you:

* Change values? (For example, set `title`’s value to a different string.)
* Change value types? (For example, set `title` ’s value to an integer instead of a string.)
* Add key-value pairs?
* Remove key-value pairs?
* Reorder key-value pairs?

### CORS

To ensure your team’s web app can call your API, we’ll configure “Cross-Origin Resource Sharing”.

According to [FastAPI’s tutorial](https://fastapi.tiangolo.com/tutorial/cors/), 

> [CORS or “Cross-Origin Resource Sharing”](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)  refers to the situations when a frontend running in a browser has JavaScript code that communicates with a backend, and the backend is in a different “origin” than the frontend.  

Add this code to your app, following the tutorial instructions.

```
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Learn more

To learn more about FastAPI:

* Watch these [8 short screencast videos](https://calmcode.io/fastapi/hello-world.html)
* Read the [FastAPI docs](https://fastapi.tiangolo.com/)
* Read [Porting Flask to FastAPI for ML Model Serving](https://www.pluralsight.com/tech-blog/porting-flask-to-fastapi-for-ml-model-serving/)

## Deploy baseline to AWS

### Get AWS account access

See [Lambda Labs Student Handbook -> Product Engineering](https://www.notion.so/lambdaschool/Product-Engineering-1bf2a76e1f124e55bc5e14a0a8f0ca3e) -> How do I request a new AWS account or get access to an existing account?

> Team Leads can **work with Section Leads** to request accounts, account access or account permissions.  
>   
> Note! There is *only one* region available for AWS accounts provided by Lambda School. That region is N. Virginia (**us-east-1**). Please be sure to always work in that region. If you have permissions issues, please check that you *are* working in us-east-1.  

### Get AWS access keys

[Understanding and getting your credentials - AWS General Reference](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) explains, 

> Access keys consist of two parts: an access key ID (for example, AKIAIOSFODNN7EXAMPLE) and a secret access key (for example, wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY). You use access keys to sign programmatic requests that you make to AWS if you use AWS CLI commands …  

To get access keys, follow the instructions in [Managing Access Keys for IAM Users - AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)


### Install AWS EB CLI

That’s a lot of acronyms!

- AWS = Amazon Web Services
- EB = Elastic Beanstalk
- CLI = Command Line Interface

Here’s how I recommend you install AWS EB CLI:

```
pip install pipx
```
```
pipx ensurepath
```
```
pipx install awsebcli
```
```
eb --help
```

I _don’t_ recommend using the [AWS EB CLI setup scripts on GitHub](https://github.com/aws/aws-elastic-beanstalk-cli-setup),  because it didn’t work for me or for some students.

Curious about pipx? You can learn more here:

- [pipx docs](https://pipxproject.github.io/pipx/)
- [My Python Development Environment, 2020 Edition | Jacob Kaplan-Moss](https://jacobian.org/2019/nov/11/python-environment-2020/)


### Make GitHub repo

Go to [github.com/new](https://github.com/new) to create a new GitHub repo. Give it any name. Check "Initialize this repository with a README." 

Clone the repo to your local computer and change directories into it.

```
git clone https://github.com/your-user-name/your-repo-name.git
```

```
cd your-repo-name
```


### Make pipenv environment

```
pip install pipenv
```

```
pipenv install fastapi uvicorn gunicorn
```

```
pipenv shell
```

### Make main.py

Make a file named `main.py` and insert your FastAPI app code.

### Install more dependencies

For example, so far our app uses pandas, plus a library called tabulate (for the [`to_markdown`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_markdown.html) function). So we need to install these libraries in our virtual environment.

```
pipenv install pandas tabulate
```

### Run locally

Run this command from the [First Steps - FastAPI](https://fastapi.tiangolo.com/tutorial/first-steps/#first-steps) tutorial.

```
uvicorn main:app --reload
```

In your web browser, go to the URL where the uvicorn web server is running locally. For example, [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

### Make Procfile

Make a file named `Procfile` and insert this line:

```
web: gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
```

Curious about that Procfile? You can browse these technical references:

- [https://fastapi.tiangolo.com/deployment/#alternatively-deploy-fastapi-without-docker](https://fastapi.tiangolo.com/deployment/#alternatively-deploy-fastapi-without-docker)
- [https://www.uvicorn.org/#running-with-gunicorn](https://www.uvicorn.org/#running-with-gunicorn)
- [https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/python-configuration-procfile.html](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/python-configuration-procfile.html)

### Git commit

```
git add --all
```

```
git commit -am "First commit"
```

```
git push origin master
```

### Deploy on Elastic Beanstalk

We saw this message when we ran `eb --help` :

> To get started type “eb init”. Then type “eb create” and “eb open”  

We’re ready to do that now. Use the following options when you run `eb init`:

```
eb init --platform python-3.7 make-up-your-app-name --region us-east-1  
```

The first time you run `eb init`, you will be asked for your AWS access key credentials.

Then run these two commands:

```
eb create make-up-your-environment-name
```

```
eb open
```

Congratulations, your baseline API is deployed to AWS!

To update your app, push to GitHub, then run `eb deploy`.

### Clean up

If you deploy an app just for testing or learning, don’t forget to “clean up”, to avoid surprise bills.

The [AWS Elastic Beanstalk docs](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.Cleanup.html) explain, 

> To ensure that you’re not charged for any services you aren’t using, delete all application versions and terminate the environment.   

Follow the instructions in the [docs](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.Cleanup.html)!

## Develop & deploy model

Continue with this [Colab notebook](https://colab.research.google.com/drive/1l2Rz4Ldow1QcOjOBqP8usPiu1pHzpZIT?usp=sharing) to develop a real model. 

Then [pickle the model](https://scikit-learn.org/stable/modules/model_persistence.html) and use pipenv to install exact version numbers of all new dependencies.

Test the app locally. Then push to GitHub, and run `eb deploy`.