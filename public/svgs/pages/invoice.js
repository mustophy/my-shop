import React from 'react'
import { SwitchBtn } from '@/components/ui/Switch'
import { IconCard } from '@/components/ui/IconCard'
import { FilledButton, OutlineButton } from '@/components/ui/Button'
import { Card } from '@/components/ui/Cards'

const invoice = () => {
    return (
        <section className='sm:grid grid-cols-7 gap-y-[30px] sm:gap-x-[30px] mb-10 '>
            <Card className="bg-[#282729] sm:col-span-5 shadow-shadow1 sm:px-[30px] py-[30px] border-0">
                <div className='flex justify-between mb-[53px]'>
                    <div>
                        <h2>Dipa Inhouse</h2>
                        <span>Hello@Dipainhouse.com</span>
                    </div>
                    <div className='flex flex-col'>
                        <span >Bake Boulevrad street 101</span>
                        <span className=' text-right'>Malang City, 65115</span>
                        <span className=' text-right'>East Java, Indonesia</span>
                    </div>
                </div>

                <Card className="flex bg-surface-background justify-between border-0">
                    <div>
                        <h2 >Invoice detail</h2>
                        <span className=''>#4581638</span>
                        <div className='flex flex-col sm:flex-row mt-5 mb-[10px] sm:space-x-5'>
                            <p className=''>Invoice date :</p>
                            <span>20 Nov, 2022</span>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:space-x-[35px]'>
                            <p className=''>Due date :</p>
                            <span>20 Dec, 2022</span>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-right mb-[10px]'>Bill to:</h2>
                        <h2 className='text-right mb-[10px]'>Adam ferry</h2>
                        <div className=' text-end'>
                            <span>280 Suzanne Throughway,</span><br />
                            <span>Breannabury, OR 45801,</span><br />
                            <span>United States</span>
                        </div>
                    </div>
                </Card>

                <div className='mt-[30px] mb-7'>
                    <h2 className=' mb-1'>Item Detail</h2>
                    <span>Type item for hours item</span>
                </div>

                <div className='rounded-lg  mb-[30px]'>
                    <div className='grid rounded-t-md grid-cols-4 inv-h4 bg-[#403F3F] px-5 py-6'>
                        <p className='text-white'>Item</p>
                        <p className='text-center text-white'>Quantity</p>
                        <p className='text-center text-white'>Rate</p>
                        <p className='text-center text-white'>Amount</p>
                    </div>
                    <div className='grid grid-cols-4 justify-between bg-surface-background px-5 py-6'>
                        <span>Iphone 13 pro</span>
                        <span className='text-center'>1</span>
                        <span className='text-center'>5</span>
                        <span className='text-center'>$250</span>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-y-[30px] justify-between'>
                    <div>
                        <div className='mb-[28px]'>
                            <div className='flex justify-between mb-[5px]'>
                                <h2 className='text-white'>Payment Method</h2>
                                <div className='flex items-center'>
                                    <span className='text-primary tracking-wider text-[15px]'>Visa</span>
                                    <div className='ml-4'>
                                        <img src="/assets/sidebar/ArrowDown.svg" className='stroke-primary stroke-2' alt="arrowDown" />
                                    </div>
                                </div>
                            </div>
                            <span className=''>Pay with your selected method</span>
                        </div>

                        <div className=' bg-surface-background sm:w-[340px] rounded-lg p-5 pb-6'>
                            <div className='flex justify-between mb-[17px]'>
                                <p className='text-white font-semibold'> Visa Transfer</p>
                                <img src="/assets/visa.svg" alt="visa" />
                            </div>
                            <div className='space-y-[10px]'>
                                <div className='flex space-x-[37px]'>
                                    <span className=''>AccountName :</span>
                                    <span className='text-white'>Mark Davidh</span>
                                </div>
                                <div className='flex space-x-[23px]'>
                                    <span className=''>Account Number:</span>
                                    <span className='text-white'>3700 1452 4587 2365</span>
                                </div>
                                <div className='flex space-x-[24px]'>
                                    <span className=''>Routing Number:</span>
                                    <span className='text-white'>854781456</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mr-9'>
                        <div className='pb-4 mb-4 border-b-2 px-5 border-[#F0EEEE]'>
                            <div className='flex space-x-[73px] mb-4'>
                                <p className=''>Subtotal:</p>
                                <span>$250</span>
                            </div>
                            <div className='flex justify-between w-full'>
                                <p className=''>Tax:</p>
                                <span>$50</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex font-[500] text-[14px] leading-[20px] text-primary justify-between px-5 w-full'>
                                <p className='text-primary'>Total:</p>
                                <p className='text-primary'>$300</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <div className='flex mt-[30px] sm:mt-0 flex-col col-span-2 gap-y-[30px]'>
                <Card className="bg-surface-gray border-0">
                    <div className='flex items-center justify-between mb-[28px]'>
                        <p className='text-white font-semibold text-xl'>Client Details</p>
                        <div className='flex flex-col space-y-[2px]'>
                            <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                            <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                            <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                        </div>
                    </div>
                    <div className='flex justify-between mb-[28px]'>
                        <div className='flex items-center'>
                            <img className='h-9 w-9 mr-[10px] rounded-[4px]' src='/images/user3.png'/>
                            <div>
                                <p className='text-white font-[500]'>Harry Joe</p>
                                <span className=''>Harry25Joe@gmail.com</span>
                            </div>
                        </div>
                        <IconCard className="bg-primary">
                            <img src="/assets/envelope.svg" className='make-white' alt="env" />
                        </IconCard>
                    </div>
                    <div className='mb-[18px]'>
                        <p className=''>Manchester city, Denmark</p>
                        <span className=''>9 Acacia Drive Rome, NY 13440, USA</span>
                    </div>
                    <OutlineButton className="w-full">Add Customer</OutlineButton>
                </Card>

                <Card className="border-0">
                    <div className='flex items-center justify-between mb-[27px] '>
                        <p className='text-white'>Amount Due <span>(USD)</span></p>
                        <div className='flex flex-col space-y-[2px]'>
                            <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                            <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                            <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                        </div>
                    </div>
                    <div className='flex items-center mb-[23px] space-x-[7px]'>
                        <h2 className="text-4xl text-primary">$3500.00</h2>
                        <span className=''>(Tax Incl.)</span>
                    </div>
                    <p className='mb-[27px]'>Due on Dec 25, 2022</p>
                    <div className='flex items-center justify-between'>
                        <p className='text-white'>Also attach pdf in mail</p>
                        <SwitchBtn selected={false} />
                    </div>
                </Card>

                <Card className="flex flex-col gap-y-[30px] pt-[40px] border-0">
                    <FilledButton className='w-full'>Send invoice</FilledButton>
                    <OutlineButton className='w-full'>Download</OutlineButton>
                    <div className='flex justify-between'>
                        <p className='hover:text-primary cursor-pointer transition-all duration-300'>Preview invoice</p>
                        <p className='hover:text-primary cursor-pointer transition-all duration-300'>Save invoice</p>
                    </div>
                </Card>
            </div>
        </section>
    )
}

export default invoice

{/* <SwitchBtn ballPosition="start" bgColor='green'/> */ }