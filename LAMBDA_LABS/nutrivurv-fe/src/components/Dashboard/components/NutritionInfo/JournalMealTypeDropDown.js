import moment from "moment";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ReactComponent as LikeIcon } from "../../../../assets/LikeIcon.svg";
import { editFoodJournal } from "../../../../state/slices/userinfo";

const JournalMealTypeDropDown = (props) => {
  const { foodId, quantity } = props.currentItem;
  const dispatch = useDispatch();
  const [logFoodClicked, setLogFoodClicked] = useState(false);
  const journalItem = props.journalItem;
  const handleMealTypeChange = (meal) => {
    props.setNewMealType(meal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogFoodClicked(true);
    const put = {
      date: journalItem.date,
      meal_type: props.mealType.toLowerCase(),
      edamam_food_id: foodId,
      measurement_uri: journalItem.measurement_uri,
      measurement_name: journalItem.measurement_name,
      // all_measurements: measures.map((measure) => ({
      //   measurement_uri: measure.uri,
      //   measurement_name: measure.label,
      // })),
      food_name: journalItem.food_name,
      quantity: quantity,
      calories_kcal: Number(journalItem.calories_kcal),
      fat_g: Number(journalItem.fat_g),
      carbs_g: Number(journalItem.carbs_g),
      protein_g: Number(journalItem.protein_g),
      image_url: journalItem.image_url,
    };

    dispatch(
      editFoodJournal(
        journalItem.id,
        put,
        moment(props.startDate).format("YYYY-MM-DD")
      )
    );
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
                  {props.mealType}
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
              Update Item
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
            <strong className="mr-auto">Food Log Updated!</strong>
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

export default JournalMealTypeDropDown;
