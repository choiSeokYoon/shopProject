
import './CartItem.scss'
import removeImg from '../../assets/remove.png'
import { useCallback, useState } from 'react'
import React, { useMediaQuery  } from 'react-responsive'


export default function CartItem({cart,  handlCount , onRemove, handleCheckList,checkList ,setCheckList}) {
    
  const isPc = useMediaQuery({
    query:"(min-width:1056px)"
  })
  const isMobile = useMediaQuery({
    query:"(max-width:1056px)"
  })
  return (
    <li className='cart_item_list'>
        <input type="checkbox"  onChange={(e)=>{
          handleCheckList(e.currentTarget.checked,cart.id)
          }}
          checked={checkList.includes(cart.id) ? true : false}
        />
        <div className='cart_img'>
            <img src={cart.image} alt="" />
        </div>
        {isPc && 
        <>
          <p className='cart_item_name'>{cart.title}</p>
          <p className='cart_item_price'>{cart.price * cart.count} $ </p>
        </>
        }
        {isMobile && 
        <div className='cart_item_mobile'>
          <p className='cart_item_name'>{cart.title}</p>
          <p className='cart_item_price'>{cart.price * cart.count} $ </p>
        </div>
        }
        
        <div className='cart_item_count'>
            <button className='item_count_btn' onClick={()=>handlCount("minus", cart.id, cart.count -1)}>-</button>
            <span>{cart.count}</span>
            <button className='item_count_btn' onClick={()=>handlCount("plus", cart.id, cart.count +1)}>+</button>
        </div>
        <img src={removeImg} alt=""  className='item_remove' onClick={()=>onRemove(cart.id)}/>
    </li>
  )
}
