import MoreButton from 'components/common/MoreButton';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    margin-bottom: 48px;
`;

const Title = styled.span`
    font-weight: 500;
`;

const InfoSection = styled.div`
    position: relative;
    margin-top: 12px;
    margin-bottom: 16px;
`;


const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    border-radius: 4px;
`;

const ImgSection = styled.a`
    position: relative;
    &:before{
        width:100%;
        height: 120px;
        bottom: 0px;
        position : absolute;
        background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 87.5%);
        content: '';
        border-radius: 4px;
    }
`;

const InfoImgLabel = styled.section`
    position: absolute;
    bottom: 0;
    color: white;
    padding: 12px 16px;
    line-height: 20px;
`;

const ItemSection = styled.div`
    display: flex;
    margin-bottom: 16px;
`;

const ItemImg = styled.div`
    width: 150px;
    height: 85px;
    margin-right: 16px;
`;

const ItemLabel = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > h4 {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 2px;
        font-weight: 500;
    }
    & > span {
        font-size: 12px;
        color: rgb(142, 146, 159);

    }
`;

type ItemProps = {
    src: string;
    title: string;
    subtitle: string;
}

type TData = {
    src: string;
    title: string;
    subtitle: string;
}

const data = [
    {
        title: '방역지원금 300만원과 명절에 챙겨볼 소식',
        subtitle: '장사소식',
        src: 'https://img-cdn.baemin.com/fw/ceoImage/2022/1/26/18704139_1643173903387.jpg',
    },{
        title:'2022년 달라지는 분리수거와 재활용 기준',
        subtitle: '가게운영',
        src: 'https://img-cdn.baemin.com/fw/ceoImage/2022/1/26/19990859_22481889_content.jpeg',
    },{ 
        title:'🚨주의! 명절에 이런 문자 받으시면 스미싱입니다',
        subtitle: '사고예방',
        src: 'https://img-cdn.baemin.com/fw/ceoImage/2022/1/26/18884880_1643174084231.jpg',
    },{
        title:`'우리 가게는 괜찮을까요?' 숫자로 보는 운영평가법`,
        subtitle: '마케팅',
        src: 'https://img-cdn.baemin.com/fw/ceoImage/2022/1/26/32703551_1643187902775.jpg',
    },{
        title:'🖐잠깐! 배민 직원과 협력사 사칭에 주의하세요',
        subtitle: '사고예방',
        src: 'https://img-cdn.baemin.com/fw/ceoImage/2022/1/26/19055978_1643174255227.jpg',
    }
];



const ItemSections = ({title, subtitle, src}: ItemProps) => (
    <ItemSection>
        <ItemImg>
            <Image src={src}/>
        </ItemImg>
        <ItemLabel>
            <h4>{title}</h4>
            <span>{subtitle}</span>
        </ItemLabel>
    </ItemSection>
)


export const CeoInfo = () => {
    return (<Container>
        <Title>사장님이 꼭 알아야할 정보</Title>
        <InfoSection>
            <ImgSection>
                <Image src={'https://img-cdn.baemin.com/fw/ceoImage/2022/1/28/13662092_image.png'}/>
            </ImgSection>
            <InfoImgLabel>
                <span style={{'fontSize':12}}>가게운영</span>
                <h4>'2월에 ❄️올림픽이 온다' 주요 경기일정 총정리!</h4>
            </InfoImgLabel>
        </InfoSection>
        {data && data.map((item:TData, idx) =>
            <ItemSections 
                key={idx}
                src={item.src} 
                subtitle={item.subtitle}
                title={item.title}/>
        )}
        <MoreButton mt={16} text={"외식업 이야기 더보기"}/>
    </Container>)
}