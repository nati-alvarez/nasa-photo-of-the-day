import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
    content: {
        flex: "1.5"
    }
})

export default function Description({description, owner}){
    const classes = useStyles();
    return (
        <CardContent className={"description " + classes.content }>
            <Typography variant="h6">{owner}</Typography>
            <Typography variant="body1">{description}</Typography>
        </CardContent>
    );
}