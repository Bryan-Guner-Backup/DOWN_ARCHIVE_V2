import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getDropdownId from '../getdropdownids.js';

//Material UI components
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
//---------------------------------------------------------------------------------------

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
var countyResult =[];

const CountiesComponent = (props) => {
      //Creating hook to store County state  
      const [counties, setCounty] = useState([]);

      //Use Effect to reload data for the county dropdowns based on different selected states 
      useEffect(() => {
        const fetchCounties = async () => {
              //Fetch Counties
              countyResult = await axios(
                `${process.env.REACT_APP_API}/api/counties/states`, {
                  params: {
                     state: props.stateFilter
                   },
                }  
              );                
            setCounty(countyResult.data);
        }; 
        fetchCounties()
    }, [props.stateFilter]);

        //Function to handle County dropdown selection 
        const handleCounty = (event, value) => {
        const checkedCountyValue = value.map(({id})=> id); //event.target.getAttribute('value');
        console.log('inside county', checkedCountyValue) 
                    
           //Updating County Filter Hook 
           props.updateCountyFilter(checkedCountyValue);
          };

    return (
        <Autocomplete
        multiple
        id="checkboxes-county"
        options={counties}
        disableCloseOnSelect
        getOptionLabel={option => option.county_name}
        onChange={(event, value) => handleCounty(event, value)}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.county_name}
          </React.Fragment>
        )}
        style={{ width: '85%', alignContent: 'center' }}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Counties"
            placeholder="Search Counties"
            fullWidth
          />
        )}
      />            
    )
}

export default CountiesComponent;