import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    z-index: 999;
    background-color: rgb(255, 207, 0);
    border-bottom: 4px solid white;
`;

const Link = styled.a`
    display: block;
    padding: 13px 16px 14px;

    &::after {
        top: -4px;
        right: -20px;
        width: 240px;
        height: 80px;
        position: absolute;
        content: '';
        background: url("https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/bmone/banner-rider.png?ver=f30f319e5f6cd9e8ccd0b5c7a7cf181d") 50% 50% / 205px no-repeat;
    }
`;

const Link__Desktop = styled.a`
    display: flex;
    position: relative;
    padding: 18px 220px 16px 40px;
    justify-content: space-between;
    align-items: center;
    &::after {
        top: -4px;
        right: 90px;
        width: 240px;
        height: 80px;
        position: absolute;
        content: '';
        background: url("https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/bmone/banner-rider.png?ver=f30f319e5f6cd9e8ccd0b5c7a7cf181d") 50% 50% / 205px no-repeat;
    }
`;

const H4 = styled.h4`
    font-size: 14px;
    line-height: 20px;
    display: inline-block;
    & > strong {
        font-weight: bolder !important;
    }
    @media all and (min-width: 879px){
        line-height: 24px;
        letter-spacing: -0.4px;
        font-size: 18px;
        font-weight: normal;
    }   
`;

const H6 = styled.h6`
    display: inline-block;
    font-weight: 700;
    margin-left: 16px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.4px;
`;

const Icon = styled.i`
    &::before{
        width: 1em;
        font-style:normal;
        font-family: custom-icons;
        line-height: 1em;
        content: "\f113";
    }
`;

export default () => {
    const isDesktop = useMediaQuery({
        query:'all and (min-width: 879px)'
    })


    return (
    <Container>
        {isDesktop ? 
        <Link__Desktop>
        <div>
            <H4><strong>배민1</strong>(one) 지금 가입하고 혜택을 놓치지마세요</H4>
            <H6>배민1 신청하러가기 <Icon/></H6>
        </div>
        <img width={'70px'} height={'30px'} src='https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/bmone/banner-logo.png?ver=696171cf9f7a79dd9e58b7ebabe2e888'/>
        </Link__Desktop>
        :
        <Link>
            <H4><strong>배민1</strong>(one) 지금 가입하고 <br/>혜택을 놓치지마세요</H4>
        </Link>
        }
    </Container>
    );
}