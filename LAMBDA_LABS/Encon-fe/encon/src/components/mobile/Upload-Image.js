import React from "react";



export const UploadImage = () => {

    return (
        <div>

<div style={{ display: "flex", marginTop: "10px", justifyContent: "space-between", alignItems: "center" }}>        
        <label type="button" htmlFor="imageUpload" style={{ width: "40%", margin: "0px" }}>Select</label>
        <div style={{ width: "5rem", height: "5rem" }}> 
        </div>
        <input type="file" id="imageUpload" accept=".jpg,.png" style={{ display: "none" }} />
      </div>
      <div style={{ textAlign: "center", marginTop: "5px" }}>
            Select an image from your computer.
      </div>
    
    </div>
    );
  }