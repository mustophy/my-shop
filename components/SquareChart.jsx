import React from 'react'

export const SquareChart = ({}) => {
  return (
    <div className='w-full relative h-full'>
        <div className="absolute rounded-md border-primary border-4 h-full w-full"></div>
        <div className="bg-surface-gray absolute w-2/5 h-1/2 right-0"></div>
        <p className='absolute right-4 px-3 top-[-8px] bg-surface-gray z-10'>68%</p>
        {/* <div className="bg-white absolute w-4/5 h-1/2 right-0 bottom-0"></div> */}
        <div className="absolute rounded-md border-primary border h-full w-full"></div>
    </div>
  )
}
