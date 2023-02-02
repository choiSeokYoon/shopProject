import React, { useState } from 'react'
import './DetailInfo.scss'
import Button from '../Button'

export default function DetailInfo({item , cart, setCart}) {
    const [count, setCount] = useState(1)

    const plusCount = () =>{
        setCount(count+1)
    }
    const minusCount = ()=>{
        if(count===1) return 
            setCount(count-1)
    }
    const setQuantity =(id,count) =>{
        const found = cart.filter((el) => el.id ===id)[0];
        const idx = cart.indexOf(found);
        const cartItem ={
            id: item.id,
            image:item.image,
            title:item.title,
            price:item.price,
            count:count
          };
          setCart([...cart.slice(0,idx), cartItem, ...cart.slice(idx+1)])
    }
    const handleCart = () =>{
        const cartItem ={
          id: item.id,
          image:item.image,
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
      console.log(cart) 
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
                <button size="medium"  color="gray" onClick={()=>handleCart()}>CART</button>
            </div>
        </div>
    </div>
  )
}
