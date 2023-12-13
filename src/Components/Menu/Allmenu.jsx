import React from 'react'
import Header from '../Header/Header'
import LogoSlider from '../LogoSlider/LogoSlider'
import AllCard from '../HomeCard/AllCard'
import HomeCard from '../HomeCard/HomeCard'
import FeatureProductCard from '../FeatureProduct/FeatureProductCard'
import SpecialEdition from '../SpecialEdition/SpecialEdition'
import Footer from '../Footer/Footer'
import CompanyServices from '../CompanyServices/CompanyServices'
import PersonCard from '../../pages/AboutUs/PersonCard'

const Allmenu = () => {
  return (
    <div>
      <Header/>
      <LogoSlider />
      <AllCard/>
      {/* <HomeCard /> */}
      <FeatureProductCard></FeatureProductCard>
      <SpecialEdition></SpecialEdition>
      <PersonCard></PersonCard>
      <CompanyServices/>
      <Footer></Footer>
    </div>
  )
}

export default Allmenu
