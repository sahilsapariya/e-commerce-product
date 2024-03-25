import React from 'react'
import ProductDesc from './ProductDesc'
import ProductPrev from './ProductPrev'

const Hero = () => {
  return (
    <div className='container max-container lg:flex lg:flex-row flex-col flexCenter lg:gap-10  lg:mt-16'>
        <ProductPrev />
        <ProductDesc />   
    </div>
  )
}

export default Hero