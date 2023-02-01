
import './home.scss'
import Button from '../components/Button';
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className='home'>
      <div className='shop_btn'>
        <Link to={'/shop'}>
          <Button size="large"  color="gray">SHOP</Button>
        </Link>
      </div>
    </div>
  );
}



