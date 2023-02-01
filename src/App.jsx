import {Route, Routes} from 'react-router-dom'
import {createGlobalStyle} from "styled-components";
import Cart from './pages/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/header/Header';
import ShopDtail from './pages/ShopDetail';
import { useState } from 'react';
import './style/font.scss'





function App() {
  const GlobalStyles = createGlobalStyle`
 
    /* 
    html{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      
    }
    body{
      font-family: 'Josefin Sans', sans-serif;
      
      
    }
    
    a{
      text-decoration: none;
    }
    .container{
      width: 1056px;
      margin: 0 auto;
      
    } */
    
  `;

  const [cart, setCart] = useState([])
  const [checkList , setCheckList] = useState([])
  
  return (
    <>
      <GlobalStyles/>
      <Header cart={cart}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:category' element={<Shop/>}/>
        <Route path='/shop/detail/:id' element={<ShopDtail cart={cart} setCart={setCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} checkList={checkList} setCheckList={setCheckList} /> }/>
      </Routes>
      {/* <Footer/> */}
    </>
    
  );
}

export default App;