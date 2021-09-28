import React from "react";
import Svg from "../svg/svg"
import "./prediction.css"

function Prediction(props) {
    return (
        <>
        {console.log("Prediction props check",props.data)}
        <div className="predictions">
            <Svg
            value='Total Votes'
            data={props.data.Totalvotes}
            total={props.data.Totalvotes}
            />
            <Svg
            value='Helpful Votes'
            data={props.data.Helpfulvotes}
            total={props.data.Totalvotes}
            />
            <Svg
            value='Funny Votes'
            data={props.data.Funnyvotes}
            total={props.data.Totalvotes}
            />
        </div>
        </>
    );
}

export default Prediction;