import { Tdata } from "publish";
import { atom } from "recoil";

const data:Tdata[] = [{
    label: '셀프서비스',
    src: 'https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/badge_self@2x.png?ver=5ddf0739897a1b5aaf46cfdd4e1dcf53',
},{
    label: '배민상회',
    src:'https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/badge_mart@2x.png?ver=980a4953ec28692d81aef063e6b90c4a',
},{
    label: '배민아카데미',
    src:'https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/badge_academy@2x.png?ver=efc9612e29b1f7f7f435106543b637d7',
},{
    label: '배민장부',
    src:'https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/badge_note@2x.png?ver=732b064ba8e02bc23a721d6f4bf411fa',
},{
    label: '로봇렌탈',
    src:'https://ceo-cdn.baemin.com/cdn/ceo-square/src/images/badge_robot@2x.png?ver=f57ad3056d677f9f49c99ca874c1b15b',
}]


export const CeoServiceData = atom<Tdata[]>({
    key:'CeoServiceData',
    default: data,
})



