import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailInfo from '../components/detail/DetailInfo'
import DetailImg from '../components/detail/DetailImg'
import './ShopDetail.scss'

export default function ShopDtail({cart, setCart}) {
  const [item, setItem] = useState(undefined)
  const {id}  = useParams()

  
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

  
console.log(cart)
  return (
    item && (
    <div className='shopdtail'>
      <div className='container'>
        {item === undefined ? 
          <div>로딩중...</div> :item === null ?
          <div>404</div> : (
            <div className='detail_item'>
              <DetailImg item={item}/>
              <DetailInfo item={item} cart={cart} setCart={setCart}/>
            </div>
          )
        }
      </div>      
    </div>
    
    )
   
  )
}
