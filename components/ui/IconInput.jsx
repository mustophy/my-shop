import React from 'react'

const IconInput = ({label, placeholder, img}) => {
  return (
    <div className=''>
        <label className=''>{label}</label>
        <div className='flex p-[10px] bg-[#FBF9F7] w-80 border border-[#DDE2E8] rounded-md mt-[12px]'>
            <img src={img} alt='img' className='mr-[10px]' />
            <input type="text" placeholder={placeholder} className='bg-transparent outline-none' />
        </div>
    </div>
  )
}

export default IconInput