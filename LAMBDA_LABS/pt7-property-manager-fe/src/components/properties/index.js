import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios
      .get("https://property-manager-be.herokuapp.com/properties")
      .then(res => {
		 //console.log(res.data.properties);
        setProperties(res.data.properties);
      })
      .catch(err => {
        console.error(err);
        // setProperties( [{property_id:1, name: "The White House", manager_id: 1 },
        // { property_id:2, name: "Slums", manager_id: 2 }]);
      });
  }, []);

  return (
    <div className="main-content">
      <h2 style={{margin: '30px'}}>Properties</h2>
      <div className="row">
        {[...properties].map(property => (
          <div key={property.id} className="col-lg-5 PropertyCard">
            <PropertyCard property={property} />
            <Link to={`/Properties/${property.id}`}>
              <Button color="success" className='viewProp' style={{fontSize:"16px", marginTop:'1em', padding:'18px 32px', marginBottom:'1em'}} size="lg">
                View Property Details
              </Button>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
