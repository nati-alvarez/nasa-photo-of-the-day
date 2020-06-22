import React from "react";

export default function Media({mediaLink, mediaType}){
    let media;
    if(mediaType === "image")  media = <img alt="nasa astronomy photo of the day" src={mediaLink}/>;
    else media = <video><source src={mediaLink} type="video/mp4"></source></video>;
    return (
        <div id="apod">
            {media}
        </div>
    );
}