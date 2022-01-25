import { MainBanner1, MainBanner2, MainBanner3 } from 'assets/image/Image';
import SpecialTag from 'components/common/SpecialTag';
import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImgBox from 'components/common/ImgBox';


const MainContainer = styled.div`
    @media ${ ({theme}) => theme.device.mobile} {
        margin-top: 3rem;
    }
    @media ${ ({theme}) => theme.device.laptop} {
        margin-top: 5rem;
    }
    @media ${ ({theme}) => theme.device.desktop} {
        margin-top: 5rem;
    }

`;

const MainImage = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`;

export default () => {
    return (
        <MainContainer>
            <MainImage>
                <Carousel
                    showThumbs={false}
                    dynamicHeight={false}
                    animationHandler={'fade'}
                    showStatus={false}
                    interval={2000}
                    infiniteLoop={true}
                    autoPlay={true}>
                    <ImgBox src={MainBanner1}/>
                    <ImgBox src={MainBanner2}/>
                    <ImgBox src={MainBanner3}/>
                </Carousel>
            </MainImage>
            <Content/>
            <SpecialTag/>
        </MainContainer>
    )
}