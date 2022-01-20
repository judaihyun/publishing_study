import { ContentTitle } from 'assets/image/Image';
import Image from 'components/common/Image';
import React from 'react';
import styled from 'styled-components';


const ContentContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Box = styled.div`
    height: 100%;
    width: 80%;
    border: 2px solid green;
`;

const ContentLogo = styled.div`
    display: flex;
    align-items: center;
    background-color: yellow;
    display: flex;
    height: 50px;
`;

const Contents = styled.div`
    display: flex;
    border: 2px solid red;
    height: 2000px;
`;

export default () => {
    return (
        <ContentContainer>
            <Box>
            <ContentLogo>
                <Image src={ContentTitle} size={100}/>
            </ContentLogo>
            <Contents>
                <Image src={ContentTitle} size={50}/>
                <Image src={ContentTitle} size={50}/>
                <Image src={ContentTitle} size={50}/>
            </Contents>
            </Box>
        </ContentContainer>
    );
}