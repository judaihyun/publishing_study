import { CeoServiceData } from 'atom/main_view/main_view';
import { Tdata } from 'publish';
import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import ServiceIcon from './ServiceIcon';


const CeoServiceContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    /* border: 1px solid blue; */
    width: 100%;
`;

const Badge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.div`
    font-size: 12px;
    font-weight: bold;
    margin: 8px 0px 0px;
`;




export default () => {
    const item = useRecoilValue<Tdata[]>(CeoServiceData);

    return (
    <CeoServiceContainer>
        {item.map((item,idx) => (
            <Badge key={idx}>
                <ServiceIcon src={item.src}/>
                <Label>{item.label}</Label>
            </Badge>
        ))}
    </CeoServiceContainer>
    );
}