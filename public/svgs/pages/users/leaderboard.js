import { usersProfile } from '@/data/userProfile'
import React from 'react'

const leaderboard = () => {
  return (
    <section className='sm:p-[30px]'>
        <div className='shadow-shadow1 rounded-[8px] bg-surface-gray overflow-hidden pb-1'>
            <div className='grid grid-cols-4 sm:grid-cols-6 rounded-tr-[8px] rounded-tl-[8px] bg-surface-background p-4 sm:py-[24px] sm:px-[30px]'>
                <h2 className='col-span-2 sm:col-span-1'>Name</h2>
                <h2 className='hidden sm:block'>Issue open</h2>
                <h2 className='hidden sm:block'>Issue closed</h2>
                <h2>Average</h2>
                <h2 className='hidden sm:block'>Efficiency</h2>
                <h2 className='text-right sm:text-left'>Hours</h2>
            </div>

            <div className='rounded-br-[8px] rounded-bl-[8px]'>
                {usersProfile.map((user) => (
                    <div className='p-4 sm:py-[24px] sm:px-[30px]'>
                        <div className="grid grid-cols-4 sm:grid-cols-6 items-center font-normal text-[14px] text-[#8B8989] leading-[18px] ">
                            <div className="flex col-span-2 sm:col-span-1 items-center">
                                <div className="w-10 h-10 rounded-[50%] bg-blue-300 mr-[10px]"></div>
                                <div>
                                    <p>{user.name}</p>
                                </div>
                            </div>

                            <p className='hidden sm:block'>{user.issueOpen}</p>
                            <p className='hidden sm:block'>{user.issueClosed}</p>

                            <div className="flex items-center">
                                <img src="/assets/star.svg" alt="star" />
                                <p className='ml-3'>{user.average}</p>
                            </div>

                            <div className="hidden sm:flex items-center space-x-[15px]">
                                <img src="/assets/chart.svg" alt="chart" className='mr-3' />
                                <span>{user.efficiency}%</span>
                            </div>

                            <p className='text-right sm:text-left'>{user.hours} Hours</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default leaderboard