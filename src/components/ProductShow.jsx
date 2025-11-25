import { ChevronLeft, ChevronRight, MoveRightIcon } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ProductShow = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-auto pb-30 flex-coln justify-center items-center bg-[var(--color-theme)] text-white'>
      <div className='flex justify-between'>
      <div className='m-10 ml-5 text-4xl'>
        <h1>Our Products</h1>
      </div>
      <div>
        <button className='flex justify-center align-center text-md m-12 gap-1' onClick={()=>{navigate('/Products'); scrollTo(0,0)}}>View All
          <MoveRightIcon  className='group-hover:translate-x-0.5 translation w-4.5 h-4.5' />
        </button>
         
      </div>
      </div>
 

      <div className='flex flex-col gap-10'>
            {/* Cards Container */}
            <div className='flex py-5 w-full justify-center items-center h-auto  bg-white rounded-md gap-10 '>
                <div>
                <ChevronLeft className="text-[var(--color-theme)] h-10 w-auto" />
                </div>

                {/*Card_1 */}
                <div className='flex justify-center flex overflow-hidden  h-80 w-50 bg-white rounded-md border-1 border-gray-300'>
                    <div className='flex-col items-center mt-1 text-gray-400 text-sm'>
                        <img src={assets.product1} alt="product1" className='w-auto h-48 rounded-lg'/>
                        <div className='flex-col'>
                            <h1 className='font-bold'>Classical Sugarfree Kurauni</h1>
                            <h1 className='flex mt-5'>Rs. 650</h1>
                        </div>
                    </div>
                </div>

                {/*Card_2 */}
                <div className='flex justify-center flex overflow-hidden  h-80 w-50 bg-white rounded-md border-1 border-gray-300'>
                    <div className='flex-col items-center mt-1 text-gray-400 text-sm'>
                        <img src={assets.product1} alt="product1" className='w-auto h-48 rounded-lg'/>
                        <div className='flex-col'>
                            <h1 className='font-bold'>Classical Sugarfree Kurauni</h1>
                            <h1 className='flex mt-5'>Rs. 650</h1>
                        </div>
                    </div>
                </div>

                {/*Card_3 */}
                <div className='flex justify-center flex overflow-hidden  h-80 w-50 bg-white rounded-md border-1 border-gray-300'>
                    <div className='flex-col items-center mt-1 text-gray-400 text-sm'>
                        <img src={assets.product1} alt="product1" className='w-auto h-48 rounded-lg'/>
                        <div className='flex-col'>
                            <h1 className='font-bold'>Classical Sugarfree Kurauni</h1>
                            <h1 className='flex mt-5'>Rs. 650</h1>
                        </div>
                    </div>
                </div>

                {/*Card_4 */}
                <div className='flex justify-center flex overflow-hidden  h-80 w-50 bg-white rounded-md border-1 border-gray-300'>
                    <div className='flex-col items-center mt-1 text-gray-400 text-sm'>
                        <img src={assets.product1} alt="product1" className='w-auto h-48 rounded-lg'/>
                        <div className='flex-col'>
                            <h1 className='font-bold'>Classical Sugarfree Kurauni</h1>
                            <h1 className='flex mt-5'>Rs. 650</h1>
                        </div>
                    </div>
                </div>

                {/*Card_5 */}
                <div className='flex justify-center flex overflow-hidden  h-80 w-50 bg-white rounded-md border-1 border-gray-300 mr-5'>
                    <div className='flex-col items-center mt-1 text-gray-400 text-sm'>
                        <img src={assets.product1} alt="product1" className='w-auto h-48 rounded-lg'/>
                        <div className='flex-col'>
                            <h1 className='font-bold'>Classical Sugarfree Kurauni</h1>
                            <h1 className='flex mt-5'>Rs. 650</h1>
                        </div>
                    </div>
                </div>
                <ChevronRight className="text-[var(--color-theme)] h-10 w-auto" />
            </div>
    </div>
    </div>
  )
}

export default ProductShow