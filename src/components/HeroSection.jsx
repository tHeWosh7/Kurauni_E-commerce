import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="flex justify-center items-center h-175 overflow-hidden">
            <div className='absolute left-20 top-50 flex flex-col gap-5 mt-130'>
                <button onClick={()=>{navigate('/Products'); scrollTo(0,0)}} className=" bg-red-500 text-white px-4 py-2 rounded top-50 ">Shop Now</button>
            </div>
            <Link to={'/'}>
                <img src={assets.product6} alt="logo" className='alternate w-500 top-3 h-auto'/>
            </Link>
            
        </div>
    </div>
  )
}

export default HeroSection