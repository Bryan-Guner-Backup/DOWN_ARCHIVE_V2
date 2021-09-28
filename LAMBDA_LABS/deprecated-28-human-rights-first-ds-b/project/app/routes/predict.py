from fastapi import APIRouter

from app.routes.textmatcher import TextMatcher
from app.routes.training_data import ranked_reports

router = APIRouter()
model = TextMatcher(ranked_reports)


@router.post("/predict/")
async def predict(text: str):
    """ Get ranked prediction """
    return {"result": model(text)}


if __name__ == '__main__':
    print()
    print(model("Disney tells Mickey Mouse to find a new job"))
    print(model("The fuzz is here, everyone run"))
    print(model("Police are pushing people to the ground"))
    print(model("Police are hitting people with batons"))
    print(model("Police are spraying protesters with tear gas"))
    print(model("Police just killed that unarmed woman in cold blood"))
    print()
