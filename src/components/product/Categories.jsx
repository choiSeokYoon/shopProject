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
            name:'smartphones',
            text:'smartphones'
        },
        {
            name:'laptops',
            text:'laptops'
        },
        {
            name:'fragrances',
            text:'fragrances'
        },
        {
            name:'skincare',
            text:'skincare'
        },
        {
            name:'groceries',
            text:'groceries'
        },
    ]
    
  return (
    <div className='categories'>
        <ul>
        {categories.map((c,idx) =>(
            <li key={idx}>
                <NavLink
                to={c.name === 'all' ? '/' : `/shop/${c.name}`
                }><p>{c.text}</p>
                </NavLink>
            </li>
        ))}
        </ul>
    </div>
  )
}
