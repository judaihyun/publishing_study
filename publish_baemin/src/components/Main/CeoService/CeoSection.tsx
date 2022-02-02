import SmallSlider from 'components/common/SmallSlider';
import React from 'react';
import styled from 'styled-components';
import CeoServiceMenu from './CeoServiceMenu';


const Container = styled.div`
    padding-top: 32px;  // responsive max-width 879px
`;

const CeoSection = styled.div`

`;

const CeoLabel = styled.div`
    font-weight: 500;
    margin-bottom: 16px; // responsive 
`;


const Tooltip = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgb(33, 35, 41);
    color:white;
    margin: 16px 0px 0px;
    padding: 8px 0px;
    border-radius: 4px;
    font-size: 12px;
    letter-spacing: -0.2px;
    line-height: 20px;
    position: relative;
    &:before{
        position: absolute;
        left: 90px;
        top: -8px;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 8px solid rgb(47, 47, 47);
        content: '';

        left: calc(((100% - 280px) / 6) * 2); // responsive max-width 879px
        margin-left: 77px;  // responsive max-width 879px
    }
    & > strong {
        font-weight: bolder;
    }
`;



const AdvertisingSection = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(236, 238, 242);
    margin: 24px 0px 0px;
    padding: 24px 16px;
    button{
        color: white;
        height: 48px;
        font-size:16px;
        line-height: 24px;
        letter-spacing: -0.4px;
        border-radius: 4px;
        font-weight: bold;
        padding: 11px 24px 13px;
        background-color: rgb(26, 124, 255);
        margin-top: 12px;
    }
`;

const AdvertisTitle = styled.div`
    display: flex;
    margin-left: 8px;
    margin-right: 8px;
    align-items: center;
    justify-content: space-between;
    & > h5{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }
`;

export default () => { //with login page
    return (
        <Container>
            <CeoSection>
                <CeoLabel>사장님 서비스</CeoLabel>
                <CeoServiceMenu/>
                <Tooltip>
                    <span>외식업 사장님을 위한&nbsp;</span><strong> 온라인 식자재 전문몰</strong>
                    <SmallSlider/>
                </Tooltip>
            </CeoSection>
            <AdvertisingSection>
                <AdvertisTitle>
                    <h5>우리 가게에 맞는 <br/>광고를 시작하세요.</h5>
                    <img width={'56px'} height={'56px'} src='https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/speaker.png?ver=bc114afdfa2676592e71621690c7b239'/>
                </AdvertisTitle>
                <button>배민 광고 시작하기</button>
            </AdvertisingSection>
        </Container>
    )
}