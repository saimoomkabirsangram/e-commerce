import React from 'react'
import Header from '../Header/Header'
import LogoSlider from '../LogoSlider/LogoSlider'
import AllCard from '../HomeCard/AllCard'
import FeatureProductCard from '../FeatureProduct/FeatureProductCard'
import SpecialEdition from '../SpecialEdition/SpecialEdition'
import Footer from '../Footer/Footer'
import CompanyServices from '../CompanyServices/CompanyServices'

const Allmenu = () => {
  return (
    <div>
      <Header/>
      <LogoSlider />
      <AllCard/>
      <FeatureProductCard></FeatureProductCard>
      <SpecialEdition></SpecialEdition>
      <CompanyServices/>
      <Footer></Footer>
    </div>
  )
}

export default Allmenu
