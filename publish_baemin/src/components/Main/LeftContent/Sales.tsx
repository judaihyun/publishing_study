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

const Sales = styled.div`
    display: flex;
    margin-top: 16px;
    border: 1px solid rgb(236, 238, 242);
    border-radius: 4px;
    width: 100%;

    & > :nth-child(2){
        margin: 0px 16px;
    } 

    h5{
        line-height: 1.4;
        font-size: 16px;
        font-weight: 500;
    }

`;

const SaleItem = styled.div`
    flex: 1 1 0%;
    width: 30%;
    position: relative;
    & img {
        border: 1px solid rgb(236, 238, 242);
        border-radius: 4px;
        width: 100%;
    }
`;

const TextEllipsis = styled.h4`
    margin-top: 16px !important;
    max-height: 2.86em;
    line-height: 1.4;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 500;
`

const H4 = styled(TextEllipsis)`
    font-size: 16px; // responsive
    letter-spacing: -0.4px;
    margin-top: 16px;
`;

const H6 = styled.h6`
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
`;

const PriceTag = styled.h3`
    font-weight: 500;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 18px; // respo
    line-height: 24px; // resp
    letter-spacing: -0.4px; // resp
`;

const PriceSale = styled.div`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.4px;
    text-decoration: line-through;
`;

export default () => {
    return (
        <Container>
            <Title>설 명절 할인쿠폰&인기상품</Title>
            <Sales>
                <SaleItem>
                    <img src='https://cdn-mart.baemin.com/goods/custom/20200702-MARTENG-8420/12316-main-01.jpg'/>
                    <H4>[든든] 국내산 돈뒷다리 불고기용 (6*5*0.3cm) 1kg 1개</H4>
                    <H6>1kg 당 5,890원 / 1ea</H6>
                    <PriceTag>5,890원</PriceTag>
                    <PriceSale>6,190원</PriceSale>
                </SaleItem>
                <SaleItem>
                    <img src='https://cdn-mart.baemin.com/sellergoods/list/a7dc3e2b-fe03-4479-ae91-2a681244bc54.jpg'/>
                    <H4>[든든] 펩시 콜라 355ml 24캔</H4>
                    <H6>개당 642원 / 24ea</H6>
                    <PriceTag>15,400원</PriceTag>
                </SaleItem>
                <SaleItem>
                    <img src='https://cdn-mart.baemin.com/goods/custom/20200714-MARTENG-8721/13778-main-01.jpg'/>
                    <H4>[든든] 중국산 냉동 다진마늘 1kg</H4>
                    <H6>개당 2,220원 / 1ea</H6>
                    <PriceTag>2,220원</PriceTag>
                </SaleItem>
            </Sales>
            <MoreButton mt={32} front={"배민상회"} text={"에서 상품 더보기"}/>
        </Container>
    );
}