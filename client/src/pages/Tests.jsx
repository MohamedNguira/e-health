import React from 'react'
import { assets } from '../assets/assets'

const Tests = () => {
  return (
    <div className='flex flex-col gap-20 px-24 py-10  bg-[#F7F8FC] '>
        <div>
            <h2 className='text-3xl font-bold text-[#252733]'>Tests :</h2>
        </div>
        <div className='flex gap-12 items-center justify-start'>
            <img src={assets.Test} className='cursor-pointer' onClick={() =>navigate("/pharmacist/medicine") }/>
            <img src={assets.addTest} className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Tests