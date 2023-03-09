import CustomLineChart from '@/charts/CustomLineChart'
import { Card, TitleCard } from '@/components/ui/Cards'
import { TextInput } from '@/components/ui/TextInput'
import React from 'react'

const billing = () => {
    return (
        <div className='flex gap-x-10 h-full p-4 sm:p-[30px] bg-white'>
            <div className="w-[262px] hidden sm:block">
                <div className='relative'>
                    <svg className='absolute text-red-500 top-5 left-4' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.625 9H9.0325L8.8225 8.7975C9.58291 7.91552 10.0008 6.78952 10 5.625C10 4.66082 9.71409 3.71829 9.17842 2.9166C8.64275 2.11491 7.88137 1.49007 6.99058 1.12109C6.09979 0.752112 5.11959 0.655571 4.17394 0.843674C3.22828 1.03178 2.35964 1.49608 1.67786 2.17786C0.996076 2.85964 0.531777 3.72828 0.343674 4.67394C0.155571 5.61959 0.252112 6.59979 0.621089 7.49058C0.990067 8.38137 1.61491 9.14275 2.4166 9.67842C3.21829 10.2141 4.16082 10.5 5.125 10.5C6.3325 10.5 7.4425 10.0575 8.2975 9.3225L8.5 9.5325V10.125L12.25 13.8675L13.3675 12.75L9.625 9ZM5.125 9C3.2575 9 1.75 7.4925 1.75 5.625C1.75 3.7575 3.2575 2.25 5.125 2.25C6.9925 2.25 8.5 3.7575 8.5 5.625C8.5 7.4925 6.9925 9 5.125 9Z" fill="#727272" />
                    </svg>
                    <svg className='absolute top-5 right-4' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99922 0.125C6.47422 0.125 4.45234 1.41875 2.98047 2.95859C1.51797 4.48438 0.539844 6.3125 0.0773437 7.56758C-0.0257813 7.84531 -0.0257813 8.15469 0.0773437 8.43242C0.539844 9.6875 1.51797 11.5156 2.98047 13.0414C4.45234 14.5813 6.47422 15.875 8.99922 15.875C11.5242 15.875 13.5461 14.5813 15.018 13.0414C16.4805 11.5121 17.4586 9.6875 17.9242 8.43242C18.0273 8.15469 18.0273 7.84531 17.9242 7.56758C17.4586 6.3125 16.4805 4.48438 15.018 2.95859C13.5461 1.41875 11.5242 0.125 8.99922 0.125ZM13.4992 8C13.4992 10.7949 11.4836 13.0625 8.99922 13.0625C6.51484 13.0625 4.49922 10.7949 4.49922 8C4.49922 5.20508 6.51484 2.9375 8.99922 2.9375C11.4836 2.9375 13.4992 5.20508 13.4992 8ZM8.99922 5.75C8.99922 6.99102 8.10234 8 6.99922 8C6.63984 8 6.30234 7.89453 6.01172 7.70469C6.00547 7.80313 5.99922 7.89805 5.99922 8C5.99922 9.86328 7.34297 11.375 8.99922 11.375C10.6555 11.375 11.9992 9.86328 11.9992 8C11.9992 6.13672 10.6555 4.625 8.99922 4.625C8.91172 4.625 8.82422 4.62852 8.73672 4.63906C8.90234 4.96602 8.99922 5.3457 8.99922 5.75Z" fill="#727272" />
                    </svg>
                    <input type="text" className='py-[14px] w-full pl-12 border border-surface-border pr-6 rounded-lg bg-surface-background' placeholder='Search specific info' />
                    <div className="flex items-center mt-[22px] pb-4 border-b border-surface-border gap-x-4">
                        <img src="/assets/pin.svg" alt="" />
                        <span>PINNED</span>
                    </div>
                    <div className="flex items-center mt-5 pb-4 gap-x-4">
                        <img src="/assets/location.svg" alt="" />
                        <span>My Address</span>
                    </div>
                    <div className="flex items-center mt-5 pb-4 gap-x-4">
                        <img className='stroke-gray-700' src="/assets/card.svg" alt="" />
                        <span>Payment Method</span>
                    </div>
                    <div className="flex items-center mt-5 pb-4 gap-x-4">
                        <img src="/assets/history.svg" alt="" />
                        <span>Order History</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-auto">
                <div className=''>
                    <TitleCard title="My Address" subtitle="Add new address" className="px-3">
                        <div className='grid sm:grid-cols-2 gap-y-[30px] gap-[30px]'>
                            <Card outline={true}>
                                <h2 className=''>Address 1</h2>
                                <span className='block mt-3 mb-4'>45 Roker TerraceLatheronwheelKW5 8NW, London</span>
                                <p className='text-primary'>Edit address</p>
                            </Card>
                            <Card>
                                <h2 className=''>Address 2</h2>
                                <span className='block mt-3 mb-4'>45 Roker TerraceLatheronwheelKW5 8NW, London</span>
                                <p className='text-primary'>Edit address</p>
                            </Card>
                        </div>
                        <h2 className='mt-[30px] mb-[10px]'>Tax Location</h2>
                        <p>UK - 30% SST</p>
                        <p className='text-primary mt-3'>More info</p>
                        <p className='mt-[40px] mb-[8px]'>Your text location determines the taxes that are applied to your bill.</p>
                        <p className='text-primary'>How do i correct my tax location?</p>
                    </TitleCard>
                    <div className='mt-[30px]'></div>
                    <TitleCard title="Payment Method" subtitle="Add new method">
                        <div className='grid sm:grid-cols-2 gap-[30px]'>
                            <Card outline={true}>
                                <img src="/assets/delete.svg" className='absolute top-8 right-5 cursor-pointer' alt="" />
                                <h2 className=''>Master Card</h2>
                                <span className='block mt-3 mb-2 text-sm'>Master 1234 *** 58383 </span>
                                <span className='block mt-3 mb-4 text-sm'>Expire 12/33</span>
                                <div className="flex justify-between">
                                    <p className='text-primary'>Edit Account info</p>
                                    <img src="/images/mastercard.png" alt="" />
                                </div>
                            </Card>
                            <Card>
                                <img src="/assets/delete.svg" className='absolute top-8 right-5 cursor-pointer' alt="" />
                                <h2 className=''>Visa </h2>
                                <span className='block mt-3 mb-2 text-sm'>Visa 1234 *** 58383 </span>
                                <span className='block mt-3 mb-4 text-sm'>Expire 11/33</span>
                                <div className="flex justify-between">
                                    <p className='text-primary'>Edit Account info</p>
                                    <img src="/images/visa.png" alt="" />
                                </div>
                            </Card>
                        </div>
                        <p className='text-[14px] leading-[19px] mt-[30px] pr-6'>Cards will be charged either at the end of the month or whenever your balance exceeds the usage threshold. All major credit / debit cards accepted.</p>
                    </TitleCard>
                    <div className='mt-[30px]'></div>
                    <TitleCard title="Order History">
                        <div className="grid grid-cols-4 sm:grid-cols-5 mb-4">
                            <p className='text-black sm:font-semibold text-lg'>Date</p>
                            <p className='text-black sm:font-semibold text-lg'>Order No</p>
                            <p className='hidden sm:block text-black sm:font-semibold text-lg'>Invoice</p>
                            <p className='text-black sm:font-semibold text-lg'>Amount</p>
                            <p className='text-black sm:font-semibold text-lg'>Status</p>
                        </div>
                        {[0, 1, 1, 1].map(a => (
                            <div className="grid grid-cols-4 sm:grid-cols-5 py-6">
                                <span>20/11/2022</span>
                                <span>#727272</span>
                                <span className='hidden sm:block'>PDF</span>
                                <span>$250</span>
                                <div className='flex items-center'>
                                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                                    <span className='ml-2'>Complete</span>
                                </div>
                            </div>
                        ))}
                    </TitleCard>
                </div>
            </div>
        </div>
    )
}

export default billing