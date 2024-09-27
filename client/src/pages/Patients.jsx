import React from 'react'
import FullFeaturedCrudGrid from '../components/PatientsList'

const Patients = () => {
    
  return (
    <div className='flex flex-col gap-20 px-20 py-10  bg-[#F7F8FC]'>
        <FullFeaturedCrudGrid />
    </div>
  )
}

export default Patients