import React, { useCallback, useState } from 'react'
import "./cart.scss"
import CartItem from '../components/cart/CartItem'
import CartHeader from '../components/cart/CartHeader'
import CartTotal from '../components/cart/CartTotal'


export default function Cart({ cart, setCart , checkList ,setCheckList}) {
  const [total, setTotal] = useState(0);



  const handleCheckList = (checked,id ) =>{
    if(checked){
      setCheckList([...checkList, id])
    }else{
      setCheckList(checkList.filter((check)=>check !== id))
    }
  }

  const handleAllCheck = (checked)=>{
    if(checked) {
      const checkItems = [];
      cart.map((cart) => checkItems.push(cart.id))
      setCheckList(checkItems)
    } else{
      setCheckList([])
    }
  }

  

  const isAllChecked =cart.length === checkList.length && checkList.length !== 0;
  
  const found = checkList.map((checkLists) => 
    cart.filter((el)=> el.id === checkLists)
  )
  
  const handlCount = (type, id, count)=>{
    const found = cart.filter((el) => el.id ===id)[0];
    const idx = cart.indexOf(found);
    const cartItem ={
        id: found.id,
        thumbnail:found.thumbnail,
        title:found.title,
        price:found.price,
        count:count
    }
    if(type ==='plus'){
        setCart([...cart.slice(0,idx), cartItem, ...cart.slice(idx+1)])
    }else{
      if(count === 0) return;
        setCart([...cart.slice(0,idx), cartItem, ...cart.slice(idx+1)])
    }
} 


const onRemove = (id) =>{
  setCart(cart.filter((el)=>el.id !==id))
}
  return (
    <div className='cart'>
      <div className='container'>
        <h2>Cart</h2>
        <div className='cart_con'>
          <div className='cart_table'>
            <CartHeader handleAllCheck={handleAllCheck} isAllChecked={isAllChecked}/>
            {cart.length === 0 ? 
             <div className='empty'>Add to Cart</div>
             : <ul className='cart_info'>
             {cart.map((cart)=>{
               return <CartItem
               key={cart.id} 
               cart={cart} 
               handlCount={handlCount}
               onRemove={onRemove}
               handleCheckList={handleCheckList}
               checkList={checkList}
               setCheckList={setCheckList}
               />
             })}
             </ul>
            }
          </div>
          <CartTotal 
          cart={cart} 
          found={found}
          total={total}
          setTotal={setTotal}
          />
        </div>
      </div>
    </div>


  )
}
