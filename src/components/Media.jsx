import React from "react";
import styledComponent from 'styled-components';

const APOD = styledComponent.div`
    width: 90%;
    max-width: 600px;
    height: 400px;
    padding: 10px 10px 30px 10px;
    background: white;
    border: 1px solid black;
    transform: rotate(-1deg);
`

const Image = styledComponent.img`
    object-fit: cover;
    width: 100%;
    height: 100%; 
    border: 1px solid black;
`;

const Video = styledComponent.iframe`
    object-fit: cover;
    width: 100%;
    height: 100%;
    color: red;
    border: 1px solid black;
`

const Copyright = styledComponent.address`
    color: black;
    text-align: center;
`;

export default function Media({mediaLink, mediaType, owner}){
    let media;
    if(mediaType === "image")  media = <Image alt="nasa astronomy photo of the day" src={mediaLink}/>;
    else media = <Video src={mediaLink}/>;
    return (
        <APOD id="apod">
            {media}
            <Copyright>{owner}</Copyright>
        </APOD>
    );
}