import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Placeholder } from "../../../../../assets/undraw_breakfast.svg";
import { getNutrients } from "../../../../../state/slices/EdamamSlice";
import { getFoodLogEntries } from "../../../../../state/slices/userinfo";
import { deleteFoodLogEntries } from "../../../../../state/slices/userinfo";
import JournalNutritionInfo from "../../NutritionInfo/JournalNutritionInfo";
import DatePaginator from "./DatePaginator";
import Meal from "./MealEntries";

const Journal = () => {
  const dispatch = useDispatch();
  const {
    entries,
    fetchEntriesSuccess,
    deleteEntries,
    fetchEntriesLoad,
  } = useSelector((state) => state.user);
  const [favorite, setFavorite] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [journalItem, setJournalItem] = useState();
  const { currentItem, searchNutrientsSuccess } = useSelector(
    (state) => state.edamam
  );
  const [mealType, setNewMealType] = useState(currentItem.meal_type);
  const [newMeasure, setNewMeasure] = useState();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [entryIdForDeletion, setEntryIdForDeletion] = useState(null);

  const handleClose = () => setShowDeleteModal(false);
  const handleShow = (entry) => {
    setShowDeleteModal(true);
    setEntryIdForDeletion(entry);
  };

  const handleItemClick = (foodItem) => {
    setJournalItem(foodItem);
    setNewMealType(foodItem.meal_type);
    setNewMeasure(foodItem.measurement_name);
    const {
      quantity,
      edamam_food_id,
      measurement_name,
      food_name,
      measures,
      image_url,
    } = foodItem;
    dispatch(
      getNutrients(
        Number(quantity),
        measurement_name,
        edamam_food_id,
        food_name,
        image_url,
        measures
      )
    );
  };

  useEffect(() => {
    dispatch(getFoodLogEntries(moment(startDate).format("YYYY-MM-DD")));
  }, [dispatch, startDate, deleteEntries]);
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  if (!fetchEntriesSuccess) return null;
  return (
    <div className="w-50 mt-5">
      {fetchEntriesLoad ? (
        <div className="mt-5 flex-column loading d-flex align-items-center">
          <h4 className="mt-5">Updating Your Journal...</h4>
          <div className="mt-5 loader"></div>
        </div>
      ) : (
        <>
          <div className="d-flex mb-5 justify calendar">
            <DatePaginator startDate={startDate} setStartDate={setStartDate} />
          </div>
          <div className="journal-nutrients">
            <div className="journal-table">
              <table className="table-borderless table border-none">
                <thead className="mealType-th">
                  <tr>
                    <th scope="col">
                      <h5 className="font-weight-bold">Breakfast</h5>
                    </th>
                    <th scope="col">
                      {" "}
                      <h5 className="font-weight-bold">Qty</h5>
                    </th>
                    <th scope="col">
                      {" "}
                      <h5 className="font-weight-bold">Fat</h5>
                    </th>
                    <th scope="col">
                      {" "}
                      <h5 className="font-weight-bold">Protein</h5>{" "}
                    </th>
                    <th scope="col">
                      {" "}
                      <h5 className="font-weight-bold">Carbs</h5>{" "}
                    </th>
                    <th scope="col">
                      {" "}
                      <h5 className="font-weight-bold">Calories</h5>{" "}
                    </th>
                  </tr>
                </thead>
                <Meal
                  entries={entries.meals.breakfast}
                  handleItemClick={handleItemClick}
                  favorite={favorite}
                  toggleFavorite={toggleFavorite}
                  handleShow={handleShow}
                  date={startDate}
                />
                <thead>
                  <tr className="mealType-th">
                    <th scope="col">
                      <h5 className="font-weight-bold">Lunch</h5>
                    </th>
                  </tr>
                </thead>
                <Meal
                  entries={entries.meals.lunch}
                  handleItemClick={handleItemClick}
                  favorite={favorite}
                  toggleFavorite={toggleFavorite}
                  handleShow={handleShow}
                  date={startDate}
                />
                <thead>
                  <tr className="mealType-th">
                    <th scope="col">
                      <h5 className="font-weight-bold">Dinner</h5>
                    </th>
                  </tr>
                </thead>
                <Meal
                  entries={entries.meals.dinner}
                  handleItemClick={handleItemClick}
                  favorite={favorite}
                  toggleFavorite={toggleFavorite}
                  handleShow={handleShow}
                  date={startDate}
                />
                <thead>
                  <tr className="mealType-th">
                    <th scope="col">
                      <h5 className="font-weight-bold">Snack</h5>
                    </th>
                  </tr>
                </thead>
                <Meal
                  entries={entries.meals.snack}
                  handleItemClick={handleItemClick}
                  favorite={favorite}
                  toggleFavorite={toggleFavorite}
                  handleShow={handleShow}
                  date={startDate}
                />
              </table>
              <div className="d-flex justify-content-end mt-5">
                <p className="pr-5">
                  Total Calories: {entries.dailyTotals[0].total_calories_kcal}
                </p>
              </div>
            </div>
            <Modal
              className="d-flex align-items-center"
              show={showDeleteModal}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  Are you sure you want to delete this item?
                </Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteFoodLogEntries(entryIdForDeletion));
                    handleClose();
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
            <div className="ml-5">
              {!searchNutrientsSuccess && (
                <div className="ml-5">
                  <Placeholder style={{ width: "20vw" }} />
                </div>
              )}
              {searchNutrientsSuccess && (
                <JournalNutritionInfo
                  startDate={startDate}
                  mealType={mealType}
                  setNewMealType={setNewMealType}
                  journalItem={journalItem}
                  currentItem={currentItem}
                  newMeasure={newMeasure}
                  setNewMeasure={setNewMeasure}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Journal;
