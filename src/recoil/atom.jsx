import {atom} from "recoil"
//디테일데이터
export const recoilDetailData = atom({
    key : "recoilDetailData",
    default: undefined
})

//카테고리
export const recoilCategory = atom({
    key:"recoilCategory",
    default: "All",
});
//카트
export const recoilCart = atom({
    key:"recoilCart",
    default:[]
})
//카트 체크리스트
export const recoilCheckList = atom({
    key: "recoilCheckList",
    default:[]
})
//카트 토탈
export const recoilTotal = atom ({
    key: "recoilTotal",
    default:0
})