import { FilledButton } from '@/components/ui/Button'
import { usersProfile } from '@/data/usersProfile'
import React from 'react'
// import { CircularProgressbar } from 'react-circular-progressbar'
// import 'react-circular-progressbar/dist/styles.css';


const Overview = () => {
    return (
        <section className='bg-surface-gray pb-[30px]'>
            <FilledButton>
                Add User
            </FilledButton>

            <div className='sm:flex justify-between m-[30px]'>
                <div className='shadow-shadow1 bg-surface-background rounded-[8px] w-fit flex justify-between items-center p-5'>
                    <div className='mr-[90px]'>
                        <h2 className='text-white'>Total Users</h2>
                        <span className=' block my-3 text-[28px] font-semibold text-primary leading-[31px] '>50</span>
                        <p className='text-[12px] leading-[16px] '>from 45</p>
                    </div>
                    <div className='w-[55px] h-[55px] '>
                        {/* <CircularProgressbar 
                          styles={{
                            textColor: 'red',
                          }}
                          value="60" 
                          text='60%'
                        /> */}
                    </div>
                </div>
            </div>

            <div className='shadow-shadow1 rounded-[8px] overflow-hidden pb-1'>
                <div className='grid over-grid rounded-tr-[8px] text-white rounded-tl-[8px] bg-surface-background py-[24px] px-[30px]'>
                    <h2>Name</h2>
                    <h2>Designation</h2>
                    <h2>Country</h2>
                    <h2>Verification</h2>
                    <h2 className=''>Profile Completeness</h2>
                </div>

                <div className='rounded-br-[8px] rounded-bl-[8px]'>
                    {usersProfile.map((user) => (
                        <div className='py-[24px] px-[30px]'>
                            <div className="grid over-grid items-center font-normal text-[14px] text-[#8B8989] leading-[18px] ">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-[50%] bg-blue-300 mr-[10px]"></div>
                                    <div>
                                        <p>{user.name}</p>
                                        <p className="text-[10px] leading-[13px]">{user.email}</p>
                                    </div>
                                </div>

                                <p>{user.desig}</p>
                                <p>{user.country}</p>

                                <div className="flex items-center">
                                    <div style={{backgroundColor: user.verif === "Verified"? "#62CAA7" : "#F6B445"}} className="w-3 h-3 rounded-[50%] mr-[10px] "></div>
                                    <p>{user.verif}</p>
                                </div>

                                <div className="flex items-center space-x-[15px]">
                                    <span>{user.progress}</span>
                                    <div className="h-[5px] w-[100px] bg-[#8B8989] rounded-full">
                                        <div style={{width: user.progress}} className="h-full bg-primary rounded-full "></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Overview