import { HeaderFb, HeaderGoods, HeaderInsta, HeaderJnto, HeaderLoc, HeaderMbLogo, HeaderMbMenu, HeaderMbSearch, HeaderTheme, HeaderTitle, HeaderTopic, Mlogo } from 'assets/image/Image';
import ImgBox from 'components/common/ImgBox';
import SearchBox from 'components/common/SearchBox';
import React, { useState } from 'react';
import styled from 'styled-components';
import DropMenu from './DropMenu';

const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${ ({theme}) => theme.device.mobile} {
        height: 3rem;
    }
    @media ${ ({theme}) => theme.device.laptop} {
        height: 5rem;
    }
    @media ${ ({theme}) => theme.device.desktop} {
        height: 5rem;
    }
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 5px 3px rgb(0 0 0 / 10%);
    position: fixed;
    top: 0;
    z-index: 1;
`;

const MobileMenu = styled.div`
    display: none;
    width: 100%;
    padding: 10px;
    @media ${ ({theme}) => theme.device.mobile} {
        padding: 5px;
    }
    @media ${ ({theme}) => theme.device.laptop} {
        display: flex;
        justify-content: space-between;
    }
`;

const MobileIcon = styled.img`
    @media ${ ({theme}) => theme.device.mobile} {
        height: 45px;
    }
    @media ${ ({theme}) => theme.device.laptop} {
        height: 75px;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
    @media ${ ({theme}) => theme.device.laptop} {
        display: none;
    }
`;

const SnsBox = styled.div`
    width: 10rem;
    display: flex;
    justify-content: space-between;
    @media ${ ({theme}) => theme.device.laptop} {
        display: none;
    }
`;

const LocationIcon = styled.img`
    cursor: pointer;
`;

type MenuItem = {
}[][];

const subMenuItem:MenuItem = [
    [],
    ['ALL','도쿄','간토','간사이','훗카이도','규슈','도호쿠','주부','주・시코쿠','오키나와'],
    ['ALL','맛집','쇼핑','체험','온천','가족여행','봄여행','레저','스포츠']
]

enum MENU_TYPE {
    LOC = 1,
    THEME = 2,
}

export default () => {
    const [show, setShow] = useState(false);
    const [curMenu, setMenu]= useState<number>(0);

    const enter = (menu:number) => {
        setShow(true);
        setMenu(menu);
    }

    const close = () => {
        setMenu(0);
    }

    return (
        <Header>
            <Menu>
            <ImgBox src={Mlogo} divStyle={{cursor:'pointer'}}/>
            <ImgBox src={HeaderTitle} divStyle={{cursor:'pointer'}}/>
            <LocationIcon src={HeaderLoc} 
                onMouseEnter={() => enter(MENU_TYPE.LOC)} 
                onMouseLeave={close}/>
            <LocationIcon src={HeaderTheme} 
                onMouseEnter={() => enter(MENU_TYPE.THEME)} 
                onMouseLeave={close}/>
            <ImgBox src={HeaderTopic} divStyle={{cursor:'pointer'}}/>
            <ImgBox src={HeaderGoods} divStyle={{cursor:'pointer'}}/>
            <SearchBox/>
            <SnsBox>
            <ImgBox src={HeaderFb} divStyle={{cursor:'pointer'}}/>
            <ImgBox src={HeaderInsta} divStyle={{cursor:'pointer'}}/>
            <ImgBox src={HeaderJnto} divStyle={{cursor:'pointer'}}/>
            </SnsBox>
            </Menu>
            <MobileMenu>
                <MobileIcon src={HeaderMbSearch}/>
                <MobileIcon src={HeaderMbLogo}/>
                <MobileIcon src={HeaderMbMenu}/>
                {/* <ImgBox src={HeaderMbSearch} divStyle={{padding:'20px'}}/> */}
                {/* <ImgBox src={HeaderMbLogo} divStyle={{padding:'20px'}}/> */}
                {/* <ImgBox src={HeaderMbMenu} divStyle={{padding:'20px'}}/> */}
            </MobileMenu>
            {show && 
                <DropMenu menu={curMenu} subMenuItem={subMenuItem}/>
            }
        </Header>
    )
}
