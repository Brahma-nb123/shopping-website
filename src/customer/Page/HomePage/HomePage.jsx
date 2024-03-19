import React from 'react'
import HomeCarasol from '../../components/HomeCarosul/Maincarasol.jsx'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel.jsx'
import {mens_kurta} from '../../../Data/Men/mens_kurta.js'
import {mens_shirt} from '../../../Data/Men/mens_shirt.js'
import {mens_jens} from '../../../Data/Men/mens_jens.js'
import { women_top } from '../../../Data/Women/women_top.js'
import { women_dress} from '../../../Data/Women/women_dress.js'
// import { Lehengacholi } from '../../../Data/Women/Lehengacholi.js'
import {women_jeans} from '../../../Data/Women/women_jeans.js'
// import {sareePage1} from '../../../Data/Saree/saree.js'
// import {gounsPage1} from '../../../Data/Gouns/gouns.js'




const HomePage = () => {
  return (
    <div>
      <div>
      <HomeCarasol/>
      </div>
      <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>

        <HomeSectionCarosel data={mens_jens} sectionName={"Men's jens"}/>

        <HomeSectionCarosel data={mens_shirt} sectionName={"Men's shirt"}/>

        <HomeSectionCarosel data={women_top} sectionName={"Women's Top"}/>
        
        <HomeSectionCarosel data={women_dress} sectionName={"Women's_Dress"}/>

        <HomeSectionCarosel data={women_jeans} sectionName={"Women's_Jeans"}/>

        {/* <HomeSectionCarosel data={Lehengacholi} sectionName={"Lehengacholi"}/>

        <HomeSectionCarosel data={sareePage1} sectionName={"Saree"}/>

        <HomeSectionCarosel data={gounsPage1} sectionName={"Gouns"}/> */}
      </div>
      
    </div>
  )
}

export default HomePage
