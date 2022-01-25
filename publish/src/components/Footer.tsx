import { FooterLogo } from 'assets/image/Image';
import React from 'react';
import styled from 'styled-components';
import ImgBox from './common/ImgBox';


const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 45%;
`;

const SubFooter = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.5rem 2rem 1.5rem 2rem;
    border-bottom: 1px solid #d2d2d2;
    border-top: 1px solid #d2d2d2;
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border: 1px solid yellow;
    padding-bottom: 2rem;
    padding-top: 2rem;
    background-color: #1f1f22;
    font-weight: 600;
    font-size: 13px;
    font-family:'Nanum Barun Gothic';
`;

const FooterBox = styled.div`
    display: flex;
    width: 65%;
`;

const Copyright = styled.span`
    color: #a9a9a9;
    padding-right: 20px;
`;
const Policy = styled.a`
    cursor: pointer;
    color: #666;
    padding-right: 20px;
`;
const CompanyNumber = styled.span`
    color: #a9a9a9;
`;
const JapanTour = styled.div`
    cursor: pointer;
    font-size: 14px;
    color: white;
    margin-left: auto;
`;

export default () => {
    return (
        <FooterContainer>
            <SubFooter>
                <ImgBox src={FooterLogo}/>
            </SubFooter>
            <Footer>
            <FooterBox>
                <Copyright>일본정부관광국 공식사이트 Copyright© Japan National Tourism Organization. All rights reserved</Copyright>
                <Policy>개인정보처리방침</Policy>
                <CompanyNumber>고유번호 : 104-84-05966</CompanyNumber>
                <JapanTour>JNTO</JapanTour>
            </FooterBox>
            </Footer>
        </FooterContainer>
    )
}