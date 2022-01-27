import MoreButton from 'components/common/MoreButton';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    margin-top: 40px;
`;


const NotiLabel = styled.span`
    font-weight: 500;
`;

const NotiSection = styled.div`
    margin-top: 16px;
    border: 1px solid rgb(236, 238, 242);
    padding: 24px;
`;

const H4 = styled.h4`
    text-align: left;
    font-weight: 500;
`;

export default () => {
    return (
        <Container>
            <NotiLabel>중요 공지사항</NotiLabel>
            <NotiSection>
                <H4>[공지] 배민1(one) 중개이용료 인하 및 새 요금제 안내 </H4>
            </NotiSection>

            <MoreButton mt={16} text={"공지사항 더보기"}/>
        </Container>
    )
}