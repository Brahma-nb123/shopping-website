


import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarosulData } from './HomeCarosol';

const Maincarasol = () => {    
const items = MainCarosulData.slice(0,4).map((item)=><img className='cursor-pointer' src={item.image} alt="" role='presentation'/>)
  return (
    <div>
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayControls={1000}
        infinite
    />
    </div>
  )
}

export default Maincarasol
