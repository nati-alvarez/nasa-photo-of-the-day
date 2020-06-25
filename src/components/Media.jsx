import React from "react";

export default function Media({mediaLink, mediaType, owner}){
    let media;
    if(mediaType === "image")  media = <img alt="nasa astronomy photo of the day" src={mediaLink}/>;
    else media = <iframe src={mediaLink}></iframe>;
    return (
        <div id="apod">
            {media}
            <address>{owner}</address>
        </div>
    );
}