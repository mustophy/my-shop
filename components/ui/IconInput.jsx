import React from 'react'

const IconInput = ({label, placeholder, img}) => {
  return (
    <div className=''>
        <label className=''>{label}</label>
        <div className='flex items-center p-[10px] bg-surface-accent w-[19rem] border border-[#DDE2E8] rounded-md mt-[12px]'>
            <img src={img} alt='img' className='mr-[10px] h-[13px] w-[18px]' />
            <input type="text" placeholder={placeholder} className='bg-transparent outline-none' />
        </div>
    </div>
  )
}

export default IconInput