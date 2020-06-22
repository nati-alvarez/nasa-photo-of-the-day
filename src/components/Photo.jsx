import React from "react";

export default function Photo({photo}){
    console.log(photo)
    return (
        <img alt="nasa astronomy photo of the day" src={photo}/>
    );
}