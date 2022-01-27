import React from 'react';
import styled from 'styled-components';

type TButton = {
    mt: number;
}

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid rgb(215, 219, 230);
    height: 48px;
    border-radius: 4px;
    padding: 11px 24px 13;
    font-size: 16px;
    ${(props:TButton) => props.mt && `margin-top: ${props.mt}px`}
`;


const MoreIcon = styled.i`
    font-family: custom-icons;
    margin-left: 4px;
    &:before{
        content: "\f113";
    }
`;

type ButtonProps = {
    mt: number; 
    text: string;
}


export default ({mt, text}:ButtonProps) => {
    return (
        <Button mt={mt}>
           {text} 
           <MoreIcon/>
        </Button>
    )
}