import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNutrients } from "../../../../state/slices/EdamamSlice";

const JournalDropDown = (props) => {
  const { foodId, quantity } = props.currentItem;
  const dispatch = useDispatch();
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleChange = (e) => {
    e.preventDefault();
    setNewQuantity(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNutrients(newQuantity, null, foodId));
  };

  return (
    <div className="dropdown mx-2 px-4">
      <form onSubmit={handleSubmit} className="form-group">
        <label htmlFor="quantity input" className="w-100">
          Quantity
        </label>
        <div className="d-flex justify-content-center align-text-top">
          <div className="d-flex flex-column d-sm-block d-md-flex">
            <div className="mr-2">
              <input
                className="rounded border border-primary p-2"
                type="number"
                id="itemQuantity"
                name="item_quantity"
                placeholder="Enter quantity (number)"
                defaultValue={newQuantity}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="ml-2 button">
            <button className="p-2 rounded border border-primary">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JournalDropDown;
