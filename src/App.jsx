import {Route, Routes} from 'react-router-dom'

import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Header from './components/header/Header';
import ShopDtail from './pages/ShopDetail';
import { useState } from 'react';
import './style/font.scss'
import { Suspense } from 'react';
import Loading from './components/loading/Loading';

function App() {
  const [cart, setCart] = useState([])


  return (
    <>
      <Header cart={cart}/>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/shop/:category' element={<Shop/>}/>
        <Route path='/shop/detail/:id' element={<ShopDtail cart={cart} setCart={setCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} /> }/>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;