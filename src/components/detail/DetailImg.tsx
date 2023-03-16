import React from 'react'
import { useRecoilState } from 'recoil'
import { recoilDetailData } from '../../recoil/atom'
import './DetailImg.scss'

export default function DetailImg() {
  const [item, setItem] = useRecoilState(recoilDetailData)
  return (
    <div className='detail_left'>
        <div className='detail_item_img'>
            <img src={item.thumbnail} alt="" />
        </div>
    </div>
  )
}
