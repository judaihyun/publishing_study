import MoreButton from 'components/common/MoreButton';
import React from 'react';
import styled from 'styled-components';


const MyShopTitle = styled.h5`
    font-weight: 500;
    margin-top: 48px;
    font-size: 16px;
`;

const MediaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
`;

const Media = styled.div`
    position: relative;
    width: 40%;
    flex-grow: 2;
    :nth-child(2n){
        margin-left: 32px;
    }
    :nth-child(3){
        margin-top: 24px;
    }
    :nth-child(4){
        margin-top: 24px;
    }
    
    & img{
        border: 1px solid rgb(236, 238, 242);
        border-radius: 4px;
        width:100%;
    }

    & > h4{
        line-height: 1.4;
        font-weight: 500;
        margin-top: 8px;
        font-size: 16px;
    }

`;

const Tag = styled.h6`
    color: rgb(142, 146, 159) !important;
    font-weight: 500;
    margin-top: 16px;
    font-size: 14px;
`;


const MediaIcon = styled.i`
    display: inline-block;
    line-height: 1em !important;
    &:before{
        content: "\f127";
        width: 1em;
        line-height: 1em;
        vertical-align: top;
        font-style: normal;
        font-family: custom-icons;
    }
`;

const IconWrap = styled.h6`
    position: absolute;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.4px;
    font-weight: normal;

    padding: 1px 8px 3px;
    border-radius: 20px;
    color: white !important;
    background-color: rgba(33, 35, 41, 0.5);
    top: 12px;
    left: 12px;
`;

type TData = {
    src: string;
    tag: string;
    summary: string;
}[]
const Data:TData = [{
    src:'https://img-cdn.baemin.com/fw/ceoImage/2022/1/26/7411235_1.jpeg',
    tag:'#브랜딩',
    summary:'남과 다른 나만의 정체성 찾기',
},{
    src:'https://img-cdn.baemin.com/fw/ceoImage/2022/1/26/7418366_2.jpeg',
    tag:'#블로그 마케팅',
    summary:'블로그 콘텐츠를 활용한 SNS 확장 방법',
},{
    src: 'https://img-cdn.baemin.com/fw/ceoImage/2022/1/26/7422765_3.jpeg',
    tag:'#블로그 마케팅',
    summary:'통계를 활용한 블로그 상태 바로알기',
},{
    src:'https://img-cdn.baemin.com/fw/ceoImage/2022/1/26/7428960_4.jpeg',
    tag:'#SNS 사진 보정',
    summary:'상품 사진찍기 2:스타일링과 보정하기',
}];

export default () => {
    return (
    <>
    <MyShopTitle>새해맞이! SNS로 내 가게 홍보하기</MyShopTitle>
    <MediaContainer>
        {Data && Data.map((item,idx) => (
        <Media key={idx}>
            <img src={item.src}/>
            <Tag>{item.tag}</Tag>
            <h4>{item.summary}</h4>
            <IconWrap><MediaIcon/>동영상</IconWrap>
        </Media>
        ))}
    </MediaContainer>
    <MoreButton mt={32} front={'배민아카데미 '} text={'에서 동영상 더보기'}/>
    </>
    );
}