import MenuBarContainer from 'components/Header/MenuBar/MenuBarContainer';
import React from 'react';
import styled from 'styled-components';
import CeoSection from './CeoService/CeoSection';
import LeftContent from './LeftContent/LeftContent';



const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const ContentContainer = styled.div`
    padding: 24px 16px 80px; // responsive max-width 879px
`;


export default () => {
    return (
    <Container>
    <MenuBarContainer/>
        <ContentContainer>
        <div style={{height:'70px', border: '1px blue solid'}}>
        slider
        </div>
        <CeoSection/>
        <LeftContent/>
        </ContentContainer>
    </Container>
    )
}