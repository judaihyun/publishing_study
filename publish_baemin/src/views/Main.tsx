import BaeminOne from 'components/Header/BaeminOne';
import Content from 'components/Main/Content';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default () => {
    return (
        <Container>
            <BaeminOne/>
            <Content/>
        </Container>
    )
}