import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme=>({
    box: {
        "flex": 1,
        height: "400px",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
        [theme.breakpoints.down("xs")]: {
            height: "350px"
        }
    },
    image: {
        height: "100%",
        width: "100%"
    },
    iframe: {
        height: "100%",
        width: "100%"
    }
}));

export default function Media({mediaLink, mediaType, owner}){
    const classes = useStyles();
    let media;
    if(mediaType === "image")  media = <CardMedia className={classes.image}alt="nasa astronomy photo of the day" image={mediaLink}/>;
    else media = <iframe className={classes.iframe} src={mediaLink}></iframe>;
    return (
        <Box className={classes.box}>
            {media}
        </Box>
    );
}