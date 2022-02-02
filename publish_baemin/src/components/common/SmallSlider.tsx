import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = styled.div`
    width: 16px;
    height: 16px;
    background-color: yellow;
    margin: 1px 0px 0px 4px;
    width: 16px;
    height: 16px;
`;

const data = [
    {
        name: 'box',
        url:'https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/icons/img_box.png?ver=600cb5aec70907588064c46f6a70289e',
    },{
        name:'vegetable',
        url:'https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/icons/img_vegetable.png?ver=64c81578d210c63aa351ce6c3590c784',
    },{
        name:'meat',
        url:'https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/icons/Img_meat.png?ver=e47a4cd0c96d661a2895e3984d94ee2f',
    },{
        name:'onion',
        url:'https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/icons/img_onion.png?ver=f150a9c674de269b3a4f37a2574d9771',
    }
]

export default () => {
    const [img, setImg] = useState(data);

    return (
        <Slider>

        </Slider>
    )
}