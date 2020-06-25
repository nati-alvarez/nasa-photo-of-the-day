import React from "react";
import moment from "moment";

import TextField from "@material-ui/core/TextField";

export default function SelectImage({changeDate}){
    let currentDate = moment().format("YYYY-MM-DD");

    return (
        <TextField type="date" max={currentDate} onChange={(e)=>changeDate(e.target.value)}/>
    )
}