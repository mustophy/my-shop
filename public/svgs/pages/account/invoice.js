import { FilledButton } from '@/components/ui/Button'
import { TitleCard } from '@/components/ui/Cards'
import { Rating } from '@/components/ui/Rating'
import React from 'react'

const invoice = () => {
    return (
        <div className='sm:grid p-4 sm:p-[30px] bg-surface-gray grid-cols-8 gap-x-[30px] h-full overflow-auto'>
            <div className="col-span-5">
                <TitleCard title="Invoice" subtitle="Create new invoice">
                    <div className="flex justify-between">
                        <p className='text-white font-semibold'>Bill to</p>
                        <p className='text-white font-semibold'>Invoice detail</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <p className='text-white font-semibold'>Adam ferry</p>
                        <span>#4581235</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        <span className='w-[150px]'>280 Suzanne Throughway,
                            Breannabury, OR 45801,
                            United States</span>
                        <span className='w-[150px] text-right'>35 Richard teris Latheronwheel KW5 8NW, London United kingdom</span>
                    </div>
                    <div className="flex flex-col gap-y-[10px] justify-right items-end mt-5">
                        <div className="flex">
                            <span className='text-white font-semibold'>Invoice date:</span>
                            <span className='ml-10'>20 Nov, 2022</span>
                        </div>
                        <div className="flex">
                            <span className='text-white font-semibold'>Due date:</span>
                            <span className=' ml-10'>20 Nov, 2022</span>
                        </div>
                    </div>
                    <div className="rounded-lg mt-[30px]">
                        <div className="grid grid-cols-5 px-4 sm:px-[30px] bg-[#474646] rounded-t-lg pt-[23px] pb-[25px]">
                            <p className="col-span-3 sm:col-span-2 text-white font-semibold text-lg">Item</p>
                            <p className='text-white hidden sm:block font-semibold text-lg'>Quantity</p>
                            <p className='text-white text-center font-semibold text-lg'>Rate</p>
                            <p className='text-right text-white font-semibold text-lg'>Amount</p>
                        </div>
                        <div className="grid grid-cols-5 pt-[23px] bg-surface-background px-4 sm:px-[30px] pb-[25px]">
                            <p className="col-span-2 text-sm sm:font-semibold">Iphone 13 pro</p>
                            <p className='text-sm font-semibold'>x1</p>
                            <p className='text-sm font-semibold text-center'>15</p>
                            <p className='text-sm font-semibold text-right'>$250</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end px-[30px] mt-[30px]">
                        <div className="flex">
                            <p>Subtotal:</p>
                            <p className='font-semibold text-white ml-40'>$880</p>
                        </div>
                        <div className="flex my-[15px] pb-4 border-b border-surface-border">
                            <p className='ml-8'>Tax:</p>
                            <p className='font-semibold text-white ml-44'>$20</p>
                        </div>
                        <div className="flex">
                            <p className='text-primary'>Total:</p>
                            <p className='font-semibold text-primary ml-40'>$880</p>
                        </div>
                        <FilledButton className="mt-12">Print Detail</FilledButton>
                    </div>
                </TitleCard>
            </div>
            <div className='col-span-3'>
                <TitleCard title="History" subtitle="See All">
                    <div className="grid gap-y-[30px] ">
                        <div className="flex">
                            <img src='/images/laptop.png' alt='' className='rounded-md w-20 h-20' />
                            <div className='ml-6 flex flex-col h-20 justify-between'>
                                <p className='text-white font-semibold'>Laptop Batteries</p>
                                <Rating />
                                <span className='font-semibold block'>$30</span>
                            </div>
                        </div>
                        <div className="flex">
                            <img src='/images/wallet.png' alt='' className='rounded-md w-20 h-20' />
                            <div className='ml-6 flex flex-col h-20 justify-between'>
                                <p className='text-white font-semibold'>Wallet</p>
                                <Rating />
                                <span className='font-semibold block'>$5</span>
                            </div>
                        </div>
                        <div className="flex">
                            <img src='/images/wireless.png' alt='' className='rounded-md w-20 h-20' />
                            <div className='ml-6 flex flex-col h-20 justify-between'>
                                <p className='text-white font-semibold'>Wireless Charger</p>
                                <Rating />
                                <span className='font-semibold block'>$80</span>
                            </div>
                        </div>
                    </div>
                </TitleCard>
            </div>
        </div>
    )
}

export default invoice