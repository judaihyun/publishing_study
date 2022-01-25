import React from 'react';
import styled, {css} from 'styled-components';

type IProps = {
    src: string;
    size?: number;
    divStyle?: React.CSSProperties;
    on?: any;
    off?: any;
}


const ImageContainer = styled.div`
    display: flex;
`;

const ImageBox = styled.img`
    /* height: auto !important; */
    width:100%;
    ${(props:IProps) => props.size && css`
        max-width: ${props.size + '%'};
    `};
    background-repeat: no-repeat;
    object-fit: cover;
`;


const ImgBox = (props:IProps) => {

    return (
        <ImageContainer style={props.divStyle}>
                <ImageBox src={props.src} size={props.size}/>
        </ImageContainer>
    );
}


export default ImgBox;