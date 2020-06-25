import React from "react";

import Typography from "@material-ui/core/Typography";

export default function Title({title}){
    return (
        <Typography variant="h5" component="h2">{title}</Typography>
    )
}