import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] =useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async ()=>{
   products.map((item)=>{
    if(item._id === productId){
      setProductData(item)
      setImage(item.image[0])
      return null;
    }
   })
  }

  useEffect(()=>{
   fetchProductData();
  },[productId])

  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*------------- product data --------------*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
         {/*--------------- product images------------- */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
             <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {
                 productData.image.map((item,index)=>(
                 <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                 ))
                }
             </div>
           <div className='w-full sm:w-[80%]'>
             <img className='w-full h-auto' src={image} alt="" />
           </div>

         </div>
          {/* ----------------- product info ------------------- */}
            <div className='flex-1'>
              <h1 className='font-medium text-2x1 mt-2'>{productData.name}</h1>
               <div className='flex items-center gap-1 mt-2 '>
                <img className='w-3 5' src={assets.star} alt="" />
                <img className='w-3 5' src={assets.star} alt="" />
                <img className='w-3 5' src={assets.star} alt="" />
                <img className='w-3 5' src={assets.star} alt="" />
                <img className='w-3 5' src={assets.star} alt="" />
                <p className='pl-2'>(122)</p>
               </div>
              <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
            
              </div>
              <button onClick={()=>addToCart(productData._id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% original product</p>
                <p>Easy return and exchange policy within 7 days</p>
              </div>
            </div>
          
       </div>
       {/* -------------description and review section ----------- */}
       <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>description</b>
          <p className='border px-5 py-3 text-sm'>reviews (122)</p>
        </div>
         <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p> passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular</p>
          <p>The standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and</p>
         </div>
       </div>
       {/* -------------------display latest products ----------*/}
       <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product