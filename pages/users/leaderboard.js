import { usersProfile } from '@/data/userProfile'
import React from 'react'

const leaderboard = () => {
  return (
    <section className='p-[30px]'>
        <div className='shadow-shadow1 rounded-[8px] bg-white overflow-hidden pb-1'>
            <div className='grid lead-grid rounded-tr-[8px]  rounded-tl-[8px] bg-surface-background py-[24px] px-[30px]'>
                <h2>Name</h2>
                <h2>Issue open</h2>
                <h2>Issue closed</h2>
                <h2>Average</h2>
                <h2>Efficiency</h2>
                <h2 className=''>Hours</h2>
            </div>

            <div className='rounded-br-[8px] rounded-bl-[8px]'>
                {usersProfile.map((user) => (
                    <div className='py-[24px] px-[30px]'>
                        <div className="grid lead-grid items-center font-normal text-[14px] text-[#8B8989] leading-[18px] ">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-[50%] bg-blue-300 mr-[10px]"></div>
                                <div>
                                    <p>{user.name}</p>
                                </div>
                            </div>

                            <p>{user.issueOpen}</p>
                            <p>{user.issueClosed}</p>

                            <div className="flex items-center">
                                <img src="/assets/star.svg" alt="star" />
                                <p className='ml-3'>{user.average}</p>
                            </div>

                            <div className="flex items-center space-x-[15px]">
                                <img src="/assets/chart.svg" alt="chart" className='mr-3' />
                                <span>{user.efficiency}%</span>
                            </div>

                            <p>{user.hours} Hours</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default leaderboard