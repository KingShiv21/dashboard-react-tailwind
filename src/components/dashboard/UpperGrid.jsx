import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

const UpperGrid = () => {
  return (
    <div className=' px-1  w-full flex flex-col sm:flex-row justify-around'>

      <div className=' bg-white w-full  my-1  sm:w-[17rem] rounded-lg'>
        <div className='pl-2 sm:pl-0  flex flex-row items-center w-fit sm:mx-auto gap-2'>
        <IoBagHandle className=' bg-blue-600 rounded-full text-white w-9 h-9 p-2'/>
        <div className=' flex flex-col'>

            <p className=' text-sm text-gray-500 mt-1'>Total Sales</p>

            <div className=' flex flex-row gap-1'>
            <h1 className=' font-bold text-lg mb-1'>$34543</h1>
            <span className='text-sm text-green-500 pt-1 font-bold '>+343</span>
            </div>

        </div>
        </div>

      </div>
      <div className=' bg-white w-full  my-1  sm:w-[17rem] rounded-lg'>
        <div className='pl-2 sm:pl-0  flex flex-row items-center w-fit sm:mx-auto gap-2'>
        <IoPieChart className=' bg-red-600 rounded-full text-white w-9 h-9 p-2'/>
        <div className=' flex flex-col'>

            <p className=' text-sm text-gray-500 mt-1'>Total Expanses</p>

            <div className=' flex flex-row gap-1'>
            <h1 className=' font-bold text-lg mb-1'>$34513</h1>
            <span className='text-sm text-green-500 pt-1 font-bold '>+111</span>
            </div>
            </div>
        </div>

      </div>
      <div className=' bg-white w-full  my-1  sm:w-[17rem] rounded-lg '>
        <div className=' pl-2 sm:pl-0  flex flex-row items-center w-fit sm:mx-auto gap-2 '>
        <IoPeople className=' bg-yellow-600 rounded-full text-white w-9 h-9 p-2'/>
        <div className=' flex flex-col'>

            <p className=' text-sm text-gray-500 mt-1'>Total Customers</p>

            <div className=' flex flex-row gap-1'>
            <h1 className=' font-bold text-lg mb-1'>34543</h1>
            <span className='text-sm text-red-500 pt-1 font-bold '>-30</span>
            </div>
            </div>
        </div>

      </div>
      <div className=' bg-white w-full  my-1  sm:w-[17rem] rounded-lg '>
        <div className=' pl-2 sm:pl-0  flex flex-row items-center w-fit sm:mx-auto gap-2'>
        <IoCart className=' bg-green-600 rounded-full text-white w-9 h-9 p-2'/>
        <div className=' flex flex-col'>

            <p className=' text-sm text-gray-500 mt-1'>Total Orders</p>

            <div className=' flex flex-row gap-1'>
            <h1 className=' font-bold text-lg mb-1'>34543</h1>
            <span className='text-sm text-red-500 pt-1 font-bold '>-20</span>
            </div>
            </div>
        </div>

      </div>



    </div>
  )
}

export default UpperGrid
