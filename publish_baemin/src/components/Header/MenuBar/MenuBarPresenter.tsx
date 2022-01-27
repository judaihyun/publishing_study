import React from 'react';
import styled, { css } from 'styled-components';


type TProps = {
    active: boolean
}

const Header = styled.div`
    height: 65px; // responsive
    position: sticky;
    top: 0;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid white;
    ${(props:TProps) => props.active && css`
        border-bottom: 1px solid rgb(236, 238, 242);
    `}
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



export default (props:TProps) => {
    
    return (
        <Header {...props}>
            <WrappedMenu>
                <HambugIcon/>
                <LogoBox>
                    <BaeminLogo/>
                </LogoBox>
            </WrappedMenu>
        </Header>
    );
}