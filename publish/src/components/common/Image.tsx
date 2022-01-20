import React from 'react';
import styled from 'styled-components';

type IProps = {
    src: string;
    size?: number;
}



const ImageBox = styled.img`
    height: ${(props: IProps) => props.size || '100%'};
    width: ${(props: IProps) => props.size || '100%'};
    background-repeat: no-repeat;
    object-fit: cover;
`;


const Image = (props:IProps) => {
    return (
        <div>
            <ImageBox src={props.src} size={props.size}/>
        </div>
    );
}


export default Image;