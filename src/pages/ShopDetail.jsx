import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailInfo from '../components/detail/DetailInfo'
import DetailImg from '../components/detail/DetailImg'
import './ShopDetail.scss'
import { useRecoilValue, useRecoilState } from 'recoil';
import { recoilCart, recoilDetailData } from '../recoil/atom'

export default function ShopDtail() {
  const [item, setItem] = useRecoilState(recoilDetailData)
  const [cart, setCart] = useRecoilState(recoilCart)
  const {id}  = useParams()
  console.log(item)
useEffect(()=>{
  const detailData = async ()=>{
    try{
      const json = await axios.get(
        `https://dummyjson.com/products/${id}`
      )
      setItem(json.data)
    }catch(e){
      console.log(e)
    }
  }
  detailData()
}, [id])

  
/* console.log(cart) */
  return (
    item && (
    <div className='shopdtail'>
      <div className='container'>
        {item === undefined ? 
          <div>로딩중...</div> :item === null ?
          <div>404</div> : (
            <div className='detail_item'>
              <DetailImg item={item}/>
              <DetailInfo item={item} />
            </div>
          )
        }
      </div>      
    </div>
    
    )
   
  )
}
