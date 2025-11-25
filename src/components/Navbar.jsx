import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { CircleIcon, LucideMinus, Move, MoveRightIcon } from 'lucide-react'


const Navbar = () => {
    const navigate = useNavigate();
  return (
    
    <div className='sticky top-0 bg-[var(--color-theme)] w-auto z-100'>
    <div className='container hidden lg:block'>
        <div className='flex justify-between items-center p-1 '>
            <div>
                <Link to={'/'} className='flex gap-3'>
                <img src={assets.logo} alt="logo" className='relative ml-10 w-30 top-3 h-auto'/>
                <h1 className='text-[9px] mt-12 text-white'>" IT'S PEDALICIOUS " </h1>
                </Link>
            </div>
            <div className=' relative flex top-3'>
                <button className='text-l font-medium text-[var(--color-theme)] px-8 py-4 bg-white rounded-md'>Login</button>
            </div>
        </div>
    </div>
    {/*Nav_Tabs_Holder*/}
    <div className='flex relative justify-center top-5'>
        <div className='flex p-1 top-[50px] w-[80rem] items-center bg-black rounded-md gap-8'>
           <button onClick={()=>{navigate('/'); scrollTo(0,0)}} className='bg-[var(--color-theme)] px-2 py-1 rounded-md ml-23 font-medium text-white'>Home</button> 
            <button onClick={()=>{navigate('/Products'); scrollTo(0,0)}} className='font-medium text-white'>Products</button>
            <button onClick={() => {navigate('/Products'); scrollTo(0,900)}}  className='font-medium text-white'>Offers</button>
            <button className='font-medium text-white'>Contacts</button>
            <button className='font-medium text-white'>About Us</button>
            {/*Search_Bar*/}
        <div className='flex items-center bg-white rounded-md -px-0 gap-60 overflow-hidden border-1 border-white'>
            <div className='px-5'><h1> Type Here...</h1></div>
            <div className='-px-5'>
            <button className='bg-black text-white px-10 py-1 overflow-y-hidden'> Search</button>
            </div>
        </div>
        <div className='flex gap-4 justify-evenly'>
            <div className='flex h-8 w-8 justify-center align-center bg-white rounded-md'>
                <img src={assets.facebook} alt="facebook" className='w-8 h-8'/>
            </div>
            <div className='flex h-8 w-8 justify-center align-center bg-white rounded-md'>
                <img src={assets.tiktok} alt="tiktok" className='w-8 h-8'/>
            </div>
            <div className='flex h-8 w-8 justify-center align-center bg-white rounded-md'>
                <img src={assets.cart} onClick={() => navigate('/CartManagement')} alt="cart" className='w-7 h-7'/>
            </div>
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default Navbar