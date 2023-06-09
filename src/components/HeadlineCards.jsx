import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='relative rounded-xl'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-400 hover:border-orange-400 ease-in-out duration-300'>Order Now</button>
            </div>  
            <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl opaci'
                src="https://images.pexels.com/photos/191043/pexels-photo-191043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        {/* Card */}
        <div className='relative rounded-xl'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-400 hover:border-orange-400 ease-in-out duration-300'>Order Now</button>
            </div>  
            <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl opaci'
                src="https://images.pexels.com/photos/1893563/pexels-photo-1893563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        {/* Card */}
        <div className='relative rounded-xl'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We deliver Desserts</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-400 hover:border-orange-400 ease-in-out duration-300'>Order Now</button>
            </div>  
            <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl opaci'
                src="https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards