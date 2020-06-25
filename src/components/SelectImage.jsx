import React from "react";
import moment from "moment";

export default function SelectImage({changeDate}){
    let currentDate = moment().format("YYYY-MM-DD");

    return (
        <input type="date" max={currentDate} onChange={(e)=>changeDate(e.target.value)}/>
    )
}