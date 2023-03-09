import { FilledButton } from '@/components/ui/Button'
import { TitleCard } from '@/components/ui/Cards'
import { Rating } from '@/components/ui/Rating'
import React from 'react'

const invoice = () => {
    return (
        <div className='sm:grid p-4 sm:p-[30px] bg-white grid-cols-8 gap-x-[30px] h-full overflow-auto'>
            <div className="col-span-5">
                <TitleCard title="Invoice" subtitle="Create new invoice">
                    <div className="flex justify-between">
                        <p className='text-black font-semibold'>Bill to</p>
                        <p className='text-black font-semibold'>Invoice detail</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <p className='text-black font-semibold'>Adam ferry</p>
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
                            <span>Invoice date:</span>
                            <span className='font-semibold ml-10'>20 Nov, 2022</span>
                        </div>
                        <div className="flex">
                            <span>Due date:</span>
                            <span className='font-semibold ml-10'>20 Nov, 2022</span>
                        </div>
                    </div>
                    <div className="rounded-lg border border-surface-border mt-[30px]">
                        <div className="grid grid-cols-5 px-4 sm:px-[30px] border-b border-surface-border pt-[23px] pb-[25px]">
                            <p className="col-span-3 sm:col-span-2 text-black font-semibold text-lg">Item</p>
                            <p className='text-black hidden sm:block font-semibold text-lg'>Quantity</p>
                            <p className='text-black text-center font-semibold text-lg'>Rate</p>
                            <p className='text-right text-black font-semibold text-lg'>Amount</p>
                        </div>
                        <div className="grid grid-cols-5 pt-[23px] px-4 sm:px-[30px] pb-[25px]">
                            <p className="col-span-2 text-sm sm:font-semibold">Iphone 13 pro</p>
                            <p className='text-sm font-semibold'>x1</p>
                            <p className='text-sm font-semibold text-center'>15</p>
                            <p className='text-sm font-semibold text-right'>$250</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end px-[30px] mt-[30px]">
                        <div className="flex">
                            <p>Subtotal:</p>
                            <p className='font-semibold text-black ml-40'>$880</p>
                        </div>
                        <div className="flex my-[15px] pb-4 border-b border-surface-border">
                            <p className='ml-8'>Tax:</p>
                            <p className='font-semibold text-black ml-44'>$20</p>
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
                            <div className='rounded-md w-20 h-20 bg-green-800'></div>
                            <div className='ml-6 flex flex-col h-20 justify-between'>
                                <p className='text-black font-semibold'>Laptop Batteries</p>
                                <Rating />
                                <span className='font-semibold block'>$30</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className='rounded-md w-20 h-20 bg-green-800'></div>
                            <div className='ml-6 flex flex-col h-20 justify-between'>
                                <p className='text-black font-semibold'>Laptop Batteries</p>
                                <Rating />
                                <span className='font-semibold block'>$30</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className='rounded-md w-20 h-20 bg-green-800'></div>
                            <div className='ml-6 flex flex-col h-20 justify-between'>
                                <p className='text-black font-semibold'>Laptop Batteries</p>
                                <Rating />
                                <span className='font-semibold block'>$30</span>
                            </div>
                        </div>
                    </div>
                </TitleCard>
            </div>
        </div>
    )
}

export default invoice