
import ProductItem from './ProductItem'
import Categories from './Categories'
import './Product.scss'


 export default function Product() {

       
  return (
    <div className='product'>
        <div className='container'>
            <div className='product_category'>
                <h2>PRODUCT</h2>
                <Categories />
            </div>
            <div className='product_list'>
                <ul>
                    <ProductItem/>
                </ul>
            </div>
        
        </div>
      
    </div>
  )
}
