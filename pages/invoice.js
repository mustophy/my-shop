import React from 'react'
import { SwitchBtn } from '@/components/ui/Switch'
import { IconCard } from '@/components/ui/IconCard'
import { FilledButton, OutlineButton } from '@/components/ui/Button'
import { Card } from '@/components/ui/Cards'

const invoice = () => {
    return (
        <section className='sm:grid grid-cols-7 gap-y-[30px] sm:gap-x-[30px] mb-10 '>
            <Card className="bg-white sm:col-span-5 shadow-shadow1 sm:px-[30px] py-[30px]">
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

                <Card className="flex justify-between">
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

                <div className='border-2 rounded-lg  mb-[30px]'>
                    <div className='grid grid-cols-4 inv-h4 border-b-2 bg-surface-background px-5 py-6'>
                        <p className='text-text-black'>Item</p>
                        <p className='text-center text-text-black'>Quantity</p>
                        <p className='text-center text-text-black'>Rate</p>
                        <p className='text-center text-text-black'>Amount</p>
                    </div>
                    <div className='grid grid-cols-4 justify-between  px-5 py-6'>
                        <span>iphone 13 pro</span>
                        <span className='text-center'>1</span>
                        <span className='text-center'>5</span>
                        <span className='text-center'>$250</span>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-y-[30px] justify-between'>
                    <div>
                        <div className='mb-[28px]'>
                            <div className='flex justify-between'>
                                <h4 className='inv-h4'>Payment Method</h4>
                                <div className='flex items-center'>
                                    <span className='text-primary'>Visa</span>
                                    <div className='ml-4'>
                                        <img src="/assets/sidebar/ArrowDown.svg" alt="arrowDown" />
                                    </div>
                                </div>
                            </div>
                            <p className=''>Pay with your selected method</p>
                        </div>

                        <div className=' bg-[#F7F7F7] sm:w-[340px] rounded-lg p-5 pb-6'>
                            <div className='flex justify-between mb-[17px]'>
                                <p className='text-text-black font-semibold'> Visa Transfer</p>
                                <img src="/assets/visa.svg" alt="visa" />
                            </div>
                            <div className='space-y-[10px]'>
                                <div className='flex space-x-[37px]'>
                                    <p className=''>AccountName :</p>
                                    <span>Mark Davidh</span>
                                </div>
                                <div className='flex space-x-[23px]'>
                                    <p className=''>Account Number:</p>
                                    <span>3700 1452 4587 2365</span>
                                </div>
                                <div className='flex space-x-[24px]'>
                                    <p className=''>Routing Number:</p>
                                    <span>854781456</span>
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
                <Card>
                    <div className='flex items-center justify-between mb-[28px]'>
                        <p className='text-text-black'>Client Details</p>
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
                                <p className='text-text-black'>Harry Joe</p>
                                <span className=''>Harry25Joe@gmail.com</span>
                            </div>
                        </div>
                        <IconCard className="bg-primary">
                            <img src="/assets/envelope.svg" className='make-white' alt="env" />
                        </IconCard>
                    </div>
                    <div className='mb-[18px]'>
                        <p className='text-text-black'>Manchester city, Denmark</p>
                        <span className=''>9 Acacia Drive Rome, NY 13440, USA</span>
                    </div>
                    <OutlineButton className="w-full">Add Customer</OutlineButton>
                </Card>

                <Card className="bg-white">
                    <div className='flex items-center justify-between mb-[27px] '>
                        <h4 className='inv-h4'>Amount Due <span>(USD)</span></h4>
                        <div className='flex flex-col space-y-[2px]'>
                            <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                            <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                            <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                        </div>
                    </div>
                    <div className='flex items-center mb-[23px] space-x-[7px]'>
                        <h1 className='font-[700] text-[32px] leading-[45px]'>$3500.00</h1>
                        <span className='font-[500] text-[16px] leading-[34px]'>(Tax Lncl.)</span>
                    </div>
                    <p className='mb-[27px]'>Due on Dec 25, 2022</p>
                    <div className='flex items-center justify-between'>
                        <h4 className='inv-h4'>Also attach pdf in mail</h4>
                        <SwitchBtn selected={false} />
                    </div>
                </Card>

                <Card className="flex flex-col gap-y-[30px] pt-[40px]">
                    <FilledButton className='w-full'>Send invoice</FilledButton>
                    <OutlineButton className='w-full'>Download</OutlineButton>
                    <div className='flex justify-between'>
                        <p className='text-primary'>Preview invoice</p>
                        <p className='text-primary'>Save invoice</p>
                    </div>
                </Card>
            </div>
        </section>
    )
}

export default invoice

{/* <SwitchBtn ballPosition="start" bgColor='green'/> */ }