import {Route, Routes} from 'react-router-dom'

import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Header from './components/header/Header';
import ShopDtail from './pages/ShopDetail';
import './style/font.scss'
import { Suspense } from 'react';
import Loading from './components/loading/Loading.tsx';

function App() {


  return (
    <>
      <Header/>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/shop/:category' element={<Shop/>}/>
        <Route path='/shop/detail/:id' element={<ShopDtail/>}/>
        <Route path='/cart' element={<Cart/> }/>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;