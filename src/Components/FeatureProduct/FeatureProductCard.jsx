import React from 'react'
import homeproduct from "./homeproduct.json"
import FeatureProduct from './FeatureProduct'

const FeatureProductCard = () => {
  return (
    <div className='lg:px-16 px-5 bg-[#f5f7f9] '>
         <div className="text-center">
            <h1 className="font-bold  lg:text-5xl text-3xl text-black lg:pt-24 py-10 tracking-wide">Feature Product</h1>
            <div className='m-auto border-[1px] w-28 border-blue-600 '></div>
        </div>
    <div className='lg:mt-10 grid md:grid-rows-5 md:gap-4 md:grid-flow-col lg:grid-rows-2 lg:grid-flow-col lg:gap-3 flex-row justify-center items-center '>
      {
        homeproduct.map(product => <FeatureProduct key={product.id} product = {product}>
        </FeatureProduct>)
      }
    </div>
    </div>
  )
}

export default FeatureProductCard
