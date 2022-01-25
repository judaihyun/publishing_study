import { BtnSearch } from 'assets/image/Image';
import React from 'react';
import styled from 'styled-components';


const Search = styled.div`
    display: flex;
    @media ${ ({theme}) => theme.device.wide} {
        width: 40%;
        padding-left: 8%;
    };
    @media ${ ({theme}) => theme.device.desktop} {
        width: 30%;
        margin-left: 5%;
    }
    @media ${ ({theme}) => theme.device.laptop} {
        display: none;
    }
`;

const StyledInput = styled.input`
    border: 1px #d5cdcd solid;
    background-image: url(${BtnSearch});
    background-repeat: no-repeat;
    background-position: 99%;
    border-radius: 7px;
    height: 2.2rem;
    width:90%;
`;

const SearchBox = () => {
    return (
        <Search>
            <StyledInput/>
        </Search>
    )
}


export default SearchBox;