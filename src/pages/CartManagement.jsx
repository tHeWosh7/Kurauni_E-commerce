import React from 'react'
import { assets } from '../assets/assets'

const CartManagement = () => {
  return (
    <div className=' flex flex-col min-h-screen flex items-center mt-15 text-3xl font-bold'>
        <div className='flex items-center gap-5 mb-20'>
            <h1 className='text-[var(--color-theme)]'> ( Your Cart N ) </h1>
        </div>

        <div className='flex justify-evenly items-center w-[80%] h-3 text-xl font-semibold bg-[var(--color-theme)] text-white p-5 rounded-md'>
            <h1 className='ml-0'>Items</h1>
            <h1 className='ml-90'>Price</h1>
            <h1 className='ml-30'>Quantity</h1>
            <h1 className='ml-30'>Total</h1>
        </div>
        <div className='flex flex-col items-center gap-10 mt-10 mb-20 w-[80%] h-100 rounded-md bg-black/10 gap-2 overflow-hidden'>
            <div className='flex justify-evenly items-center w-full h-20 text-lg font-medium bg-[var(--color-theme)] p-5 rounded-md text-white'>
                <div className='flex gap-5 items-center'>
                    <img src={assets.product1} alt="productimage" className='w-15 h-15 rounded-md bg-white'/>
                    <h1>Classical Kurauni</h1>
                </div>
                <h1 className='ml-20'>Rs. 650</h1>
                <div className='flex gap-5 ml-20 items-center'>
                    <button className='bg-white text-black px-3 py-1 rounded-md'>-</button>
                    <h1>1</h1>
                    <button className='bg-white text-black px-3 py-1 rounded-md'>+</button>
                </div>
                <h1 className='ml-20'>Rs. 650</h1>
            </div>
            
        </div>
    </div>
  )
}

export default CartManagement