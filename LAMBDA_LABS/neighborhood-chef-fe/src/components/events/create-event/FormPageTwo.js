import React, { useState } from "react";

import strollerIcon from "@iconify/icons-vs/stroller";
import baselineOutdoorGrill from "@iconify/icons-ic/baseline-outdoor-grill";
import bottleWine from "@iconify/icons-mdi/bottle-wine";
import dogIcon from "@iconify/icons-whh/dog";
import icon18Plus from "@iconify/icons-uil/18-plus";
import foodApple from "@iconify/icons-mdi/food-apple";

import EventImageUpload from "./EventImageUpload.js";
import Modifier from "./Modifier.js";
import AddHashtag from "./AddHashtag.js";
import { scrollToTop } from "./FormPageOne.js";
import AdvancedOptions from "./advanced-options/AdvancedOptions.js";
import { useDispatch } from "react-redux";
import { setPage } from "../../../utilities/actions";
import { showOptions } from "../../../utilities/functions";
import Typography from "@material-ui/core/Typography";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export const modifierData = [
  { id: 1, title: "BBQ", icon: baselineOutdoorGrill, active: false },
  { id: 2, title: "Kid-Friendly", icon: strollerIcon, active: false },
  { id: 3, title: "Alcohol Accepted", icon: bottleWine, active: false },
  { id: 4, title: "18+ Event", icon: icon18Plus, active: false },
  { id: 5, title: "Pet-Friendly", icon: dogIcon, active: false },
  { id: 6, title: "Vegetarian", icon: foodApple, active: false },
];

const FormPageTwo = (props) => {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(
    showOptions(props.allergenList, props.dietWarnings, props.ingredientList)
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="createFormPage2Container">
        <EventImageUpload
          values={props.values}
          avatar={props.photo}
          setPhoto={props.setPhoto}
          title="Upload a main picture for your event page if you don't want to use the category default"
        />
        <AddHashtag
          hashtags={props.hashtags}
          setHashtags={props.setHashtags}
          removeHashtag={props.removeHashtag}
        />
        <div>
          <Typography style={{ margin: "10px 0" }}>
            Pick modifiers for your event.
          </Typography>
          <div style={{ display: "flex", width: "100%", flexFlow: "row wrap" }}>
            {modifierData.map((modifier) => {
              return (
                <Modifier
                  key={modifier.id}
                  modifier={modifier}
                  modifiers={props.modifiers}
                  setModifiers={props.setModifiers}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
        >
          {showAdvancedOptions ? (
            <Typography style={{ marginTop: "25px", fontWeight: "bold" }}>
              Click here to hide additional options <ArrowDropDownIcon />
            </Typography>
          ) : (
            <Typography style={{ marginTop: "25px", fontWeight: "bold" }}>
              Click here to show additional options <ArrowRightIcon />
            </Typography>
          )}
        </div>
        {showAdvancedOptions && (
          <>
            <AdvancedOptions
              allergenList={props.allergenList}
              setAllergenList={props.setAllergenList}
              dietWarnings={props.dietWarnings}
              setDietWarnings={props.setDietWarnings}
              ingredientList={props.ingredientList}
              setIngredientList={props.setIngredientList}
              deletedIngredientsList={props.deletedIngredientsList}
              setDeletedIngredientsList={props.setDeletedIngredientsList}
            />
          </>
        )}
      </div>

      <div className="createFormButtonDiv">
        <button
          className="createRightBtn"
          onClick={() => {
            dispatch(setPage(1));
            scrollToTop();
          }}
        >
          Previous
        </button>
        <button
          className="createLeftBtn"
          onClick={() => {
            dispatch(setPage(3));
            scrollToTop();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FormPageTwo;
