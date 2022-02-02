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

const Promotion = styled.div`
    display: flex;
    margin-top: 16px;
    border: 1px solid rgb(236, 238, 242);
    border-radius: 4px;
    width: 100%;
    & img {
        border-radius: 4px 0px 0px 4px;
        width: 104px;
        height: 104px;
    }
    h5{
        line-height: 1.4;
        font-size: 16px;
        font-weight: 500;
    }
    h6{
        display: -webkit-box;
        margin-top: 4px;
        font-size: 14px;
        color:rgb(142, 146, 159) !important;
        line-height: 1.4;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: normal;
        -webkit-line-clamp: 1;
        -webkit-box-orient:vertical;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 16px;
`;

export default () => {
    return (
        <Container>
            <Title>배민상회 첫 구매 프로모션</Title>
            <Promotion>
                <img src='https://cdn-mart.baemin.com/image/inventory/2021-06-10/02df3ead-d6c1-40ce-a331-243d097ebf8c.jpg'/>
                <Text>
                    <h5>첫 구매 사장님을 위한 100원딜+쿠폰패키지</h5>
                    <h6>인기상품 100원으로 구매하고 총 3만원 할인 쿠폰도 놓치지 마세요!</h6>
                </Text>
            </Promotion>
        </Container>
    );
}