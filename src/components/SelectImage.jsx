import React from "react";
import moment from "moment";
import styledComponent from 'styled-components';

const DatePicker = styledComponent.input`
    background: white;
    color: black;
    border: none;
    font-size: 1rem;
    margin-top: 5vh;
    padding: 0 2vh;
    font-family: Space Mono;
`

export default function SelectImage({changeDate}){
    let currentDate = moment().format("YYYY-MM-DD");

    return (
        <DatePicker type="date" max={currentDate} onChange={(e)=>changeDate(e.target.value)}/>
    )
}