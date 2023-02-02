
import { Link } from 'react-router-dom'
import mainLogo from '../../assets/logo.png'
import './Header.scss'

export default function Header({cart}) {
  return (
    <header>
      <div className='nav'>
        <div className='container'>
          <div className='nav_contents'>
            <div className='logo'>
              <Link to={'/'}><img src={mainLogo} alt="로고" /></Link>
            </div>
            <ul className='nav_menu'>
              
              <li><Link to={'/'}><p>Shop</p></Link></li>
              <li>
                <Link to={'/cart'}><p>Cart</p></Link>
                {cart.length >= 1 ? (
                  <div className='cart_num'>
                    <p>{cart.length}</p>
                  </div>
                ) : ("")}
              </li>
            </ul>
            
          </div>
        </div>
      </div>
      
    </header>
  )
}
