import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Placeholder } from "../../../../assets/undraw_breakfast.svg";
import { getNutrients } from "../../../../state/slices/EdamamSlice";
import NutritionInfo from "../NutritionInfo/NutritionInfo";
import SearchResultsList from "./SearchResultsList";

const SearchResults = () => {
  const [active, setActive] = useState(false);
  const { searchNutrientsSuccess, currentItem, searchSuccess } = useSelector(
    (state) => state.edamam
  );

  const dispatch = useDispatch();

  const handleItemClick = (foodItem) => {
    const { label, foodId, image } = foodItem.food;
    const measures = foodItem.measures;
    const defaultMeasure = measures[0];
    const defaultQuantity = 1;
    dispatch(
      getNutrients(
        defaultQuantity,
        defaultMeasure,
        foodId,
        label,
        image,
        measures
      )
    );
  };

  return (
    <div
      id="results"
      className="d-flex flex-sm-column flex-md-row justify-content-between"
    >
      <div id="searchList" className="card mt-5 justify-content-center">
        <h3 className="pt-4 d-flex justify-content-center pb-2 border-bottom border-secondary">
          Results
        </h3>{" "}
        <SearchResultsList active={active} handleItemClick={handleItemClick} />
      </div>
      <div className="w-50">
        {!searchNutrientsSuccess && (
          <div className="my-5 d-flex justify-content-center">
            <Placeholder style={{ width: "40%" }} />
          </div>
        )}
        {searchNutrientsSuccess && <NutritionInfo currentItem={currentItem} />}
      </div>
    </div>
  );
};

export default SearchResults;
