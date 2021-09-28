import React from "react";
import DropDown from "./DropDown";
import MealTypeDropDown from "./MealTypeDropDown";

const NutritionInfo = (props) => {
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
    <div className="mr-4 pr-4">
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
                  src={
                    currentItem.image
                      ? currentItem.image
                      : "https://assets.materialup.com/uploads/b03b23aa-aa69-4657-aa5e-fa5fef2c76e8/preview.png"
                  }
                  className="w-25 rounded-circle img-responsive d-sm-none d-md-block"
                />
                <DropDown currentItem={currentItem} />
              </div>
              <div className="border-top 1px solid black pt-4 mt-4">
                <MealTypeDropDown currentItem={currentItem} />
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap border-bottom border-primary py-2 d-sm-none d-md-flex">
            {nutritionLabels.map((label) => (
              <div className="p-1 font-weight-bold" key={currentItem.foodId}>
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
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="font-weight-bold">Total Fat</h3>
              {totalNutrients.FAT ? (
                <div className="text-right">
                  <h4 className="font-weight-bold">
                    {Math.round(totalNutrients.FAT.quantity)}
                    {totalNutrients.FAT.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between pl-2">
              <h4>Saturated Fat</h4>
              {totalNutrients.FASAT ? (
                <div className="text-right">
                  <h4>
                    {Math.round(totalNutrients.FASAT.quantity)}
                    {totalNutrients.FASAT.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between pl-2">
              <h4>Trans Fat</h4>
              {totalNutrients.FATRN ? (
                <div className="text-right">
                  <h4>
                    {Math.round(totalNutrients.FATRN.quantity)}
                    {totalNutrients.FATRN.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between pl-2">
              <h4>Polyunsaturated Fat</h4>
              {totalNutrients.FAPU ? (
                <div className="text-right">
                  <h4>
                    {Math.round(totalNutrients.FAPU.quantity)}
                    {totalNutrients.FAPU.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between pl-2">
              <h4>Monounsaturated Fat</h4>
              {totalNutrients.FAPU ? (
                <div className="text-right">
                  <h4>
                    {Math.round(totalNutrients.FAPU.quantity)}
                    {totalNutrients.FAPU.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="font-weight-bold">Cholesterol</h3>
              {totalNutrients.CHOLE ? (
                <div className="text-right">
                  <h4 className="font-weight-bold">
                    {Math.round(totalNutrients.CHOLE.quantity)}
                    {totalNutrients.CHOLE.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="font-weight-bold">Sodium</h3>
              {totalNutrients.NA ? (
                <div className="text-right">
                  <h4 className="font-weight-bold">
                    {Math.round(totalNutrients.NA.quantity)}
                    {totalNutrients.NA.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="font-weight-bold">Total Carbohydrate</h3>
              {totalNutrients.CHOCDF ? (
                <div className="text-right">
                  <h4 className="font-weight-bold">
                    {Math.round(totalNutrients.CHOCDF.quantity)}
                    {totalNutrients.CHOCDF.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between pl-2">
              <h4>Dietary Fiber</h4>
              {totalNutrients.FIBTG ? (
                <div className="text-right">
                  <h4>
                    {Math.round(totalNutrients.FIBTG.quantity)}
                    {totalNutrients.FIBTG.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between pl-2">
              <h4>Sugar</h4>
              {totalNutrients.SUGAR ? (
                <div className="text-right">
                  <h4>
                    {Math.round(totalNutrients.SUGAR.quantity)}
                    {totalNutrients.SUGAR.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="font-weight-bold">Protein</h3>
              {totalNutrients.PROCNT ? (
                <div className="text-right">
                  <h4 className="font-weight-bold">
                    {Math.round(totalNutrients.PROCNT.quantity)}
                    {totalNutrients.PROCNT.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="font-weight-bold">Vitamin D</h3>
              {totalNutrients.VITD ? (
                <div className="text-right">
                  <h4 className="font-weight-bold">
                    {Math.round(totalNutrients.VITD.quantity)}
                    {totalNutrients.VITD.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="font-weight-bold">Calcium</h3>
              {totalNutrients.CA ? (
                <div className="text-right">
                  <h4 className="font-weight-bold">
                    {Math.round(totalNutrients.CA.quantity)}
                    {totalNutrients.CA.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="font-weight-bold">Iron</h3>
              {totalNutrients.FE ? (
                <div className="text-right">
                  <h4 className="font-weight-bold">
                    {Math.round(totalNutrients.FE.quantity)}
                    {totalNutrients.FE.unit}
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="font-weight-bold">Potassium</h3>
              {totalNutrients.K ? (
                <div className="text-right">
                  <h4 className="font-weight-bold">
                    {Math.round(totalNutrients.K.quantity)}
                    {totalNutrients.K.unit}
                  </h4>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionInfo;
