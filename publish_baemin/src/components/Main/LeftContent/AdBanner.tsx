import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 80px; // responsive
    margin-top: 48px;
`;

const Banner = styled.div`
    display: flex;
    align-items: center;
    background: url('https://img-cdn.baemin.com/fw/ceoImage/2021/3/30/34530641_%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3.png') right center / cover no-repeat;
    width: 100%;
    padding-left: 16px; //responsive
    height: 80px; // responsive
`;

const H5 = styled.h5`
    color: white;
    font-size: 16px;
    line-height: 1.4;
    text-align: left;
    font-weight: 500;
    width: 260px; // responsive
`;

export default () => {
    return (
    <Container>
        <Banner>
            <H5>배민사장님 공식 블로그에서 더 많은 정보를 확인해보세요.</H5>
        </Banner>
    </Container>
    );
}