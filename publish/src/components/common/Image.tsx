import React from 'react';
import styled from 'styled-components';


const ImageContainer = styled.div`
    display: flex;
    /* height: 80px; */
    /* width:100%; */
    /* height:100%; */
`;

const ImageBox = styled.img`
    width:100%;
    /* height:100%; */
`;

type IProps = {
    src: string;
}

const Image = (props:IProps) => {
    return (
        <ImageContainer>
            <ImageBox src={props.src}/>
        </ImageContainer>
    );
}


export default Image;