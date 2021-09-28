from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import reports, predict


api = FastAPI(
    title='hrf-labs28-ds-b',
    description='DS API',
    version='0.9.11',
    docs_url='/',
)

api.include_router(reports.router)
api.include_router(predict.router)


api.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(api)
