import { HeaderFb, HeaderGoods, HeaderInsta, HeaderJnto, HeaderLoc, HeaderTheme, HeaderTitle, HeaderTopic, Mlogo } from 'assets/image/Image';
import SearchBox from 'components/common/SearchBox';
import React from 'react';
import styled from 'styled-components';
import Image from '../common/Image';

const Header = styled.header`
    border: 1px solid black;
    min-width: 700px;
`;

const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SnsBox = styled.div`
    width: 8rem;
    display: flex;
    justify-content: space-between;
    @media ${ ({theme}) => theme.device.laptop} {
        display: none;
    }
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
            <SearchBox/>
            <SnsBox>
            <Image src={HeaderFb} size={30}/>
            <Image src={HeaderInsta} size={30}/>
            <Image src={HeaderJnto} size={30}/>
            </SnsBox>
            </Menu>
        </Header>
    )
}
