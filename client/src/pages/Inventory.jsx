import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Inventory = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-20 px-24 py-10  bg-[#F7F8FC] '>
        <div>
            <h2 className='text-3xl font-bold text-[#252733]'>Inventory :</h2>
            <p className='text-lg text-[#252733] pt-2'>Status of the inventory items</p>
        </div>
        <div className='flex gap-12 items-center justify-start'>
            <img src={assets.available} className='cursor-pointer' onClick={() =>navigate("/pharmacist/medicine") }/>
            <img src={assets.shortage} className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Inventory ;