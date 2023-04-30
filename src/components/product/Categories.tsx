import React, { useCallback, useMemo, useState, useEffect } from 'react'
import "./Categories.scss"
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchPostData } from '../../recoil/selector';
import { recoilCategory } from '../../recoil/atom';

export default function Categories() {
    const [categorys, setCategorys] = useRecoilState(recoilCategory)
    const items = useRecoilValue(fetchPostData)

    const categories = useMemo(() => {
        const uniqueCategories = new Set(items.map((item) => item.category))
        return ["All", ...uniqueCategories]
    }, [items])

    const [active, setActive] = useState(() => {
        const savedActive = localStorage.getItem('activeCategory')
        return savedActive !== null ? parseInt(savedActive, 10) : 0
    })

    useEffect(() => {
        localStorage.setItem('activeCategory', active.toString())
    }, [active])

    const handleClick = useCallback((idx: number) => {
        setActive(idx)
        setCategorys(categories[idx])
    }, [categories, setCategorys])

    return (
        <div className='categories'>
            <ul>
                {categories.map((category, idx) => (
                    <li key={idx}>
                        <p
                            className={idx === active ? "active" : ""}
                            onClick={() => handleClick(idx)}
                        >
                            {category}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
