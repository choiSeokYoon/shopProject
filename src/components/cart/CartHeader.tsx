import React, { useMediaQuery  } from 'react-responsive'
import { useRecoilState } from 'recoil'
import { recoilCart, recoilCheckList } from '../../recoil/atom'
import './CartHeader.scss'

export default function CartHeader() {
  const [cart, setCart] = useRecoilState(recoilCart)
  const [checkList, setCheckList] = useRecoilState(recoilCheckList)
  const handleAllCheck = (checked:boolean) =>{
    if(checked) {
      const checkItems:number[] = [];
      cart.map((cart) => checkItems.push(cart.id))
      setCheckList(checkItems)
    } else{
      setCheckList([])
    }
  }

  const isAllChecked =cart.length === checkList.length && checkList.length !== 0;
  const isPc = useMediaQuery({
    query:"(min-width:1056px)"
  })
  const isMobile = useMediaQuery({
    query:"(max-width:1056px)"
  })
  
  return (
    <div className='cart_header'>
        {isPc && <ul>
            <input type="checkbox" onChange={(e)=>{
              handleAllCheck(e.currentTarget.checked)
            }}
            checked={isAllChecked}
            />
            <li>주문상세정보</li>
            <li>상품명</li>
            <li>가격</li>
            <li>수량</li> 
        </ul>
        }
       {isMobile && <ul className='cart_header_mobile'>
            <li><input type="checkbox" onChange={(e)=>{
              handleAllCheck(e.currentTarget.checked)
            }}
            checked={isAllChecked}
            /></li>
            <li>주문상세정보</li>
            
        </ul>
        }
    </div>
   
  )
}
