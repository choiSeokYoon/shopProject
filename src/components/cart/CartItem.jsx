import './CartItem.scss'
import removeImg from '../../assets/remove.png'
import React, { useMediaQuery  } from 'react-responsive'
import { recoilCart, recoilCheckList } from '../../recoil/atom'
import { useRecoilState } from 'recoil'


export default function CartItem() {
  const [checkList, setCheckList] = useRecoilState(recoilCheckList)
  const [cart, setCart] = useRecoilState(recoilCart)
  

  
  const handleCheckList = (checked,id) =>{
    if(checked){
      setCheckList([...checkList, id])
    }else{
      setCheckList(checkList.filter((check)=>check !== id))
    }
  }

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



  const isPc = useMediaQuery({
    query:"(min-width:1056px)"
  })
  const isMobile = useMediaQuery({
    query:"(max-width:1056px)"
  })
  return (
    (cart.map((cart)=>(
      <li className='cart_item_list' key={cart.id}>
        <input type="checkbox"  onChange={(e)=>{
          handleCheckList(e.currentTarget.checked,cart.id)
          }}
          checked={checkList.includes(cart.id) ? true : false}
        />
        <div className='cart_img'>
            <img src={cart.thumbnail} alt="" />
        </div>
        {isPc && 
        <>
          <p className='cart_item_name'>{cart.title}</p>
          <p className='cart_item_price'>{cart.price * cart.count} $ </p>
          <div className='cart_item_count'>
            <button className='item_count_btn' onClick={()=>handlCount("minus", cart.id, cart.count -1)}>-</button>
            <span>{cart.count}</span>
            <button className='item_count_btn' onClick={()=>handlCount("plus", cart.id, cart.count +1)}>+</button>
          </div>
        </>
        }
        {isMobile && 
        <div className='cart_item_mobile'>
          <p className='cart_item_name'>{cart.title}</p>
          <p className='cart_item_price'>{cart.price * cart.count} $ </p>
          <div className='cart_item_count'>
              <button className='item_count_btn' onClick={()=>handlCount("minus", cart.id, cart.count -1)}>-</button>
              <span>{cart.count}</span>
              <button className='item_count_btn' onClick={()=>handlCount("plus", cart.id, cart.count +1)}>+</button>
          </div>
        </div>
        }
        <img src={removeImg} alt=""  className='item_remove' onClick={()=>onRemove(cart.id)}/>
        
    </li>
    )))
    
  )
}
