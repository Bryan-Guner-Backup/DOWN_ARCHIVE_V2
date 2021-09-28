//Function to find and ggregate the id's of the selected items in the dropdown menus State, County, Eligibility, and Category

function getDropdownId(axiosData, dataToCompare) {
    
  const matchingStates =[]; // Variable to store the id's of the names matching the dropdown selections and the axios request 

  //'axiosData' is the result of the axios request that has the id and the name. It is an array.
  //'dataToCompare' is the array coming from the dropdown user selections. It is an array
  //Reading the name of the second key from the object coming from the database.
  //The first key isalways 'id' but the second is always different

  const objectKey = (Object.keys(axiosData[0]))[1];
  axiosData.forEach(dataItems => {
    dataToCompare.forEach(itemName => {
        if (itemName === dataItems[`${objectKey}`]) {
            matchingStates.push(dataItems.id)
        }
    });
  })
    return matchingStates;    
}

module.exports = getDropdownId;


 