import React from 'react'
import Image from 'next/image'
export default function Footer1() {
  return (
    <div className=' max-w-[800px] m-auto mt-20'>
      <div className=' flex gap-2 justify-between ml-5 flex-col items-center lg:flex-row'>
      <div>
            <Image className='ml-[74px]' src='/Services1.png' height={50} width={50} alt='pic'></Image>
            <h1 className=' flex flex-wrap  font-bold'>FREE AND FAST DELIVERY</h1>
            <p className=' flex flex-wrap text-xs'>Free delivery for all orders over $140</p>
        </div>
        <div>
            <Image className='ml-[74px]' src='/Services2.png' height={50} width={50} alt='pic'></Image>
            <h1 className='flex flex-wrap  font-bold'>24/7 CUSTOMER SERVICE</h1>
            <p className=' flex flex-wrap text-xs'>Friendly 24/7 customer support</p>
        </div>
        <div>
            <Image className='ml-[74px]' src='/Services3.png' height={50} width={50} alt='pic'></Image>
            <h1 className='flex flex-wrap  font-bold'>MONEY BACK GUARANTEE</h1>
            <p className=' flex flex-wrap text-xs'>We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  )
}
