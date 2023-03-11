import { FilledButton } from '@/components/ui/Button'
import { usersProfile } from '@/data/usersProfile'
import React from 'react'


const customers = () => {
  return (
    <section className='p-[30px] bg-surface-gray'>
        <div className='bg-surface-background flex justify-between p-5 shadow-shadow1 mb-[30px] rounded-[8px]'>
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

            <div className='flex items-end'>
                <FilledButton>Add Customer</FilledButton>
            </div>
        </div>

        <div className='shadow-shadow1 rounded-[8px] overflow-hidden pb-1'>
            <div className='grid over-grid rounded-tr-[8px]  rounded-tl-[8px] bg-surface-background py-[24px] px-[30px]'>
                <h2>Name</h2>
                <h2>Email</h2>
                <h2>Country</h2>
                <h2>Orders</h2>
                <h2 className=''>Total Spent</h2>
            </div>

            <div className='rounded-br-[8px] rounded-bl-[8px]'>
                {usersProfile.map((user) => (
                    <div className='py-[24px] px-[30px]'>
                        <div className="grid over-grid items-center font-normal text-[14px] text-[#8B8989] leading-[18px] ">
                            <div className="flex items-center">
                                <img src={user.imageUrl} alt='' className="w-10 h-10 rounded-[50%] mr-[10px]" />
                                <div>
                                    <p>{user.name}</p>
                                </div>
                            </div>

                            <p>{user.email}</p>
                            <p>{user.country}</p>

                            <div className="flex items-center">
                                <p>{user.orders}</p>
                            </div>

                            <div className="flex items-center space-x-[15px]">
                                <span>${user.totalSpent}</span>
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