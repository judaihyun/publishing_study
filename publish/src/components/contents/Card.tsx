import { CardLikeIcon } from 'assets/image/Image';
import ImgBox from 'components/common/ImgBox';
import { CardData } from 'publish';
import React from 'react';
import styled, { css } from 'styled-components';

type CardProps = {
    isCamp?: boolean;
}


const Area = styled.span`
    color: #000;
    font-size: 12px;
    font-weight: 700;
    padding: 12px;
`;

const TitleBox = styled.div`
    display: flex;
    padding: 8px 10px 8px 7px;
    border-bottom: 1px solid #d2d2d2;
`;

const CardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid #d2d2d2;
    height: 100%;
    @keyframes card{
        from{
            opacity: 0;
            transform: scale(0);
        }
        to{
            opacity: 1;
            transform: scale(1);
        }
    }
    animation: card 1s;
    ${(props:CardProps) => props.isCamp && css`
        background-color: #000000;
        color: white;
        ${Area} {
            color: #ccc;
        }
        ${TitleBox} {
            border-bottom: 1px solid #3e3434;
        }
    `};
`;

const CardImg = styled.div`
    height: 100%;
    box-sizing: border-box;
`;



const TitleText = styled.div`
    font-size: 13px;
    font-weight: 700;
    font-family: 'Nanum Barun Gothic Bold';
    flex-basis: 80%;
`;

const AreaBox = styled.div`
    display: flex;
`;

const CampLogo = styled.div`
    margin: 0px 5px 5px 5px;
    height: 30px;
    border-left: 10px solid #c71111;
    border-right: 10px solid #c71111;
    border-bottom: 10px solid transparent;
`;


export default (props:{data:CardData}) => {
    const { data } = props;
    return (
        <CardContainer isCamp={data.isCamp}>
            <CardImg>
                <ImgBox src={data.image}/>
            </CardImg>
            <TitleBox>
                <TitleText>{data.title}</TitleText>
                {
                data.isCamp || (<ImgBox src={CardLikeIcon} size={0} divStyle={{marginLeft:'auto', cursor:'pointer'}}/>)
                }
            </TitleBox>
            <AreaBox>
                {data.isCamp && (<CampLogo></CampLogo>)}
                <Area>{data.area}</Area>
            </AreaBox>
        </CardContainer>
    )
}