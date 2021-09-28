import React from "react";
import { ReactComponent as FullHeart } from "../../../../../assets/FullHeart.svg";
import { ReactComponent as Heart } from "../../../../../assets/HeartOutline.svg";
import { ReactComponent as TrashCan } from "../../../../../assets/Trash-can.svg";

const MealEntries = (props) => {
  return (
    <tbody>
      {props.entries &&
        props.entries.map((entry) => {
          return (
            <tr
              key={entry.id}
              onClick={(e) => {
                e.preventDefault();
                props.handleItemClick(entry);
              }}
            >
              <td>
                <span className="mr-2">
                  {props.favorite ? (
                    <FullHeart onClick={props.toggleFavorite} />
                  ) : (
                    <Heart onClick={props.toggleFavorite} />
                  )}
                </span>
                <span className="font-weight-bold text-capitalize">
                  {entry.food_name},
                </span>{" "}
                {entry.measurement_name}
              </td>
              <td>{entry.quantity}</td>
              <td>{entry.fat_g} g</td>
              <td>{entry.protein_g} g</td>
              <td>{entry.carbs_g} g</td>
              <td>{entry.calories_kcal}</td>
              <td>
                <TrashCan
                  className="mt-2"
                  onClick={() => props.handleShow(entry.id)}
                />
              </td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default MealEntries;
