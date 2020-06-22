import React from "react";

export default function Photo({photo}){
    return (
        <div id="apod">
            <img alt="nasa astronomy photo of the day" src={photo}/>
        </div>
    );
}