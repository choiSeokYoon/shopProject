import React, { useState } from 'react'

import "./Categories.scss"
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchPostData } from '../../recoil/selector';
import { recoilCategory } from '../../recoil/atom';

export default function Categories() {
    const [categorys, setCategorys] = useRecoilState(recoilCategory)
    const items = useRecoilValue(fetchPostData)
    const [active, setActive] = useState(0);
    const categories = [
        "All",
        ...new Set(Array.from(items, (item) => item.category))
    ]
    const handleClick = (idx: number) =>{
        setActive(idx)
        setCategorys(categories[idx])
    }
  return (
    <div className='categories'>
        <ul>
            {categories.map((category,idx)=>(
                <li key={idx}>
                <p 
                className={idx === active ? "active" : ""}
                onClick={()=>(handleClick(idx))}>{category}</p>
                </li>
            ))}
        </ul> 
    </div>
  )
}
