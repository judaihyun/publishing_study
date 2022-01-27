import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    background-color: rgb(255, 207, 0);
`;

const Link = styled.a`
    display: block;
    padding: 13px 16px 14px;
    &:after {
        top: -4px;
        right: -20px;
        width: 240px;
        height: 80px;
        position: absolute;
        content: '';
        background: url("https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/bmone/banner-rider.png?ver=f30f319e5f6cd9e8ccd0b5c7a7cf181d") 50% 50% / 205px no-repeat;
    }
`;

const H4 = styled.h4`
    font-size: 14px;
    line-height: 20px;
    /* font-weight: 400; */
    & > strong {
        font-weight: bolder !important;
    }
`;

export default () => {
    return (
    <Container>
        <Link>
            <H4><strong>배민1</strong>(one) 지금 가입하고 <br/>혜택을 놓치지마세요</H4>
        </Link>
    </Container>
    );
}