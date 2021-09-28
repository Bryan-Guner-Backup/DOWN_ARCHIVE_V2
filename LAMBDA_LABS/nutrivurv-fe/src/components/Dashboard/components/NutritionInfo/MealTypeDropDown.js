import moment from "moment";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LikeIcon } from "../../../../assets/LikeIcon.svg";
import { addFoodToJournal } from "../../../../state/slices/userinfo";

const MealTypeDropDown = (props) => {
  const {
    foodId,
    measure,
    measures,
    label,
    quantity,
    nutrition,
    image,
  } = props.currentItem;
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [mealType, setNewMealType] = useState("Breakfast");
  const [logFoodClicked, setLogFoodClicked] = useState(false);

  const handleMealTypeChange = (meal) => {
    setNewMealType(meal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogFoodClicked(true);
    const post = {
      user_id: user.id,
      date: moment().format("YYYY-MM-DD"),
      meal_type: mealType.toLowerCase(),
      edamam_food_id: foodId,
      measurement_uri: measure.uri,
      measurement_name: measure.label.toLowerCase(),
      all_measurements: measures.map((measure) => ({
        measurement_uri: measure.uri,
        measurement_name: measure.label,
      })),
      food_name: label,
      quantity: quantity,
      calories_kcal: Math.round(
        nutrition.totalNutrients["ENERC_KCAL"]["quantity"]
      ),
      fat_g: Math.round(100 * nutrition.totalNutrients.FAT.quantity) / 100,
      carbs_g: Math.round(100 * nutrition.totalNutrients.CHOCDF.quantity) / 100,
      protein_g:
        Math.round(100 * nutrition.totalNutrients.PROCNT.quantity) / 100,
      image_url: image,
    };

    dispatch(addFoodToJournal(post, moment().format("YYYY-MM-DD")));
  };

  const mealTypeList = ["Breakfast", "Lunch", "Dinner", "Snack"];

  return (
    <div className="dropdown mx-2 px-4">
      <form onSubmit={handleSubmit} className="form-group">
        <div className="d-flex justify-content-center align-text-top">
          <div className="d-flex flex-column d-sm-block d-md-flex">
            <div className="d-flex w-100">
              <Dropdown className="w-100">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {mealType}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {mealTypeList.map((meal) => (
                    <Dropdown.Item
                      key={meal}
                      className="dropdown-item"
                      href="#"
                      value={meal}
                      onClick={() => {
                        handleMealTypeChange(meal);
                      }}
                    >
                      {meal}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="ml-2 button">
            <button className="btn-primary rounded p-2 border border-primary">
              Log Food
            </button>
          </div>
        </div>
      </form>
      {logFoodClicked ? (
        <div
          className="toast show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <div className="p-2">
              <LikeIcon />
            </div>
            <strong className="mr-auto">Food Log Added!</strong>
            <button
              type="button"
              className="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
              onClick={() => {
                setLogFoodClicked(false);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MealTypeDropDown;
