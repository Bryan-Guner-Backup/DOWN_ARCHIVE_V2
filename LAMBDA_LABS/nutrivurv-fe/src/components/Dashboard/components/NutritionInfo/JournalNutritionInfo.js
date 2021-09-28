import React from "react";
import JournalDropDown from "./JournalDropDown";
import JournalMealTypeDropDown from "./JournalMealTypeDropDown";
import {
  Calcium,
  Carbs,
  Chol,
  Fat,
  Fiber,
  Iron,
  MonoFat,
  PolyFat,
  Potassium,
  Protein,
  SatFat,
  Sodium,
  Sugar,
  TransFat,
  VitaD,
} from "./NutrientsList";

const JournalNutritionInfo = (props) => {
  const currentItem = props.currentItem;
  const nutrition = currentItem.nutrition;
  const totalNutrients = nutrition.totalNutrients;

  const uselessLabel = "FREE";
  const uselessLabel2 = "NO";
  const uselessLabel3 = "SPECIFIC";
  const uselessLabel4 = "CONSCIOUS";

  const nutritionLabels = nutrition.healthLabels.filter(function (label) {
    return (
      !label.includes(uselessLabel) &&
      !label.includes(uselessLabel2) &&
      !label.includes(uselessLabel3) &&
      !label.includes(uselessLabel4)
    );
  });

  return (
    <div className="mr-4 pr-4 journal-nutrition">
      <div className="card nutrition border-primary mb-3 mt-5">
        <div className="card-body justify-content-center mx-2">
          <div className="d-flex justify-content-center pb-2 mb-2">
            <div className="mx-2 px-2 justify-content-center">
              <h3 className="d-flex justify-content-start font-weight-bold">
                {currentItem.label.charAt(0).toUpperCase() +
                  currentItem.label.slice(1)}
              </h3>
              <div className="d-flex justify-content-start">
                <img
                  alt="food"
                  src={currentItem.image}
                  className="w-25 rounded-circle img-responsive d-sm-none d-md-block"
                />
                <JournalDropDown
                  journalItem={props.journalItem}
                  currentItem={currentItem}
                  newMeasure={props.newMeasure}
                  setNewMeasure={props.setNewMeasure}
                />
              </div>
              <div className="border-top 1px solid black pt-4 mt-4">
                <JournalMealTypeDropDown
                  mealType={props.mealType}
                  setNewMealType={props.setNewMealType}
                  journalItem={props.journalItem}
                  currentItem={currentItem}
                  startDate={props.startDate}
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap border-bottom border-primary py-2 d-sm-none d-md-flex">
            {nutritionLabels.map((label, i) => (
              <div className="p-1 font-weight-bold" key={i}>
                <span className="badge badge-success">
                  {label.split("_").join(" ")}
                </span>
              </div>
            ))}
          </div>
          <div className="d-block d-sm-block d-md-flex justify-content-between mx-1 pl-2 mt-4">
            <div>
              <h3 className="font-weight-bold">Calories</h3>
            </div>
            <div className="d-none d-md-block text-right">
              <h3 className="font-weight-bold">{nutrition.calories}</h3>
            </div>
          </div>
          <div className="pl-2 mx-1">
            <Fat totalNutrients={totalNutrients} />
            <SatFat totalNutrients={totalNutrients} />
            <TransFat totalNutrients={totalNutrients} />
            <PolyFat totalNutrients={totalNutrients} />
            <MonoFat totalNutrients={totalNutrients} />
            <Chol totalNutrients={totalNutrients} />
            <Sodium totalNutrients={totalNutrients} />
            <Carbs totalNutrients={totalNutrients} />
            <Fiber totalNutrients={totalNutrients} />
            <Sugar totalNutrients={totalNutrients} />
            <Protein totalNutrients={totalNutrients} />
            <VitaD totalNutrients={totalNutrients} />
            <Calcium totalNutrients={totalNutrients} />
            <Iron totalNutrients={totalNutrients} />
            <Potassium totalNutrients={totalNutrients} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default JournalNutritionInfo;
