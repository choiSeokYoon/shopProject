import {atom} from "recoil"
import { IData } from "../type/data.type";
//디테일데이터
export const recoilDetailData = atom<IData>({
    key : "recoilDetailData",
    default: undefined
})

//카테고리
export const recoilCategory = atom<string>({
    key:"recoilCategory",
    default: "All",
});
//카트
export const recoilCart = atom<IData[]>({
    key:"recoilCart",
    default:[]
})
//카트 체크리스트
export const recoilCheckList= atom<number[]>({
    key: "recoilCheckList",
    default:[]
})
//카트 토탈
export const recoilTotal= atom<number>({
    key: "recoilTotal",
    default:0
})