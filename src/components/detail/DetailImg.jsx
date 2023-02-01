import React from 'react'
import './DetailImg.scss'

export default function DetailImg({item}) {
  return (
    <div className='detail_left'>
        <div className='detail_item_img'>
            <img src={item.image} alt="" />
        </div>
    </div>
  )
}
