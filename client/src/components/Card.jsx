import React from 'react'

const Card = ({number, name}) => {
  return (
    <div className='bg-[#ffffff] shadow-lg rounded-md p-4 flex flex-col justify-start w-full h-25 border-solid border-0.5 gap-6'>
        <h3 className='text-lg  font-bold'>{name}</h3>
        
        <h2 className='text-3xl font-bold text-[#3751FF]'>{number}</h2>
    </div>
  )
}

export default Card