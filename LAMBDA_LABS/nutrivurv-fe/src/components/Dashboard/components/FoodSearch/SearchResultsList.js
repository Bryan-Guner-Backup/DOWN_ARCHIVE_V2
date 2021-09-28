import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

const SearchResultsList = (props) => {
  const { items, currentItem } = useSelector((state) => state.edamam);
  const [itemArr, setItemArr] = useState(items.slice(0, 8));

  return (
    <>
      {itemArr.map((item, i) => (
        <div
          className="list-group p-2"
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.handleItemClick(item);
          }}
          key={i}
        >
          <div
            id="searchItem"
            className={`display-flex-column border-bottom align-items-center text-center list-group-item-action list-group-item ${
              item.food.foodId === currentItem.foodId &&
              item.food.label === currentItem.label
                ? "active"
                : ""
            }`}
            style={{ border: "none" }}
          >
            <h5 className="text-center">
              {item.food.label
                .toLowerCase()
                .split(" ")
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join()
                .replace(/,/g, " ")}
            </h5>
            <h6>
              {" "}
              <span className="brand">
                {!item.food.brand ? null : `Brand: ${item.food.brand}`}
              </span>
            </h6>
          </div>
        </div>
      ))}
      <Pagination itemArr={itemArr} setItemArr={setItemArr} />
    </>
  );
};

export default SearchResultsList;
