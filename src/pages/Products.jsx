import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  return (
    <div className='w-full h-auto mt-1 pb-30 flex-coln justify-center items-center bg-[var(--color-theme)] text-white overflow-hidden'>
        
        <div className='flex items-center px-20 py-10 text-4xl'>
            <h1>Our Products</h1>
        </div>
    
        <div className='flex flex-col gap-10'>
            {/* Cards Container */}
            <div className='flex py-5 w-350 justify-center items-center h-auto  bg-white rounded-md gap-10 '>
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
            </div>
            

            {/* Cards Container */}
            <div className='flex py-5 w-full h-auto bg-white items-center rounded-md gap-10 ml-20'>
                
                {/*Card_1 */}
                <div className='flex justify-center flex overflow-hidden  h-80 w-50 bg-white rounded-md border-1 border-gray-300 ml-17'>
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
                <div className='flex justify-center flex overflow-hidden  h-80 w-50 bg-white rounded-md border-1 border-gray-300'>
                    <div className='flex-col items-center mt-1 text-gray-400 text-sm'>
                        <img src={assets.product1} alt="product1" className='w-auto h-48 rounded-lg'/>
                        <div className='flex-col'>
                            <h1 className='font-bold'>Classical Sugarfree Kurauni</h1>
                            <h1 className='flex mt-5'>Rs. 650</h1>
                        </div>
                    </div>
                </div>
                <button>
                <ChevronRight className="text-[var(--color-theme)] h-10 w-auto" />
                </button>
            </div>
        </div>

        <div>
            <div className='flex items-center ml-20 mt-20 py-10 text-4xl'>
                <h1>Special Offers</h1>
            </div>
            {/* Cards Container */}
                <div className='flex py-10 w-cover h-auto bg-white items-center gap-10 justify-evenly'>

                <ChevronLeft className="text-[var(--color-theme)] h-10 w-auto" />

                    {/*Card_1 */}
                <div className='flex justify-center flex overflow-hidden  h-80 w-50 bg-white rounded-md border-1 border-gray-300 mr-5'>
                    <div className='flex-col items-center mt-1 text-gray-400 text-sm'>
                        <img src={assets.product1} alt="product1" className='w-auto h-48 rounded-lg'/>
                        <div className='flex-col'>
                            <h1 className='font-bold'>Classical Sugarfree Kurauni</h1>
                            <h1 className='flex mt-5'>Rs. 650</h1>
                        </div>
                    </div>
                </div>

                    {/*Card_2 */}
                <div className='flex justify-center flex overflow-hidden  h-80 w-50 bg-white rounded-md border-1 border-gray-300 mr-5'>
                    <div className='flex-col items-center mt-1 text-gray-400 text-sm'>
                        <img src={assets.product1} alt="product1" className='w-auto h-48 rounded-lg'/>
                        <div className='flex-col'>
                            <h1 className='font-bold'>Classical Sugarfree Kurauni</h1>
                            <h1 className='flex mt-5'>Rs. 650</h1>
                        </div>
                    </div>
                </div>

                        {/*Card_3 */}
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

export default Products