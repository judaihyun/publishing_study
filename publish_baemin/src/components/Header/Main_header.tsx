import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    height: 65px; // responsive
    border: 1px solid red;
    `;

const WrappedMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;


const HambugIcon = styled.i`
    &:before{
        font-size: 24px;
        content:"\f122";
        padding: 20px 16px;
        font-family: custom-icons !important;
    }
`;


const LogoBox = styled.div`
    flex-grow: 1;
    position: absolute;
    text-align: center;
    width: 100%;
`;

const BaeminLogo = styled.img.attrs(({
    src: 'https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/logo/ceo@2x.png?ver=687b9189405c0e41587aaa0c235bce71',
}))`
    width: 146px; //responsive
    
`;

export default () => {

    return (
        <Header>
            <WrappedMenu>
                <HambugIcon/>
                <LogoBox>
                    <BaeminLogo/>
                </LogoBox>
            </WrappedMenu>
        </Header>
    );
}