import React from "react";

//Material UI components
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
//---------------------------------------------------------------------------------------

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const minAmounts = [
  { amount: "$500" },
  { amount: "$2000" },
  { amount: "$5,000" },
  { amount: "$10,000" },
  { amount: "$20,000" },
  { amount: "$30,000" },
  { amount: "$60,000" }
];

const maxAmounts = [
  { amount: "$10,000" },
  { amount: "$20,000" },
  { amount: "$30,000" },
  { amount: "$60,000" },
  { amount: "$100,000" },
  { amount: "$1,000,000" }
];

const AmountComponent = props => {
  return (
    <>
      {/* FIRST COMPONENT HOLDS MINIMUM AMOUNT */}
      <Autocomplete
        id="checkboxes-amount-min"
        options={minAmounts}
        // disableCloseOnSelect
        onChange={(event, value) => {
          event.persist();
          props.updateMin(value);
        }}
        getOptionLabel={option => option.amount}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.amount}
          </React.Fragment>
        )}
        style={{ width: "85%", alignContent: "center", marginBottom: "1%" }}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Minimum Value"
            placeholder="Min"
            fullWidth
          />
        )}
      />
      <br></br>
      <br></br>
      {/* -------CREATING A SECOND COMPONENT TO HOLD THE "MAX" VALUE---------- */}
      <Autocomplete
        id="checkboxes-amount-max"
        options={maxAmounts}
        // disableCloseOnSelect
        onChange={(event, value) => {
          event.persist();
          props.updateMax(value);
        }}
        getOptionLabel={option => option.amount}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.amount}
          </React.Fragment>
        )}
        style={{ width: "85%", alignContent: "center" }}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Maximum Value"
            placeholder="Max"
            fullWidth
          />
        )}
      />
    </>
  );
};

export default AmountComponent;
