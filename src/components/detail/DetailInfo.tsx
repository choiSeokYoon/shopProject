import React, { useState } from 'react'
import './DetailInfo.scss'
import { useRecoilState } from 'recoil';
import { recoilCart, recoilDetailData } from '../../recoil/atom';
import { IData } from '../../type/data.type';

export default function DetailInfo() {
    const [count, setCount] = useState(1)
    const [cart, setCart] = useRecoilState(recoilCart)
    const [item, setItem] = useRecoilState(recoilDetailData)
    const plusCount = () =>{
        setCount(count+1)
    }
    const minusCount = ()=>{
        if(count===1) return 
            setCount(count-1)
    }
    const setQuantity =(id:number,count:number) =>{
        const found = cart.filter((el) => el.id ===id)[0];
        const idx = cart.indexOf(found);
        const cartItem : IData={
            id: found.id,
            thumbnail:found.thumbnail,
            discountPercentage: found.discountPercentage,
            rating: found.rating,
            stock: found.stock,
            brand: found.brand,
            category:found.category,
            description:found.description,
            images:found.images,
            title:found.title,
            price:found.price,
            count: count,
          };
          setCart([...cart.slice(0,idx), cartItem, ...cart.slice(idx+1)])
    }
    const handleCart = () =>{
        const cartItem :IData={
            id: item.id,
            thumbnail:item.thumbnail,
            discountPercentage: item.discountPercentage,
            rating: item.rating,
            stock: item.stock,
            brand: item.brand,
            category:item.category,
            description:item.description,
            images:item.images,
            title:item.title,
            price:item.price,
             count:count
        }
        const found = cart.find((el) => el.id ===cartItem.id);
        
        if(found) setQuantity(cartItem.id, found.count + count)
        else {
            setCart([...cart,cartItem])
        }
        
      } 
  return (
    <div className='detail_right'>
        <div className='detail_title'>
            <h2>{item.title}</h2>
        </div>
        <div className='detail_info'>
            <div className='detail_description'>
                <p>{item.description}</p>
            </div>
            <div className='detail_price'>
                <p>{item.price*count}$</p>
            </div>
            <div className='detail_count'>
                <button type='button' className='count_btn' onClick={minusCount}>-</button>
                <span>{count}</span>
                <button type='button' className='count_btn' onClick={plusCount}>+</button>
            </div>
            <div className='detail_cart'>
                <button color="gray" onClick={()=>handleCart()}>CART</button>
            </div>
        </div>
    </div>
  )
}
