import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { recoilCategory } from '../../recoil/atom'
import { fatchPostData } from '../../recoil/selector'
import './ProductItem.scss'

export default function ProductItem() {
  const [categorys, setCategorys] = useRecoilState(recoilCategory)

  const items = useRecoilValue(fatchPostData)
  const categoryData = 
        categorys === "All"
            ? items
            : items.filter((item) => item.category === categorys)
    
  return (
    <>
      {categoryData.map(item =>
        <li key={item.id} className='item_list'>
          <NavLink to={`/shop/detail/${item.id}`}>
            <div className='item_box'>
              <h3 className='item_title'>{item.title}</h3>
              <img src={item.thumbnail} alt="상품이미지" />
              <p className='item_price'>Price : {item.price}$</p>
            </div>
          </NavLink>
        </li>
      )}
    </>
  )
}
