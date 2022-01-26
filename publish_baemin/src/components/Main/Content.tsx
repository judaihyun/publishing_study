import Main_header from 'components/Header/Main_header';
import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    height: 100vh;
    border: 1px solid green;
`;

const ContentContainer = styled.div`
    border: 1px solid blue;
`;


export default () => {
    return (
    <Container>
    <Main_header/>
        <ContentContainer>
        main
        </ContentContainer>
    </Container>
    )
}