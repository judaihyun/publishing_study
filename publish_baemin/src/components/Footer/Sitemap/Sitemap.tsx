import React from 'react';
import styled from 'styled-components';


const SiteMap = styled.div`
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    margin: 0px auto 64px;
`;

const CeoPlaza = styled.div`
    // responsive
    flex: 1 1 0%;
`;

const CeoServices = styled.div`
    // responsive
    flex: 1 1 0%;
`;
const CeoHelp = styled.div`
    // responsive max w 879
    flex: 1 1 100%;
    margin: 48px 0px 0px;
    & > h2 {
        // responsiv max w 879
        display: none;
    }
    & > div{
        background: rgb(248, 249, 250);
        border: 1px solid rgb(236, 238, 242);
        border-radius: 4px;
        padding: 0px 16px;
        & > div:not(:first-child){
            border-top: 1px solid rgb(236,238,242);
        }
    }

`;

const H2 = styled.h2`
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
`;

const Item = styled.div`
    margin-top: 24px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.4px;
    line-height: 20px;
`;

const HelpItem = styled.div`
    padding-top: 14px;
    padding-bottom: 14px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.4px;
    line-height: 20px;
`;

const A = styled.a`
    display: flex;
    font-size: 14px;
    & > em{
        margin-left: 8px;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: -0.2px;
        font-style: normal;
        color: rgb(142, 146, 159);
    }
`;

const HeadIcon = styled.i`
    margin-right: 8px;
    color: rgb(142, 146, 159);
    &:before{
        font-family: custom-icons;
        content: "\f116";
        width: 1em;
        line-height: 1em;
    }
`;

const KakaoIcon = styled.i`
    margin-right: 8px;
    color: rgb(142, 146, 159);
    &:before{
        font-family: custom-icons;
        content: "\f11c";
        width: 1em;
        line-height: 1em;
    }
`;

const AdIcon = styled.i`
    margin-right: 8px;
    color: rgb(142, 146, 159);
    &:before{
        font-family: custom-icons;
        content: "\f101";
        width: 1em;
        line-height: 1em;
    }
`;

const MapIcon = styled.i`
    margin-right: 8px;
    color: rgb(142, 146, 159);
    &:before{
        font-family: custom-icons;
        content: "\f11f";
        width: 1em;
        line-height: 1em;
    }
`;

const ExpandIcon = styled.i`
    margin-left: auto;
    margin-right: 0px;
    &:before{
        font-family: custom-icons;
        content: "\f113";
        width: 1em;
        line-height: 1em;
    }
`;


export default () => {
    return (
        <SiteMap>
        <CeoPlaza>
            <H2>배민사장님광장</H2>
            <Item>외식업 이야기</Item>
            <Item>배민광고신청</Item>
            <Item>배민주문접수</Item>
            <Item>사장님꿀팁</Item>
            <Item>이벤트∙혜택</Item>
            <Item>이용가이드</Item>
            <Item>공지사항</Item>
        </CeoPlaza>
        <CeoServices>
            <H2>사장님 서비스</H2>
            <Item>배민셀프서비스</Item>
            <Item>배민상회</Item>
            <Item>배민아카데미</Item>
            <Item>배민장부</Item>
            <Item>로봇렌탈</Item>
        </CeoServices>
        <CeoHelp>
            <H2>사장님 도움센터</H2>
            <div>
            <HelpItem>
                <A><HeadIcon/>고객센터<em>자주묻는 질문과 1:1문의</em><ExpandIcon/></A>
            </HelpItem>
            <HelpItem>
                <A><KakaoIcon/>실시간 상담<em>카카오톡 상담과 채팅 상담</em><ExpandIcon/></A>
            </HelpItem>
            <HelpItem>
                <A><AdIcon/>광고가입센터<em>배민 광고 입점 문의</em><ExpandIcon/></A>
            </HelpItem>
            <HelpItem>
                <A><MapIcon/>프랜차이즈 배달지역 조정 신청<ExpandIcon/></A>
            </HelpItem>
            </div>
        </CeoHelp>
        </SiteMap>
    )
}