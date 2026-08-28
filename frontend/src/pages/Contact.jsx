import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Saida <br /> Madina Sinaeya</p>
          <p lassName='text-gray-500'>TEl: +961 03 899 166 <br /> contact@dinasour.com</p>
          <p className='font-seminbold text-xl text-gray-600' >Dinasaur</p>
          <p className='text-gray-500'>Learn more about teams</p>
          <button className='border border-black px-8 text-sm hover:bg-black hover:text-white transition-all duration-500'> Explore</button>

        </div>
      </div>
    </div>
  )
}

export default Contact