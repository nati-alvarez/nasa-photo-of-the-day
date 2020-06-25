import React from 'react';
import Typography from "@material-ui/core/Typography";

export default function Date({date}){
    return (
        <Typography gutterBottom={true} color="textSecondary" className="date">{date}</Typography>
    )
}