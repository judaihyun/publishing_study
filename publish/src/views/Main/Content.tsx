import { Card01, Card02, Card03, Card05, Card06, ContentTitle } from 'assets/image/Image';
import ImgBox from 'components/common/ImgBox';
import Card from 'components/contents/Card';
import { CardData } from 'publish';
import React, { useState } from 'react';
import styled from 'styled-components';

const ContentContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 3rem;
`;

const Box = styled.div`
    height: 100%;
    width: 65%;
    @media ${ ({theme}) => theme.device.laptop} {
        width: 90%;
    }
`;

const ContentLogo = styled.div`
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    height: 50px;
`;

const Contents = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, auto));
    column-gap: 0.7rem;
    row-gap: 2.5rem;
`;

const source:CardData[] = [{
    id: 5,
    image: Card05,
    title: '후지이미나X너의여행은 EP.06 미나의 러브레터 from. 오타루',
    area: '홋카이도, Japan',
},{
    id: 6,
    image: Card06,
    title: '후지이미나X너의여행은 EP.01 미나의 도쿄On&Off',
    area: 'Japan',
},{
    id:1,
    image: Card01,
    title: 'The Reason_오늘, 여기, 일본 내가 떠나고 싶은 일본여행의 테마는?',
    area: 'CAMPAIGN',
    isCamp: true,
},{
    id:2,
    image: Card02,
    title: '베리어프리 일본여행 Feel free with Japan (2분 30초 Ver.)',
    area: 'CAMPAIGN',
    isCamp: true,
},{
    id:3,
    image: Card03,
    title: '베리어프리 일본여행 Feel free with Japan (60초 Ver.)',
    area: 'CAMPAIGN',
    isCamp: true,
}];


export default () => {
    const [data, setData] = useState(source);
    return (
        <ContentContainer>
            <Box>
            <ContentLogo>
                <ImgBox src={ContentTitle}/>
            </ContentLogo>
            <Contents>
                {data && data.map((item:CardData) => (
                    <Card key={item.id} data={item}></Card>
                ))}
            </Contents>
            </Box>
        </ContentContainer>
    );
}