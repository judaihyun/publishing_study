import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';


type TProps = {
    active: boolean
}

const Header = styled.div`
    height: 65px; // responsive
    z-index: 999;
    position: sticky;
    top: 0;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid white;
    ${(props:TProps) => props.active && css`
        border-bottom: 1px solid rgb(236, 238, 242);
    `}
    @media all and (min-width: 879px){
        padding: 0px 40px;
        height: 134px;
    }   
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
    @media all and (min-width: 879px){
        position: unset;
        
    }   
`;


const WrapDesktop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid rgb(236, 238, 242);
    width: 100%;
`;


const TopLink = styled.div`
    display:flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.4px;
    color: rgb(142, 146, 159);
    padding: 16px 0px;
`;

const FamilySite = styled.div`

`;

const SiteTag = styled.a`
    position: relative;
    padding: 0px 8px 0px 9px;
    &:not(:first-child):before{
        content: '';
        position: absolute;
        left: 0px;
        top: 4px;
        height: 12px;
        border-left: 1px solid rgb(215, 219, 230);
    }
`;

const QuickOption = styled.div`

`;

const SubMenu = styled.div`

`;

const BaeminLogo = styled.img.attrs(({
    src: 'https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/logo/ceo@2x.png?ver=687b9189405c0e41587aaa0c235bce71',
}))`
    width: 146px; //responsive
    @media all and (min-width: 879px){
        width: 182px;
    }   
`;



export default (props:TProps) => {
    const isDesktop = useMediaQuery({
        query:'all and (min-width: 879px)'
    })

    return (
        <Header {...props}>
        {isDesktop ? 
            <WrapDesktop>
                <TopLink>
                    <FamilySite>
                        <SiteTag>배민셀프서비스</SiteTag>
                        <SiteTag>배민상회</SiteTag>
                        <SiteTag>배민아카데미</SiteTag>
                        <SiteTag>배민장부</SiteTag>
                        <SiteTag>로봇렌탈</SiteTag>
                    </FamilySite>
                    <QuickOption>
                        <SiteTag>공지사항</SiteTag>
                        <SiteTag>고객센터</SiteTag>
                        <SiteTag>로그인</SiteTag>
                        <SiteTag>회원가입</SiteTag>
                    </QuickOption>
                </TopLink>
                <SubMenu>
                <LogoBox>
                    <BaeminLogo/>
                </LogoBox>
                </SubMenu>
            </WrapDesktop>
            :
            <WrappedMenu>
                <HambugIcon/>
                <LogoBox>
                    <BaeminLogo/>
                </LogoBox>
            </WrappedMenu>
        }
        </Header>
    );
}