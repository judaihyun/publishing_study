import MoreButton from 'components/common/MoreButton';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    margin-top: 48px;
    padding: 16px;  // responsive
    border: 1px solid rgb(236, 238, 242);
    border-radius: 4px;
`;

const TodayNote = styled.div`
    border-bottom: 1px solid rgb(236, 238, 242);
    padding: 0px 0px 24px; // responsive
`;

const CalIcon = styled.i`
    font-family: custom-icons;
    margin-left: 4px;
    color: rgb(142, 146, 159);
    font-size: 24px;
    &:before{
        content: "\f108";
    }
`;

const H5 = styled.h5`
    margin-left: 8px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;
    & > span{
        font-weight: 500;
    }
`;

const Date = styled.div`
    display: flex;
    align-items: center;
`;

const DateSub = styled.div`
    margin-left: 32px;  // responsive
    margin-top: 8px; // responsive
    color: rgb(142, 146, 159);
    font-size: 14px;
    line-height: 20px;
`;

const Summary = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 8px;
`;

const H4 = styled.h4`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`;

export default () => {
    return (
    <>
    <Container>
        <TodayNote>
            <Date>
                <CalIcon/>
                <H5>오늘은 <span>01/31(월)</span> 입니다.</H5>
            </Date>
            <DateSub>아래 정보는 '배민장부'에서 제공합니다.</DateSub>
        </TodayNote>        
        <Summary>
            <H4>오늘 우리가게 매출액과 입금액이<br/>궁금하다면?</H4>
            <img src="https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/note.png"/>
        </Summary>
    </Container>
    <MoreButton mt={16} front={"배민장부"} text={"\u00A0가입하고 매출 정보 확인하기"}/>
    </>
    );
}