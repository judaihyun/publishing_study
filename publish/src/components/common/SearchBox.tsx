import { BtnSearch } from 'assets/image/Image';
import React from 'react';
import styled from 'styled-components';
import Image from './Image';


const Search = styled.div`
    display: flex;
    @media ${ ({theme}) => theme.device.desktop} {
        margin-left: 20px;
        background-color:blue;
        border: 3px solid blue;
    }
    @media ${ ({theme}) => theme.device.laptop} {
        margin-left: 20px;
        background-color:red;
        border: 3px solid red;
    }
`;

const SearchBox = () => {
    return (
        <Search>
            <input/>
            <Image src={BtnSearch}/>
        </Search>
    )
}


export default SearchBox;