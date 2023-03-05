import { FilledButton } from '@/components/ui/Button'
import { usersProfile } from '@/data/usersProfile'
import React from 'react'


const customers = () => {
  return (
    <section className='sm:p-[30px] bg-white'>
        <div className='bg-white sm:flex justify-between p-5 shadow-shadow1 mb-[30px] rounded-[8px]'>
            <div className='space-y-4 ml-[10px]'>
                <h1 className='font-bold text-[23px] leading-[30px]'>Customer</h1>
                <p>Total customers : 20530</p>
                <div className='flex items-center'>
                    <div className='w-4 h-4 bg-blue-500 mr-4'></div>
                    <p className='text-[13px] leading-[16px]'>Import customer</p>
                </div>
                <div className='flex items-center'>
                    <div className='w-4 h-4 bg-blue-500 mr-4'></div>
                    <p className='text-[13px] leading-[16px]'>Export customer</p>
                </div>
            </div>

            <div className='flex items-end py-[5px] px-3 mt-4 sm:mt-0 sm:px-[20px]'>
                <FilledButton>Add Customer</FilledButton>
            </div>
        </div>

        <div className='shadow-shadow1 rounded-[8px] bg-white overflow-hidden pb-1'>
            <div className='hidden sm:grid over-grid rounded-tr-[8px]  rounded-tl-[8px] bg-surface-background py-[24px] px-[30px]'>
                <h2>Name</h2>
                <h2>Email</h2>
                <h2>Country</h2>
                <h2>Orders</h2>
                <h2 className=''>Total Spent</h2>
            </div>

            <div className='rounded-br-[8px] rounded-bl-[8px] space-y-6 sm:space-y-0'>
                {usersProfile.map((user) => (
                    <div className=' items-center sm:block py-[12px] px-[15px] sm:py-[24px] sm:px-[30px]'>
                        {/* <div className='sm:hidden mr-2 '>
                            <div className=' h-[80px] w-[80px] rounded-[50%] bg-blue-300'></div>
                        </div> */}
                        <div className="sm:grid over-grid items-center font-normal text-[14px] text-[#8B8989] leading-[18px] ">
                            <div className="flex items-center">
                                <div className="hidden sm:block w-10 h-10 rounded-[50%] bg-blue-300 mr-[10px]"></div>
                                <div>
                                    <p>{user.name}</p>
                                </div>
                            </div>

                            <p>{user.email}</p>
                            <p>{user.country}</p>

                            <div className="flex items-center justify-between">
                                <p className='sm:hidden font-semibold'>Orders</p>
                                <p>{user.orders}</p>
                            </div>

                            <div className="flex items-center justify-between space-x-[15px]">
                                <p className='sm:hidden font-semibold'>Total</p>
                                <p>${user.totalSpent}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default customers