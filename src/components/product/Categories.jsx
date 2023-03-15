import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import "./Categories.scss"
import { useRecoilState, useRecoilValue } from 'recoil';
import { fatchPostData } from '../../recoil/selector';
import { recoilCategory } from './../../recoil/atom';

export default function Categories() {
    const [categorys, setCategorys] = useRecoilState(recoilCategory)
    const items = useRecoilValue(fatchPostData)
    const [active, setActive] = useState(0);
    const categories = [
        "All",
        ...new Set(Array.from(items, (item) => item.category))
    ]
    const handleClick = (idx) =>{
        setActive(idx)
        setCategorys(categories[idx])
    }
    console.log(categorys)
  return (
    <div className='categories'>
        <ul>
            {categories.map((category,idx)=>(
                <li>
                
                <p  key={idx} 
                className={idx === active ? "active" : ""}
                onClick={()=>(handleClick(idx))}>{category}</p>
                </li>
            ))}
        </ul> 
    </div>
  )
}
