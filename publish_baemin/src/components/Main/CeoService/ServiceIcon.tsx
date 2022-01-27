import React from 'react';
import styled from 'styled-components';

type Ticon = {
    src: string;
}

const Icon = styled.i`
    background: url(${(props:Ticon) => props.src}) 50% 50% / 40px 40px no-repeat rgb(248, 249, 250);
    display:flex;
    border-radius: 50%;
    border: 1px solid rgb(236, 238, 242);
    height: 56px;
    width: 56px;
`;

export default (props:Ticon) => {
    return (
        <Icon src={props.src}/>
    )
}