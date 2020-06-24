import React from "react";
import styledComponents from 'styled-components';

const Paragraph = styledComponents.p`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
    line-height: 1.4rem;
    background: rgba(0, 0, 0, .6);
    padding: 20px;
    border-radius: 5px;
`;

export default function Description({description}){
    return (
        <Paragraph className="description">{description}</Paragraph>
    );
}