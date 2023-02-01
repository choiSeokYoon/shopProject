import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Categories.scss"

export default function categories() {
    const categories = [
        {
            name:'all',
            text:'all'
        },
        {
            name:'electronics',
            text:'electronics'
        },
        {
            name:'jewelery',
            text:'jewelery'
        },
        {
            name:'men',
            text:'men'
        },
        {
            name:'men"s clothing ',
            text:'men"s clothing '
        },
    ]
  return (
    <div className='categories'>
        <ul>
        {categories.map((c,idx) =>(
            <li key={idx}>
                <NavLink
                to={c.name === 'all' ? '/shop' : `/shop/${c.name}`
                }><p>{c.text}</p>
                </NavLink>
            </li>
         
        ))}
        </ul>
    </div>
  )
}
