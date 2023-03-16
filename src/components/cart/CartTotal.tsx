import { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { recoilCart, recoilCheckList, recoilTotal } from '../../recoil/atom';
import './CartTotal.scss'

export default function CartTotal() {
    const [total , setTotal] = useRecoilState(recoilTotal)
    const [checkList, setCheckList] = useRecoilState(recoilCheckList)
    const [cart, setCart] = useRecoilState(recoilCart)


    const found = checkList.map((checkLists) => 
    cart.filter((el)=> el.id === checkLists)
    )

  
    useEffect(()=>{
        if(found){
            const temp = found.filter((item) => item.length !== 0) //삭제오류 해결
            const sum = temp.map((item) => item[0].price * item[0].count);
            const reducer = (acc:number, cur:number) => acc + cur;
            if(sum.length === 0){
                setTotal(0);
                return;
            }
            const itemTotal = sum.reduce(reducer);
            setTotal(itemTotal);
        }else{
            setTotal(0);
        } 
    }, [cart,total,found,setTotal]);

  return (
    <div className='total'>
        <div className='total_box'>
            <div className='total_box_left'>
                <p>상품금액</p>
                <p>배송비</p>
                <h5 >총상품금액</h5>
            </div>
            <div className='total_box_right'>
                <p>{total}$</p>
                <p>5$</p>
                <h5>{total+5}$</h5>
            </div>
        </div>
        <div className='totalBtn'>
            <button color="gray">선택구매</button>
            <button color="gray">구매</button>
        </div>
    </div>
  )
}
