
import "./Cart.scss"
import CartItem from '../components/cart/CartItem'
import CartHeader from '../components/cart/CartHeader'
import CartTotal from '../components/cart/CartTotal'
import { useRecoilValue } from 'recoil';
import { recoilCart } from '../recoil/atom'


export default function Cart() {
  const cart = useRecoilValue(recoilCart)
  
  return (
    <div className='cart'>
      <div className='container'>
        <h2>Cart</h2>
        <div className='cart_con'>
          <div className='cart_table'>
            <CartHeader/>
            {cart.length === 0 ? 
             <div className='empty'>Add to Cart</div>
             : <ul className='cart_info'>
                <CartItem/>
             </ul>
            }
          </div>
          <CartTotal/>
        </div>
      </div>
    </div>


  )
}
