import { MainBanner1 } from 'assets/image/Image';
import Image from 'components/common/Image';
import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const MainContainer = styled.div`
`;

const MainImage = styled.div`
    width: 100%;
    border: 1px solid red;
`;


export default () => {
    return (
        <MainContainer>
            <MainImage>
                <Image src={MainBanner1} size={500}/>
            </MainImage>
            <Content/>
        </MainContainer>
    )
}