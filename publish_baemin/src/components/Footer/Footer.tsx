import React from 'react';
import styled from 'styled-components';
import Sitemap from './Sitemap/Sitemap';


const Container = styled.div`
    border-top: 1px solid rgb(215, 219, 230);
    min-width: 100vw;
`;

const Padding = styled.div`
    padding: 40px 24px;
`;

const Provider = styled.div`
    font-size: 12px;
    color: rgb(142, 146, 159);
    font-weight: 500;
    letter-spacing: -0.2px;
    line-height: 20px;
    text-align: center; // responsive
`;

const GlobalLinks = styled.div`
    & > span {
        color: rgb(215, 219, 230);
        padding: 0px 10px;
    }
    & strong {
        font-weight: bolder;
    }
    & a {
        display: inline-block;
    }
`;

const Unknown = styled.p`
    margin-top: 14px;
    display: inline-block;
    & img {
        margin-right: 4px;
        vertical-align: middle;
    }
    & span {
        margin-right: 12px;
    }
`;

const DetailInfo = styled.button`
    margin-top: 32px;
    font-size: 100%;
    & > strong {
        font-weight: bolder;
    }
`;

const MoreIcon = styled.i`
    &:before{
        font-family: custom-icons;
        content: "\f111";
        width: 1em;
        line-height: 1em;
    }
`;



export default () => {
    return (
        <Container>
            <Padding>
            <Sitemap/>
            <Provider>
                <GlobalLinks>
                <a>회사소개</a>
                <span>|</span>
                <a>배달의민족</a>
                <span>|</span>
                <a>배민사장님광장 이용약관</a>
                <span>|</span>
                <a>광고서비스운영원칙</a>
                <span>|</span>
                <a>전자금융거래이용약관</a>
                <span>|</span>
                <a><strong>개인정보처리방침</strong></a>
                </GlobalLinks>
                <Unknown>
                    <span>
                    <img width="22" src='https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/mark-ccm.png'/>
                    소비자중심경영
                    </span>
                    <span>
                    <img width="20" src='https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/mark-isms.png'/>
                    정보보호 관리체계 인증
                    </span>
                </Unknown>
                <DetailInfo>
                    <strong>(주)우아한형제들 자세히보기</strong>
                    <MoreIcon/>
                </DetailInfo>
            </Provider>
            </Padding>
        </Container>
    );
}