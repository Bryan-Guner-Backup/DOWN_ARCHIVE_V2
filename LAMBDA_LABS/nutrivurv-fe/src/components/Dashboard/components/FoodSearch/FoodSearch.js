import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Placeholder } from "../../../../assets/WomanBubbles.svg";
import { searchFood } from "../../../../state/slices/EdamamSlice";
import SearchResults from "./SearchResults";

const FoodSearch = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const { searchStart, searchSuccess, searchFail } = useSelector(
    (state) => state.edamam
  );

  const { register, errors, handleSubmit } = useForm({});

  const onSubmit = () => {
    dispatch(searchFood(encodeURIComponent(search)));
  };

  const handleChanges = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="row d-flex justify-content-center mt-3">
      <h3 className="p-4">Add Food to your Daily Log</h3>
      <form
        className="col-12 d-flex pl-5 justify-content-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          id="inputSearch"
          type="text"
          placeholder="Search a Food Item"
          value={search}
          onChange={handleChanges}
          className="col-5 mx-3 form-control form-control-lg"
        />
        <button
          data-cy="submit"
          type="submit"
          className="col-2 btn btn-primary"
        >
          Search
        </button>
      </form>
      <div className="flex-column align-items-center w-100 mt-4">
        {searchStart && (
          <div className="flex-column loading d-flex align-items-center">
            <h4 className="mt-5">Searching for Food Item...</h4>
            <div className="loader"></div>
          </div>
        )}
        {!searchSuccess && !searchStart && (
          <div className="my-5 d-flex justify-content-center">
            <Placeholder style={{ width: "30%" }} />
          </div>
        )}
        {searchSuccess && <SearchResults />}
        {searchFail && <h4>An error occurred. Please try again later.</h4>}
      </div>
    </div>
  );
};

export default FoodSearch;
