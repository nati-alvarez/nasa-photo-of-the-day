import React from "react";
import styledComponent from 'styled-components';

const Heading= styledComponent.h2`
    text-align: center;
`;

export default function Title({title}){
    return (
    <Heading>{title}</Heading>
    )
}