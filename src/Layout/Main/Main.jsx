import React from 'react'
import Allmenu from '../../Components/Menu/Allmenu'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'

const Main = () => {
  return (
    <div className='bg-white'>
      <Navbar></Navbar>
       <Outlet/>
      {/* <Navbar></Navbar> */}
      {/* <Header></Header> */}
      {/* <Footer/> */}

      {/* <Header/> */}
      {/* <LogoSlider /> */}
      {/* <AllCard/> */}
      {/* <HomeCard /> */}
      {/* <FeatureProductCard></FeatureProductCard> */}
      {/* <SpecialEdition></SpecialEdition> */}
      {/* <Footer></Footer> */}
    </div>
  )
}

export default Main
