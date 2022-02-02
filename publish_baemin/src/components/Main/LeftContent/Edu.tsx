import MoreButton from 'components/common/MoreButton';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 48px;
`;

const Title = styled.h5`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;
`;

const Edu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
`;

const EduItem = styled.div`
    display: flex;
    border: 1px solid rgb(236, 238, 242);
    width: 100%;
    padding: 16px; // responsive
    margin: 8px 0px 0px;
    & img { // resposive
        min-width: 118px;
        width: 118px;
        height: 76px;
        border: 1px solid rgb(236, 238, 242);
        border-radius: 4px;
        object-fit: cover;
    }
`;

const Summary = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin: 0px 0px 0px 16px;
    width:100%;
    span{
        padding: 1px 8px 3px;
        line-height: 20px;
        font-size: 12px;
        color: white;
        border-radius: 20px;
        background-color: rgb(83, 87, 98);
    }
`;

const SubSummary = styled.div`
    display: flex;
    justify-content: space-between;
`;

const H4 = styled.h4`
    margin: 8px 0px 0px; //responsive
    font-weight: 500;
`;

const H6 = styled.h6`
    font-size: 14px;
    letter-spacing: -0.4px;
    color: rgb(142, 146, 159) !important;
`;

export default () => {
    return (
        <Container>
            <Title>지금 신청 가능한 배민아카데미 교육</Title>
            <Edu>
                <EduItem>
                    <img src='https://adm-cdn.baemin.com/upload/education/554/be65038e-809f-458f-b2e7-8f614280282c.jpg'/>
                    <Summary>
                        <H4>인스타그램 팔로워 천 명 도전하기</H4>
                        <SubSummary>
                            <H6>2.10(목)~3.10(목) / 5회 과정</H6><span>D-1</span>
                        </SubSummary>
                    </Summary>
                </EduItem>
                <EduItem>
                    <img src='https://adm-cdn.baemin.com/upload/education/563/5d9c28e7-fad3-4e34-947d-2e21a101ff01.jpg'/>
                    <Summary>
                        <H4>우리 가게 블로그, 검색 노출 성공 전략</H4>
                        <SubSummary>
                            <H6>2.9(수)~3.8(화) / 5회과정</H6><span>D-1</span>
                        </SubSummary>
                    </Summary>
                </EduItem>
                <EduItem>
                    <img src='https://adm-cdn.baemin.com/upload/education/562/8e751687-d87e-456f-b6db-ac60cdc591ec.jpg'/>
                    <Summary>
                        <H4>토마토 소스를 활용한 스튜 레시피</H4>
                        <SubSummary>
                            <H6>2.9 (수)</H6><span>D-2</span>
                        </SubSummary>
                    </Summary>
                </EduItem>
            </Edu>
            <MoreButton mt={32} front={"배민상회"} text={"에서 상품 더보기"}/>
        </Container>
    );
}