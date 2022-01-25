import styled from "styled-components";
import React from 'react';


const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 5rem;
    position:fixed;
    /* height: 50px; */
    opacity: 0.8;
    background-color: #d7f7f4;
    z-index: 99;
    `;

const Li = styled.li`
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    color: #666666;
    font-weight: 500;
    font-size: 0.9rem;
`;

const Span = styled.span`
    border-right: 1px solid #666666;
    padding-right: 1rem;
`;


export default ({menu, subMenuItem}:any) => {
    const hokkaido = () => {

    }
    return (
        <Menu>
            {subMenuItem[menu].map((i:string,idx:number) => {
                return (<Li key={idx} onClick={hokkaido}><Span>{i}</Span></Li>)
            })}
        </Menu>
    )
}