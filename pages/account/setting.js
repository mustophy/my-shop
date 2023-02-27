import { FilledButton, OutlineButton } from '@/components/ui/Button'
import { TitleCard } from '@/components/ui/Cards'
import IconInput from '@/components/ui/IconInput'
import { SwitchBtn } from '@/components/ui/Switch'
import React, { useState } from 'react'

const setting = () => {
    const [connectT, setConnectT] = useState(true)
    const [connectF, setConnectF] = useState(true)
    const [connectI, setConnectI] = useState(true)
    const [connectG, setConnectG] = useState(true)
    const [connectS, setConnectS] = useState(true)
  return (
    <div className='flex gap-x-10 h-full p-[30px]'> 
        <div className="w-[242px]">
            <div className='relative'>
                <svg className='absolute top-5 left-4' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.625 9H9.0325L8.8225 8.7975C9.58291 7.91552 10.0008 6.78952 10 5.625C10 4.66082 9.71409 3.71829 9.17842 2.9166C8.64275 2.11491 7.88137 1.49007 6.99058 1.12109C6.09979 0.752112 5.11959 0.655571 4.17394 0.843674C3.22828 1.03178 2.35964 1.49608 1.67786 2.17786C0.996076 2.85964 0.531777 3.72828 0.343674 4.67394C0.155571 5.61959 0.252112 6.59979 0.621089 7.49058C0.990067 8.38137 1.61491 9.14275 2.4166 9.67842C3.21829 10.2141 4.16082 10.5 5.125 10.5C6.3325 10.5 7.4425 10.0575 8.2975 9.3225L8.5 9.5325V10.125L12.25 13.8675L13.3675 12.75L9.625 9ZM5.125 9C3.2575 9 1.75 7.4925 1.75 5.625C1.75 3.7575 3.2575 2.25 5.125 2.25C6.9925 2.25 8.5 3.7575 8.5 5.625C8.5 7.4925 6.9925 9 5.125 9Z" fill="#727272" />
                </svg>
                <input type="text" className='py-[14px] w-full pl-12 border border-surface-border pr-6 rounded-lg bg-surface-background' placeholder='Search specific info' />
                <div className="flex items-center mt-[22px] pb-4 border-b border-surface-border gap-x-4">
                    <img src="/assets/pin.svg" alt="" />
                    <span>PINNED</span>
                </div>
                <div className="flex items-center mt-5 pb-4 gap-x-4">
                    <img src="/assets/setting/basic.svg" alt="" />
                    <span>Basic Information</span>
                </div>
                <div className="flex items-center mt-5 pb-4 gap-x-4">
                    <img className='stroke-gray-700' src="/assets/setting/notifi.svg" alt="" />
                    <span>Notifications</span>
                </div>
                <div className="flex items-center mt-5 pb-4 gap-x-4">
                    <img src="/assets/setting/social.svg" alt="" />
                    <span>Social Accounts</span>
                </div>
                <div className="flex items-center mt-5 pb-4 gap-x-4">
                    <img src="/assets/setting/security.svg" alt="" />
                    <span>Password & Security</span>
                </div>
                <div className="flex items-center mt-5 pb-4 gap-x-4">
                    <img src="/assets/setting/delete.svg" alt="" />
                    <span>Delete Account</span>
                </div>
            </div>
        </div>
        <div className="flex-1 overflow-auto">
            <div className=''>
                <TitleCard title="Basic Information">
                    <div className="flex gap-4 items-center mb-[25px] ">
                        <img className="h-[50px]" src="/assets/add-user/profile.svg" alt='img' />
                        <div>
                            <p className="font-bold text-black text-[14px]">Profile Photo</p>
                            <p className="text-[13px]">This will be displayed on your profile</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between w-full gap-[20px]">
                        <IconInput placeholder='March David'label='Name' img='/assets/add-user/name.svg' />
                        <IconInput placeholder='David123@gmail.com'label='Email Address' img='/assets/add-user/email.svg' />
                        <IconInput placeholder='Male'label='Gender' img='/assets/add-user/gender.svg' />
                        <IconInput placeholder='9/11/1985'label='Date of Birth' img='/assets/add-user/date.svg' />
                        <IconInput placeholder='Account'label='Department' img='/assets/add-user/depart.svg' />
                        <IconInput placeholder='Berlin, Germany'label='Live' img='/assets/add-user/live.svg' />
                    </div>
                    <div className="flex justify-end mt-[35px] mb-[10px] mr-[25px]">
                        <FilledButton>Update</FilledButton>
                    </div>
                </TitleCard>
                <div className='mt-[30px]'></div>
                <TitleCard title="Notifications" >
                    <div className='flex w-[100%]'>
                    <div className='pr-[30px] mr-[25px] min-w-[50%] border-r-[1px] '>
                        <h2 className='font-bold  text-[14px]'>Email notification</h2>
                        <p className='text-[13px]'>Get emails to find out what”s going on when
                            you”re not online. You can turn these off.</p>
                        <div className='flex gap-4 mt-[15px]'>
                            <div className='mt-[5px]'><SwitchBtn  /></div>
                            <div>
                                <h2 className='font-bold text-[13px]'>News and Updates</h2>
                                <p className='text-[12px]'>News about products and feature updates</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-[15px]'>
                            <div className='mt-[5px]'><SwitchBtn  /></div>
                            <div>
                                <h2 className='font-bold text-[13px]'>Tips and tutorials</h2>
                                <p className='text-[12px]'>Tips on getting more out of united.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-[15px]'>
                            <div className='mt-[5px]'><SwitchBtn  /></div>
                            <div>
                                <h2 className='font-bold text-[13px]'>User research</h2>
                                <p className='text-[12px]'>Get involved in our beta testing program or
                                    participate in paid product user research.
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-[15px]'>
                            <div className='mt-[5px]'><SwitchBtn  /></div>
                            <div>
                                <h2 className='font-bold text-[13px]'>Comments</h2>
                                <p className='text-[12px]'>Comments on your posts and replies to comments.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-[15px]'>
                            <div className='mt-[5px]'><SwitchBtn  /></div>
                            <div>
                                <h2 className='font-bold text-[13px]'>Reminders</h2>
                                <p className='text-[12px]'>These are notification to remind you of updates you might have missed.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-bold  text-[14px]'>Push notification</h2>
                        <p className='text-[13px]'>Get push notification in_app to find out
                                what”s going on when you”re online.
                        </p>
                        <div className='flex gap-4 mt-[15px]'>
                            <div className='mt-[5px]'><SwitchBtn  /></div>
                            <div>
                                <h2 className='font-bold text-[13px]'>Comments</h2>
                                <p className='text-[12px]'>Comments on your posts and replies to comments.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-[15px]'>
                            <div className='mt-[5px]'><SwitchBtn  /></div>
                            <div>
                                <h2 className='font-bold text-[13px]'>Reminders</h2>
                                <p className='text-[12px]'>These are notification to remind you of updates you might have missed.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-[15px]'>
                            <div className='mt-[5px]'><SwitchBtn  /></div>
                            <div>
                                <h2 className='font-bold text-[13px]'>More activity about you</h2>
                                <p className='text-[12px]'>These are notification for posts on your 
                                    profile, likes and other reactions to your posts, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="flex justify-end mt-[35px] mb-[10px] mr-[25px]">
                        <FilledButton>Update</FilledButton>
                    </div>
                </TitleCard>
                <div className='mt-[30px]'></div>
                <TitleCard title="Social Accounts" >
                    <div className='flex justify-between items-center border-b-[1px] pb-6 mb-6'>
                        <div className='flex gap-[15px] items-center '>
                            <div className='rounded-full p-[10px] bg-surface-background h-[50px] w-[50px] flex justify-center items-center'>
                                <img src="/assets/setting/twitter.svg" className='h-[25px]' alt="" />
                            </div>
                            <div>
                                <h2>Twitter</h2>
                                <p>{connectT? 'Not Connected' : 'Connected'}</p>
                            </div>
                        </div>
                        <p className={`cursor-pointer ${connectT? 'text-primary': ''}`}  onClick={()=>setConnectT(!connectT)}>{connectT?'Connect': 'Disconnect'}</p>
                    </div>
                    <div className='flex justify-between items-center border-b-[1px] pb-6 mb-6'>
                        <div className='flex gap-[15px] items-center '>
                            <div className='rounded-full p-[10px] bg-surface-background h-[50px] w-[50px] flex justify-center items-center'>
                                <img src="/assets/setting/facebook.svg" className='h-[25px]' alt="" />
                            </div>
                            <div>
                                <h2>Facebook</h2>
                                <p>{connectF? 'Not Connected' : 'Connected'}</p>
                            </div>
                        </div>
                        <p className={`cursor-pointer ${connectF? 'text-primary': ''}`}  onClick={()=>setConnectF(!connectF)}>{connectF?'Connect': 'Disconnect'}</p>
                    </div>
                    <div className='flex justify-between items-center border-b-[1px] pb-6 mb-6'>
                        <div className='flex gap-[15px] items-center '>
                            <div className='rounded-full p-[10px] bg-surface-background h-[50px] w-[50px] flex justify-center items-center'>
                                <img src="/assets/setting/slack.svg" className='h-[25px]' alt="" />
                            </div>
                            <div>
                                <h2>Slack</h2>
                                <p>{connectS? 'Not Connected' : 'Connected'}</p>
                            </div>
                        </div>
                        <p className={`cursor-pointer ${connectS? 'text-primary': ''}`}  onClick={()=>setConnectS(!connectS)}>{connectS?'Connect': 'Disconnect'}</p>
                    </div>
                    <div className='flex justify-between items-center border-b-[1px] pb-6 mb-6'>
                        <div className='flex gap-[15px] items-center '>
                            <div className='rounded-full p-[10px] bg-surface-background h-[50px] w-[50px] flex justify-center items-center'>
                                <img src="/assets/setting/linkedin.svg" className='h-[25px]' alt="" />
                            </div>
                            <div>
                                <h2>LinkedIn</h2>
                                <p>{connectI? 'Not Connected' : 'Connected'}</p>
                            </div>
                        </div>
                        <p className={`cursor-pointer ${connectI? 'text-primary': ''}`}  onClick={()=>setConnectI(!connectI)}>{connectI?'Connect': 'Disconnect'}</p>
                    </div>
                    <div className='flex justify-between items-center '>
                        <div className='flex gap-[15px] items-center '>
                            <div className='rounded-full p-[10px] bg-surface-background h-[50px] w-[50px] flex justify-center items-center'>
                                <img src="/assets/setting/google.svg" className='h-[25px]' alt="" />
                            </div>
                            <div>
                                <h2>Google</h2>
                                <p>{connectG? 'Not Connected' : 'Connected'}</p>
                            </div>
                        </div>
                        <p className={`cursor-pointer ${connectG? 'text-primary': ''}`}  onClick={()=>setConnectG(!connectG)}>{connectG?'Connect': 'Disconnect'}</p>
                    </div>
                </TitleCard>
                <div className='mt-[30px]'></div>
                <TitleCard title="Password & Security" >
                    <div className='flex gap-[25px] flex-wrap'>
                    <div className='w-[260px] relative '>
                        <div className='absolute top-6 text-[20px] left-4'>
                            <img src="/assets/setting/key.svg" alt="" />
                        </div>
                        <input type="text" className='py-[14px] w-full pl-12 border border-surface-border pr-6 rounded-lg bg-surface-background' placeholder='Enter Current Password' />
                    </div>
                    <div className='w-[260px] relative'>
                        <div className='absolute top-6 text-[20px] left-4'>
                            <img src="/assets/setting/key.svg" alt="" />
                        </div>
                        <input type="text" className='py-[14px] w-full pl-12 border border-surface-border pr-6 rounded-lg bg-surface-background' placeholder='Enter New Password' />
                    </div>
                    <div className='w-[260px] relative'>
                        <div className='absolute top-6 text-[20px] left-4'>
                            <img src="/assets/setting/key.svg" alt="" />
                        </div>
                        <svg className='absolute top-5 right-4' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99922 0.125C6.47422 0.125 4.45234 1.41875 2.98047 2.95859C1.51797 4.48438 0.539844 6.3125 0.0773437 7.56758C-0.0257813 7.84531 -0.0257813 8.15469 0.0773437 8.43242C0.539844 9.6875 1.51797 11.5156 2.98047 13.0414C4.45234 14.5813 6.47422 15.875 8.99922 15.875C11.5242 15.875 13.5461 14.5813 15.018 13.0414C16.4805 11.5121 17.4586 9.6875 17.9242 8.43242C18.0273 8.15469 18.0273 7.84531 17.9242 7.56758C17.4586 6.3125 16.4805 4.48438 15.018 2.95859C13.5461 1.41875 11.5242 0.125 8.99922 0.125ZM13.4992 8C13.4992 10.7949 11.4836 13.0625 8.99922 13.0625C6.51484 13.0625 4.49922 10.7949 4.49922 8C4.49922 5.20508 6.51484 2.9375 8.99922 2.9375C11.4836 2.9375 13.4992 5.20508 13.4992 8ZM8.99922 5.75C8.99922 6.99102 8.10234 8 6.99922 8C6.63984 8 6.30234 7.89453 6.01172 7.70469C6.00547 7.80313 5.99922 7.89805 5.99922 8C5.99922 9.86328 7.34297 11.375 8.99922 11.375C10.6555 11.375 11.9992 9.86328 11.9992 8C11.9992 6.13672 10.6555 4.625 8.99922 4.625C8.91172 4.625 8.82422 4.62852 8.73672 4.63906C8.90234 4.96602 8.99922 5.3457 8.99922 5.75Z" fill="#727272" />
                        </svg>
                        <input type="text" className='py-[14px] w-full pl-12 border border-surface-border pr-6 rounded-lg bg-surface-background' placeholder='Confirm New Password' />
                    </div>
                    </div>
                    <div className="flex justify-end mt-[35px] mb-[10px] mr-[25px]">
                        <FilledButton>Update</FilledButton>
                    </div>
                </TitleCard>
                <div className='mt-[30px]'></div>
                <TitleCard title="Delete your account" >
                    <p className='text-[13px]'>When you delete your account, you lose access to Front account services, and we permanently delete 
                        your personal data. You can cancel the deletion for 14 days.
                    </p>
                    <div className='flex items-center mt-[30px]'>
                        <input type='checkbox' className='mr-[7px]' />
                        <p className='text-[12px]'>Confirm that I want to delete my account</p>
                    </div>
                    <div className='flex justify-end mt-[35px] mb-[10px] mr-[25px]'>
                        <OutlineButton className='px-[35px]'>Learn more</OutlineButton>
                        <FilledButton className='bg-red-600 ml-[30px]'>Delete</FilledButton>
                    </div>
                </TitleCard>
            </div>
        </div>
    </div>
  )
}

export default setting