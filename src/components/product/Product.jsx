import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'
import Categories from './Categories'
import './Product.scss'
import { useRecoilValue } from 'recoil'
import { fatchPostData } from '../../recoil/selector'

 export default function Product() {
    const items = useRecoilValue(fatchPostData)
    console.log(items)
    const [categorys , setCategorys] = useState("All")
    

    
    
       
  return (
    <div className='product'>
        <div className='container'>
            <div className='product_category'>
                <h2>PRODUCT</h2>
                <Categories />
            </div>
            <div className='product_list'>
                <ul>
                    <ProductItem/>
                </ul>
            </div>
        
        </div>
      
    </div>
  )
}
