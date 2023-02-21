import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './ProductItem'
import Categories from './Categories'
import './Product.scss'
import { useParams } from 'react-router-dom'

 export default function Product() {
    const params = useParams();
    const category = params.category||''
    const [items, setItem] = useState()

    useEffect (()=>{
        const fetchDate = async ()=>{
            try{
                const qurey = category === '' ? '' : `category/${category}`
                const json = await axios.get(
                    `https://dummyjson.com/products/${qurey}`
                    
                )
                setItem(json.data.products)
            }catch(e){
                console.log(e)
            }
        }
        fetchDate();
    },[category])
       
  return (
    <div className='product'>
        <div className='container'>
            <div className='product_category'>
                <h2>PRODUCT</h2>
                <Categories/>
            </div>
            {items === undefined ? 
            <div className='loading'>...Loading</div> :items ===null ?
            <div className='err'>404</div> :
            (
            <div className='product_list'>
                <ul>
                    <Item items={items}/>
                </ul>
            </div>
            )}
        </div>
      
    </div>
  )
}