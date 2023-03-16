import './CartItem.scss'
import React, { useMediaQuery  } from 'react-responsive'
import { recoilCart, recoilCheckList } from '../../recoil/atom'
import { useRecoilState } from 'recoil'
import { IData } from '../../type/data.type'


export default function CartItem() {
  const [checkList, setCheckList] = useRecoilState(recoilCheckList)
  const [cart, setCart] = useRecoilState(recoilCart)
  
  
  
  const handleCheckList = (checked : boolean,id: number) =>{
    if(checked){
      setCheckList([...checkList, id])
    }else{
      setCheckList(checkList.filter((check)=>check !== id))
    }
  }

  const handlCount = (type:string, id:number, count:number)=>{
    const found = cart.filter((el) => el.id ===id)[0];
    const idx = cart.indexOf(found);
    const cartItem : IData ={
        id: found.id,
        thumbnail:found.thumbnail,
        discountPercentage: found.discountPercentage,
        rating: found.rating,
        stock: found.stock,
        brand: found.brand,
        category:found.category,
        description:found.description,
        images:found.images,
        title:found.title,
        price:found.price,
        count: count,
    }
    if(type ==='plus'){
        setCart([...cart.slice(0,idx), cartItem, ...cart.slice(idx+1)])
    }else{
      if(count === 0) return;
        setCart([...cart.slice(0,idx), cartItem, ...cart.slice(idx+1)])
    }
} 

const onRemove = (id:number) =>{
  setCart(cart.filter((el)=>el.id !==id))
}



  const isPc = useMediaQuery({
    query:"(min-width:1056px)"
  })
  const isMobile = useMediaQuery({
    query:"(max-width:1056px)"
  })
  return (
    <>
    {cart.map((cart)=>(
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
        <img src={require("../../assets/remove.png")} alt=""  className='item_remove' onClick={()=>onRemove(cart.id)}/>
        
    </li>
    ))}
    </>
  )
}
