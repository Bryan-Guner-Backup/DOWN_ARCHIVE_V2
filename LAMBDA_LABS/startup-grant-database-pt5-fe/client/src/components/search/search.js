import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ResultCard from "./resultcard.js";
import AlertDialog from "./AlertDialog.js";
import "./search.css";

//Dropdown with checkboxes built in components.
import StateComponent from "./dropdowns/states_component.js";
import CountiesComponent from "./dropdowns/counties_component.js";
import AmountComponent from "./dropdowns/amount_component.js";
import ElegibilityComponent from "./dropdowns/elegibility_component.js";
import CategoryComponent from "./dropdowns/category_component.js";

const Search = () => {
  // Hooks declaration ------------------------------------------------------------------------
var grantResults =[]
  // Hooks to render the results.
  const [grants, setGrants] = useState([]);

  //Setting hooks for each filter
  const [stateFilter, setStateFilter] = useState([]);
  const [countyFilter, setCountyFilter] = useState([]);
  const [minAmount, setMin] = useState([]);
  const [maxAmount, setMax] = useState([]);
  const [eligibilityFilter, setEligibilityFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);

  //Hook to control the opening and closing of the dialog box for error States error selections
  const [open, setOpen] = useState(false);
  //-------------------------------------------------------------------------------------------

  // Pure Functions to update hooks------------------------------------------------------------

  //Function to set the dialog box state to true.
  const handleOpen = () => {
    setOpen(true);
  };

  //Function to set the dialog box state to false.
  const handleClose = () => {
    setOpen(false);
  };

  //Function to update State filter hooks
  const updateStateFilter = state => {
    setStateFilter(state);
  };

  //Function to update County filter hooks
  const updateCountyFilter = county => {
    setCountyFilter(county);
  };

  //Function to update Amount filter hooks
  const updateMinAmount = value => {
    const amnt = [];
    if (value === null) {
      value = {
        amount: 1.00
      }
    } else {
      var keylessData = value.amount.replace("$", "").replace(",", "");
    }
    setMin(keylessData);
  };

  const updateMaxAmount = value => {
    const amnt = [];
    if (value === null) {
      value = {
        amount: 1000000.00
      }
    } else {
      var keylessData = value.amount.replace("$", "").replace(",", "").replace(",", "");
    }
    setMax(keylessData);
  };

  //Function to update Eligibility filter hooks
  const updateEligibilityFilter = eligibility => {
    setEligibilityFilter(eligibility);
  };

  //Function to update Category filter hooks
  const updateCategoryFilter = category => {
    setCategoryFilter(category);
  };
  //----------------------------------------------------------------------------------------

  //Use Effect to load initial data for the dropdowns
  useEffect(() => {
    const fetchAll = async () => {
      //Fetch Grants

     grantResults = await axios.get(
        `${process.env.REACT_APP_API}/api/grants/search`,
        {
          params: {
            state: stateFilter,
            // county: countyFilter,
            minimumAmount: minAmount,
            maximumAmount: maxAmount,
            eligibility: eligibilityFilter,
            category: categoryFilter
          }
        }
      );

      setGrants(grantResults.data);
    };
    fetchAll();
  }, [stateFilter,  eligibilityFilter, categoryFilter, minAmount, maxAmount]); //countyFilter,

  // console.log("my grants", grants);
  console.log("My Grant Result", grantResults);
  console.log("My Hooks", stateFilter , minAmount, maxAmount, eligibilityFilter,categoryFilter)

  return (
    <div className="searchholder">
      <div className="filters">
        <h2>Filters</h2>
        <StateComponent
          handleOpen={handleOpen}
          updateStateFilter={updateStateFilter}
        />
        {/* <br />
        <br />
        <CountiesComponent
          stateFilter={stateFilter}
          updateCountyFilter={updateCountyFilter}
        /> */}
        <br />
        <br />
        <AmountComponent
          updateMin={updateMinAmount}
          updateMax={updateMaxAmount}
        />
        <br />
        <br />
        <ElegibilityComponent
          updateEligibilityFilter={updateEligibilityFilter}
        />
        <br />
        <br />
        <CategoryComponent updateCategoryFilter={updateCategoryFilter} />
      </div>
      <div className="results">
        <h2>Results</h2>
        <AlertDialog handleClose={handleClose} open={open} />
        {grants.map((items, i) => {
          return (
            //<Link key={i} style={{ textDecoration: 'none', color: '#000000'}} to={`/search/${items.id}`}>
              <ResultCard  resultcard={items} onClick={'something'}/>
            //</Link>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
