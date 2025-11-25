import { MailIcon, MapPin, PhoneIcon } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full h-80 bg-black text-white flex items-center justify-evenly gap-60'>
        <div>
            <div className='flex flex-col items-start mb-15'>
                <img src={assets.logo} alt="logo" className='w-30 h-auto' />
                <h1 className='text-[9px] mt-1 ml-3 text-white/60'>" IT'S PEDALICIOUS " </h1>
            </div>
            <div className='flex flex-col items-start text-[12px] text-white/60'>
                <div className='flex justify-center items-center gap-2'>
                    <MailIcon className='w-4 h-4 text-white/60'/>
                    <h1>kuraunihub@gmail.com</h1>
                </div>
                <div className='flex justify-center items-center text-white/60 gap-2'>
                    <PhoneIcon className='w-4 h-4 text-white/60'/>
                    <h1>+977 9825702484</h1>
                </div>
                <div className='flex justify-center items-center mt-7 text-white/60 gap-2'>
                    <MapPin className='w-4 h-4 text-white/60'/>
                    <h1>Godhawari, Lalitpur</h1>
                </div>
            </div>
        </div>
        <div>
            <div>
                <h1 className='font-bold mb-5'>Quick Links</h1>
            </div>
            <div className='flex flex-col gap-3 text-[15px]'>
                <h1>Home</h1>
                <h1>Products</h1>
                <h1>Offers</h1>
                <h1>Contact Us</h1>
                <h1>About Us</h1>
            </div>

        </div>
        <div className='flex flex-col'>
            <h1 className='font-bold justify-evenly'>Connect us through</h1> 
            <div className='flex flex-col gap-2  mt-5'>
                <div className='flex items-center h-8 w-50 bg-white rounded-md'>
                    <img src={assets.facebook} alt="facebook" className='w-6 h-6 m-1'/>
                    <h1 className='flex text-lg text-black items-center'> | </h1>
                </div>
                <div className='flex items-center h-8 w-50 bg-white rounded-md'>
                    <img src={assets.tiktok} alt="tiktok" className='w-6 h-6 m-1'/>
                    <h1 className='flex text-lg text-black items-center'> | </h1>
                </div>

            </div>  
        </div>
    </div>
  )
}

export default Footer