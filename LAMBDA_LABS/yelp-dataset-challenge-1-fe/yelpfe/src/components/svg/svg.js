import React from "react";
import "./svg.css"

function Svg(props) {
    let count = props.data/props.total*100

    if(props.value === 'Total Votes'){
        return (
            <>
            {console.log("SVG props check",props.data)}
            <div>
                <svg width="100%" height="100%" className="circle-chart" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                    <circle className="circle-chart-background" stroke="#efefef" strokeWidth="3" fill="none" cx="21" cy="21" r="15.91549431"></circle>
                    <circle className="circle-chart-circle" stroke="hsl(0, 72%, 48%)" strokeWidth="3" strokeDasharray={`100,100`} strokeLinecap="round" fill="none" cx="21" cy="21" r="15.91549431"></circle>
                    <g className="gpa-text">
                        <text x="50%" y="50%" className="chart-label">{props.value}</text>
                        <text x="50%" y="50%" className="chart-number">{props.data}</text>
                    </g>
                </svg>
            </div>
            </>
        );
    } else {
       return (
        <>
        {/* {let count = props.data/props.total*100)} */}
        <div>
            <svg width="100%" height="100%" className="circle-chart" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle-chart-background" stroke="#efefef" strokeWidth="3" fill="none" cx="21" cy="21" r="15.91549431"></circle>
                <circle className="circle-chart-circle" stroke="hsl(0, 72%, 48%)" strokeWidth="3" strokeDasharray={`${count},100`} strokeLinecap="round" fill="none" cx="21" cy="21" r="15.91549431"></circle>
                <g className="gpa-text">
                    <text x="50%" y="50%" className="chart-label">{props.value}</text>
                    <text x="50%" y="50%" className="chart-number">{props.data}</text>
                </g>
            </svg>
        </div>
        </>
    );
    }
}

export default Svg