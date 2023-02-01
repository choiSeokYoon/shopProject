import React from 'react'
import { NavLink } from 'react-router-dom'
import './ProductItem.scss'

export default function ProductItem({items}) {
  return (
    <>
      {items && items.map(item =>
        <li key={item.id} className='item_list'>
          <NavLink to={`/shop/detail/${item.id}`}>
            <div className='item_box'>
              <h3 className='item_title'>{item.title}</h3>
              <img src={item.image} alt="상품이미지" />
              <p className='item_price'>Price : {item.price}$</p>
            </div>
          </NavLink>
        </li>
      )}
    </>
  )
}
