import { FooterSpecial } from 'assets/image/Image';
import React from 'react';
import styled from 'styled-components';
import ImgBox from './ImgBox';

const SpecialContainer = styled.div`
    display: flex;
    width:100%;
    border-top: 1px solid #d2d2d2;
    justify-content: center;
    @media ${ ({theme}) => theme.device.tablet} {
        display: none;
    }
    @media ${ ({theme}) => theme.device.mobile} {
        display: none;
    }
`;

const SpecialBox = styled.div`
    display: flex;
    width: 65%;
    padding: 2rem 0.5rem 2rem 0.5rem;
`;

const LogoBox = styled.div`
    padding-right: 4rem;
`;

const TagBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding-left: 2rem;
    padding-right: 2rem;
    border-left: 1px solid #d2d2d2;
    border-right: 1px solid #d2d2d2;
    height: 100%;
    width: 100%;

`;

const Tag = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0 10px 0 10px;
    margin: 3px 3px;
    height: 1.7rem;
    background-color: black;
    color: white;
    cursor: pointer;
    border-radius: 3px 3px;
`;

const item = ['도쿄','요리','가마쿠라','호텔','휴양지','아울렛','맛집','간사이','후쿠오카','숙박','축제',
'카페','요지야','교토','차이나타운','볼거리','쇼핑','라멘','박물관','캐릭터','애니메이션','도쿄근교'];

export default () => {
    return (
        <SpecialContainer>
            <SpecialBox>
                <LogoBox>
                    <ImgBox src={FooterSpecial}/>
                </LogoBox>
                <TagBox>
                    {item && item.map((items, idx)=>(
                        <Tag key={idx}>{items}</Tag>
                    ))}
                </TagBox>
            </SpecialBox>
        </SpecialContainer>
    )
}