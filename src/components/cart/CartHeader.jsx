import React, { useMediaQuery  } from 'react-responsive'
import './CartHeader.scss'

export default function CartHeader({handleAllCheck, isAllChecked}) {
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
