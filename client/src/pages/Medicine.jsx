import React from 'react'
import MedicineList from '../components/MedicineList'

const Medicine = () => {
  return (
    <div className="flex flex-col px-24 py-10 bg-[#F7F8FC]">
      <div>
        <h2>Medicines :</h2>
        <MedicineList />
      </div>
    </div>
  )
}

export default Medicine