import React from 'react';
import {axiosWithAuth} from '../../../utils/axiosWithAuth.js';
import "./../addProperty.scss";
import {Button} from "reactstrap";
import {Link} from 'react-router-dom';
export default function AddUnit(props) {

	let postUnit=(e)=>{
        e.preventDefault();
		console.log(e.target.parentNode.childNodes);
        let number=e.target.parentNode.childNodes[1].value;
        let dateAvailable=e.target.parentNode.childNodes[3].value;
        let homeType=e.target.parentNode.childNodes[5].childNodes[0].value;
        let fees=e.target.parentNode.childNodes[7].value;
        let sqft=e.target.parentNode.childNodes[9].value;
        let postUnit={number:number, date_available:dateAvailable, type:homeType, fees:fees, sqft:sqft, property_id:props.match.params.property_id, manager_id:sessionStorage.getItem('userID')};
		console.log(postUnit);
		//axios
		axiosWithAuth()
			.post(`/units`, postUnit)
          .then(res => {
			//console.log(res.data);
			props.history.push(`/dashboard/`); 
          }).catch(err => {
              console.error(err);
      });
    }
  return (
    <div className="main-content">
        <h2>Add Unit</h2>
      <form className="addPropForm">
		  <label>Unit Number</label>
          <input type="text" required style={{marginBottom:"20px"}} name="number" />
		  <label>Availability Date</label>
          <input type="date" style={{marginBottom:"20px"}} required name="date_available" />
		  <label>Unit Type</label>
			  <select required name="Building Type" className='bldgType'>
				<option>Apartment</option>
				<option>Condo</option>
				<option>Single Family Home</option>
				<option>Duplex</option>
				<option>Mobile Home</option>
				<option>Parking Space</option>
			  </select>
		  <label>Fees</label>
          <input type="number" style={{marginBottom:"20px"}} step="0.01" min="0" required name="fees" />
		  <label>Square Footage</label>
          <input type="number" style={{marginBottom:"20px"}} min="0" name="sqft" />

          <Button color="success" type="submit" onClick={(e)=>postUnit(e)}>Add Unit</Button>
		  <Link style={{width: '100%'}} to="/dashboard"><Button className="btn" color="secondary" type="reset">Cancel</Button></Link>
      </form>
    </div>
  );
}