import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          
            <div>
                <img src={assets.logo} className='mb- w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'> 
                  Reconnecting to Wi-Fi Checking the network cables, modem, and router Discover high-quality return icons, return logos, and PNG images to enhance your customer service interface and streamline returns.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Pivacy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-785-985</li>
                    <li>contact@dinasour.com</li>
                </ul>
            </div>

        </div>
        <div>
            <hr />
            <p className='p-5 text-sm text-center'>
                copyright 2026@ -All rights reserved
            </p>
        </div>
    </div>
  )
}

export default Footer