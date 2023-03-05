import { OutlineButton } from '@/components/ui/Button'
import { Card, TitleCard } from '@/components/ui/Cards'
import { FileInput } from '@/components/ui/FileInput'
import { Rating } from '@/components/ui/Rating'
import { SelectInput } from '@/components/ui/SelectInput'
import { TextInput } from '@/components/ui/TextInput'
import React from 'react'

const ProductDetails = () => {
  return (
    <section className='bg-white py-[30px] px-[20px] rounded-lg '>
        <Card className='flex justify-between items-center mb-[30px] '>
            <div className='space-y-[18px]'>
                <p>Products/<span className='text-primary'>Products details</span></p>
                <h2>Tiro track jacket</h2>
                <div className='flex space-x-5'>
                    <div className='flex space-x-[10px]'>
                        <div className='h-[18px] w-[18px]'>
                            <img src="/assets/duplicate.svg" alt="duplicate" />
                        </div>
                        <span>Duplicate</span>
                    </div>
                    <div className='flex space-x-[10px]'>
                        <div className='h-[18px] w-[18px]'>
                            <img src="/assets/eye.svg" alt="eye" />
                        </div>
                        <span>Duplicate</span>
                    </div>
                </div>
            </div>

            <div className='flex space-x-[30px] mr-[20px]'>
                <div className='h-[14px] w-[7px]'>
                    <img src="/assets/left-arrow.svg" alt="left" />
                </div>
                <div className='h-[14px] w-[7px] '>
                    <img src="/assets/right-arrow.svg" alt="right" />
                </div>
            </div>
        </Card>

        <div className='grid gap-x-[35px]'>
            <div className=''>
                <div className='mb-[30px]'>
                    <TitleCard title='Product information' className='border'>
                        <div>
                            <div className='grid sm:grid-cols-2 gap-x-2'>
                                <TextInput label="Name" placeholder="Malik Ali" />
                                <TextInput label="SKU" placeholder="1252790" />
                            </div>
                            <p className='mt-5 mb-4'>Description<span>(Optional)</span></p>
                            <div className=''>
                                <div className='py-6 px-[30px] space-x-[30px] flex items-center border rounded-t-lg'>
                                    <img src="/assets/letter-b.svg" alt="b" />
                                    <img src="/assets/letter-i.svg" alt="b" />
                                    <img src="/assets/letter-u.svg" alt="b" />
                                </div>
                                <div className='border-b border-x border-surface-border px-[30px] pt-[30px] pb-[25px] rounded-b-lg '>
                                    <p>Train hard. Stay dry. This soccer jacket is made of soft, sweat-wicking fabric that keeps <br /> 
                                    you moving on the practice field. Stretch panels at the elbows and sides give you a full <br /> 
                                    range of motion as you work.
                                    </p>
                                    <h2 className='my-3'>Product information</h2>
                                    <ul className=''>
                                        <li className="flex items-center space-x-[7px] mb-3">
                                            <div className='h-[5px] w-[5px] bg-[#727272] rounded-[50%] '></div>
                                            <p>Regular fit is wider at the body, with a straight silhouette</p>
                                        </li>
                                        <li className="flex items-center space-x-[7px] mb-3">
                                            <div className='h-[5px] w-[5px] bg-[#727272] rounded-[50%] '></div>
                                            <p>Ribbed stand-up collar</p>
                                        </li>
                                        <li className="flex items-center space-x-[7px] mb-3">
                                            <div className='h-[5px] w-[5px] bg-[#727272] rounded-[50%] '></div>
                                            <p>Long sleeves with ribbed cuffs</p>
                                        </li>
                                        <li className="flex items-center space-x-[7px]">
                                            <div className='h-[5px] w-[5px] bg-[#727272] rounded-[50%] '></div>
                                            <p>100% polyester doubleknit</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TitleCard>
                </div>

                <div className='mb-[30px]'>
                    <TitleCard title="Media" subtitle="Add media from URL" className="border ">
                        <div className='flex justify-between mb-[25px] '>
                            {[1,2,3,4].map(each => (
                                <div key={each} className="w-[167px] h-[210px] bg-[#2E1919] rounded-lg relative ">
                                    <div className='absolute right-[18px] bottom-[18px] flex justify-center items-center w-8 h-8 rounded-[50%] bg-white '>
                                        <img src="/assets/delete.svg" alt="delete" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <FileInput />
                    </TitleCard>
                </div>

                <TitleCard title="Variants" className="border">
                    <div className='space-y-[35px]'>
                        {[1,2,3,4,5].map(each => (
                            <div key={each} className="flex items-center justify-between">
                                <img src="/images/user1.png" alt="" />
                                <p className='border border-[#DDE2E8] rounded-[4px] p-5 text-[13px] leading-[16px] '>M</p>
                                <p className='border border-[#DDE2E8] rounded-[4px] py-5 px-[55px] text-[13px] leading-[16px] '>White</p>
                                <p className='border border-[#DDE2E8] rounded-[4px] py-5 px-[40px] text-[13px] leading-[16px] '>
                                    USD <span className='text-balck font-medium'>55:00</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </TitleCard>
            </div>

            <div className=''>
                <div className='mb-[30px]'>
                    <TitleCard title="Pricing" className="border">
                        <div className='border-b border-[#DDE2E8] pb-4 mb-4'>
                            <SelectInput label="Price" placeholder='55:00'></SelectInput>
                            <div className='flex space-x-[10px] mt-5 mb-4 '>
                                <img src="/assets/star.svg" alt="star" />
                                <p className='text-[13px] leading-4 text-primary'>Ser'' Compare to'' Price</p>
                            </div>
                            <div className='flex space-x-[10px]'>
                                <img src="/assets/star.svg" alt="star" />
                                <p className='text-[13px] leading-4 text-primary '>Bulk discount pricing</p>
                            </div>
                        </div>
                        <p>Availibity : Yes</p>
                    </TitleCard>
                </div>

                <TitleCard title="Organization" className="border">
                    <SelectInput label="Vendor" placeholder='Adidas' className="mb-[30px]"></SelectInput>
                    <SelectInput label="Category" placeholder='Clothing' className="mb-[30px]"></SelectInput>
                    <SelectInput label="Collection" placeholder='Summer' className=""></SelectInput>
                    <p className='mb-[30px] text-[12px]'>Add this product to a collection so it easy to find in your store</p>
                    <TextInput label="Tags" placeholder="Enter tags here" />
                </TitleCard>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails