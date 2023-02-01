import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Product from '../components/product/Product'
import Footer from '../components/footer/Footer'
import './Shop.scss'



export default function Shop() {
  
  return (
    <div className='shop'>
      <Product/>
      <Footer/> 
    </div>
  )
}
