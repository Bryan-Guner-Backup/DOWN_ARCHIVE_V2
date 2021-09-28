import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import "./index.scss";
import {axiosWithAuth} from '../../utils/axiosWithAuth';

function Manager(props){
	const [manager, setManager] = useState({});
	const [properties, setProperties]=useState([]);
  useEffect(() => {
        axiosWithAuth()
          .get(`/properties/manager/${props.match.params.manager_id}`)
          .then(res => {
            //console.log(res.data);
			setManager(res.data.user);
			 setProperties(res.data.properties);
      });
  }, [props.match.params.manager_id]);
    const blankImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F30%2FNo_portrait_blanko.svg%2F480px-No_portrait_blanko.svg.png&f=1&nofb=1'
  return(
  
    <div className="main-content">
      <h2>{manager.firstName} {manager.lastName} & Associates</h2>
      <img src={manager.img === null ? blankImg : manager.img}  className='profilePic' alt="Insert into Manager/User Table to display" />
      <p>{manager.email}</p>
      <p>{manager.phoneNumber}</p>
      <hr></hr>
      <div className="managerProperties">
      <h3 className='managedBy'>Properties Managed by {manager.firstName+' '+manager.lastName}:</h3>
          {properties.map(property=>(
            <div key={property.id}>
				<h4 style={{fontSize:"2.5rem"}}>{property.address} in {property.city+", "+property.state}</h4>
				<img src={property.img} style={{width:"50%"}} alt="Insert location into Property Table to display"/>
				<br/>
				<Button className="my-4" color="success"><Link to={`/properties/${property.id}`}>View Details</Link></Button>
				<hr/>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Manager
