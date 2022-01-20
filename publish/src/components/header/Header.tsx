import { HeaderGoods, HeaderLoc, HeaderTheme, HeaderTitle, HeaderTopic, Mlogo } from 'assets/image/Image';
import React from 'react';
import styled from 'styled-components';
import Image from '../common/Image';

const Header = styled.header`
    border: 1px solid black;
    /* height: 90px; */
`;

const Menu = styled.div`
    display: flex;
    justify-content: center;
    /* height: 80px; */
`;


export default () => {
    return (
        <Header>
            <Menu>
            <Image src={Mlogo}/>
            <Image src={HeaderTitle}/>
            <Image src={HeaderLoc}/>
            <Image src={HeaderTheme}/>
            <Image src={HeaderTopic}/>
            <Image src={HeaderGoods}/>
            </Menu>
        </Header>
    )
}
