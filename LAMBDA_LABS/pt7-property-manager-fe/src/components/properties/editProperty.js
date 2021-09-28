import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';
import "./editProperty.scss";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
export default function EditProperty(props) {
	const [property, setProperty]=useState({address:"", city:"", state:"", zip:"", img:""});
	useEffect(()=>{
		axiosWithAuth()
			.get(`/properties/${props.match.params.property_id}`)
			.then(res=>{
				//console.log(res.data.property);
				setProperty(res.data.property);
			}).catch(err=>{
				console.error(err)
			});

	},[props.match.params.property_id]);
	const onChange=(e)=>{
		e.preventDefault();
		//console.log(e.target.value);
		if(e.target.name==='address'){
			setProperty({address:e.target.value});
		}else if(e.target.name==='city'){
			setProperty({city:e.target.value});
		}else if(e.target.name==='state'){
			setProperty({state:e.target.value});
		}else if(e.target.name==='zip'){
			setProperty({zip:e.target.value});
		}else if(e.target.name==='img'){
			setProperty({img:e.target.value});
		}
	}
	const deleteProperty=()=>{
		axiosWithAuth()
			.delete(`/properties/${props.match.params.property_id}`)
			.then(res=>{
				console.log(res.data);
				props.history.push(`/dashboard`); 
		}).catch(err=>{
			console.error(err);
		});
	}
	const putProperty=(e)=>{
		e.preventDefault();
		//console.log(e.target.parentNode.childNodes);
        let address=e.target.parentNode.childNodes[0].value;
        let city=e.target.parentNode.childNodes[1].value;
        let state=e.target.parentNode.childNodes[2].value;
        let zip=e.target.parentNode.childNodes[3].value;
		let img=e.target.parentNode.childNodes[4].value;
		//console.log(name, img);
		let putProperty={address:address, city:city, state:state, zip:zip, img:img, manager_id:sessionStorage.getItem('userID')};
		//console.log(sessionStorage);
		//console.log(putProperty);
		axiosWithAuth()
			.put(`/properties/${props.match.params.property_id}`, putProperty)
			.then(res => {
				//console.log(res.data);
				//setProperty(res.data.prop);
				props.history.push(`/properties/${props.match.params.property_id}`); 
			}).catch(err => {
				console.error(err);
			});
	}
	return (
		<div className="main-content">
			<h2 style={{fontSize:'4em'}}>Edit Property</h2>
			<form className="editPropForm">
				<input type="text" required onChange={onChange} placeholder="Street Address" value={property.address} name="address" />
				<input type="text" required onChange={onChange} placeholder="City" name="city" value={property.city} />
				<input type="text" required onChange={onChange} placeholder="State" name="state" value={property.state} />
				<input type="text" required onChange={onChange} placeholder="ZipCode" name="zip" value={property.zip} />
				<input type="text" onChange={onChange}placeholder="Image Link" value={property.img} name="img" />

				<Button color="success" type="submit" onClick={(e)=>putProperty(e)}>Save Changes</Button>
				<Link to="/dashboard"><Button color="secondary" type="reset" id='cancel'>Cancel</Button></Link>
			<Button outline color="danger"
				onClick={deleteProperty}> Delete Property</Button>
			</form>
		</div>
	);
}
