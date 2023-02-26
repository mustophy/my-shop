import React from 'react'
import { SwitchBtn } from '@/components/ui/Switch'
import { IconCard } from '@/components/ui/IconCard'
import { FilledButton, OutlineButton } from '@/components/ui/Button'

const invoice = () => {
  return (
    <section className='grid inv-grid gap-x-8 mr-10 mb-10'>
        <div className='rounded-lg p-[30px] shadow-shadow1 bg-white'>
            <div className='flex justify-between mb-[53px]'>
                <div>
                    <h3 className='font-[500] text-[22px] leading-[28px] mb-[10px]'>Dipa Inhouse</h3>
                    <p className='sm-grey-text'>Hello@Dipainhouse.com</p>
                </div>
                <div className='space-y-1'>
                    <p className='sm-grey-text'>Bake Boulevrad street 101</p>
                    <p className='sm-grey-text text-right'>Malang City, 65115</p>
                    <p className='sm-grey-text text-right'>East Java, Indonesia</p>
                </div>
            </div>

            <div className='border-2 shadow-shadow1 rounded-lg flex justify-between px-5 py-7 mb-[30px]'>
                <div>
                    <h3 className='font-[500] text-[22px] leading-[28px] mb-[10px]'>Invoice detail</h3>
                    <span className='sm-grey-text'>#4581638</span>
                    <div className='flex mt-5 mb-[10px] space-x-5'>
                        <p className='sm-grey-text'>Invoice date :</p>
                        <span>20 Nov, 2022</span>
                    </div>
                    <div className='flex space-x-[35px]'>
                        <p className='sm-grey-text'>Due date :</p>
                        <span>20 Dec, 2022</span>
                    </div>
                </div>
                <div>
                    <h4 className='inv-h4 text-right mb-[10px]'>Bill to:</h4>
                    <h4 className='inv-h4 text-right mb-[10px]'>Adam ferry</h4>
                    <div className='sm-grey-text text-end'>
                        <span>280 Suzanne Throughway,</span><br />
                        <span>Breannabury, OR 45801,</span><br />
                        <span>United States</span>
                    </div>
                </div>
            </div>

            <div className='mb-[27px]'>
                <h4 className='inv-h4 mb-1'>Item Detail</h4>
                <p className='sm-grey-text'>Type item for hours item</p>
            </div>

            <div className='border-2 rounded-lg shadow-shadow1 mb-[30px]'>
                <div className='grid grid-cols-4 inv-h4 border-b-2 bg-[#F7F7F7] px-5 py-6'>
                    <p>Item</p>
                    <p className='text-center'>Quantity</p>
                    <p className='text-center'>Rate</p>
                    <p className='text-center'>Amount</p>
                </div>
                <div className='grid grid-cols-4 justify-between sm-grey-text px-5 py-6'>
                    <p>iphone 13 pro</p>
                    <p className='text-center'>1</p>
                    <p className='text-center'>5</p>
                    <p className='text-center'>$250</p>
                </div>
            </div>

            <div className='flex justify-between'>
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
                        <p className='sm-grey-text'>Pay with your selected method</p>
                    </div>

                    <div className='shadow-shadow1 bg-[#F7F7F7] w-[340px] rounded-lg p-5 pb-6'>
                        <div className='flex justify-between mb-[17px]'>
                            <h4 className='inv-h4'> Visa Transfer</h4>
                            <img src="/assets/visa.svg" alt="visa" />
                        </div>
                        <div className='space-y-[10px]'>
                            <div className='flex space-x-[37px]'>
                                <p className='sm-grey-text'>AccountName :</p>
                                <span>Mark Davidh</span>
                            </div>
                            <div className='flex space-x-[23px]'>
                                <p className='sm-grey-text'>Account Number:</p>
                                <span>3700 1452 4587 2365</span>
                            </div>
                            <div className='flex space-x-[24px]'>
                                <p className='sm-grey-text'>Routing Number:</p>
                                <span>854781456</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mr-9'>
                    <div className='pb-4 mb-4 border-b-2 px-5 border-[#F0EEEE]'>
                        <div className='flex space-x-[73px] mb-4'>
                            <p className='sm-grey-text'>Subtotal:</p>
                            <span>$250</span>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p className='sm-grey-text'>Tax:</p>
                            <span>$50</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex font-[500] text-[14px] leading-[20px] text-primary justify-between px-5 w-full'>
                            <span>Total:</span>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-between items-center'>
            <div className='p-5 py-7 shadow-shadow1 bg-[#FFFFFF] mb-[30px] w-full rounded-[8px]'>
                <div className='flex items-center justify-between mb-[28px]'>
                    <h4 className='inv-h4'>Client Details</h4>
                    <div className='flex flex-col space-y-[2px]'>
                        <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                        <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                        <span className='h-[3px] w-[3px] rounded-[100%] bg-[#2D2D2D]'></span>
                    </div>
                </div>
                <div className='flex justify-between mb-[28px]'>
                    <div className='flex items-center'>
                        <div className='h-9 w-9 mr-[10px] rounded-[4px] bg-blue-400'>
                        </div>
                        <div>
                            <h5>Harry Joe</h5>
                            <p className='sm-grey-text'>Harry25Joe@gmail.com</p>
                        </div>
                    </div>
                    <IconCard className="bg-primary">
                        <img src="/assets/envelope.svg" alt="env" />
                    </IconCard>
                </div>
                <div className='mb-[18px]'>
                    <h4 className='inv-h4 mb-[5px]'>Manchester city, Denmark</h4>
                    <p className='sm-grey-text'>9 Acacia Drive Rome, NY 13440, USA</p>
                </div>
                <OutlineButton className="w-full mb-[10px] text-primary border-primary">Add Customer</OutlineButton>
            </div>

            <div className='p-5 py-7 shadow-shadow1 bg-white mb-[30px] w-full rounded-[8px]'>
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
                    <SwitchBtn selected={false}/>
                </div>
            </div>

            <div className='shadow-shadow1 bg-white rounded-[8px] w-full px-5 py-[43px] space-y-[33px]'>
                <FilledButton className='w-full bg-primary'>Send invoice</FilledButton>
                <OutlineButton className='w-full text-primary border-primary '>Download</OutlineButton>
                <div className='flex justify-between mb-[6px]'>
                    <p>Preview invoice</p>
                    <p>Save invoice</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default invoice

{/* <SwitchBtn ballPosition="start" bgColor='green'/> */}