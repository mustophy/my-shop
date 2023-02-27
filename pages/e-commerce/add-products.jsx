import { OutlineButton } from "@/components/ui/Button"
import { Card, TitleCard } from "@/components/ui/Cards"
import { IconCard } from "@/components/ui/IconCard"
import { SelectInput } from "@/components/ui/SelectInput"
import { TextInput } from "@/components/ui/TextInput"
const AddProducts = () => {
    return (
        <div className='p-[30px] rounded-lg'>
            <Card>
                <p>Products / <span className="text-primary">Add products</span></p>
                <div className="flex justify-between items-center">
                    <h2 className="mt-[18px] text-3xl">Tiro track jacket</h2>
                    <svg width="56" height="18" viewBox="0 0 56 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.45459 8.20566C1.01514 8.64512 1.01514 9.35879 1.45459 9.79824L7.07959 15.4232C7.51904 15.8627 8.23271 15.8627 8.67217 15.4232C9.11162 14.9838 9.11162 14.2701 8.67217 13.8307L3.8417 9.0002L8.66865 4.16973C9.10811 3.73027 9.10811 3.0166 8.66865 2.57715C8.2292 2.1377 7.51553 2.1377 7.07607 2.57715L1.45107 8.20215L1.45459 8.20566Z" fill="#B5B5B5" />
                        <path d="M47.7952 8.20566C48.2347 8.64512 48.2347 9.35879 47.7952 9.79824L42.1702 15.4232C41.7308 15.8627 41.0171 15.8627 40.5776 15.4232C40.1382 14.9838 40.1382 14.2701 40.5776 13.8307L45.4081 9.0002L40.5812 4.16973C40.1417 3.73027 40.1417 3.0166 40.5812 2.57715C41.0206 2.1377 41.7343 2.1377 42.1737 2.57715L47.7987 8.20215L47.7952 8.20566Z" fill="#B5B5B5" />
                    </svg>
                </div>
                <div className="flex items-center mt-5">
                    <img src="/assets/sidebar/calendar.svg" alt="" />
                    <p className="ml-3 mr-6">Duplicate</p>
                    <img src="/assets/eye.svg" alt="" />
                    <p className="ml-3">Preview</p>
                </div>
            </Card>
            <div className="mt-[30px] grid grid-cols-3 gap-x-[35px]">
                <div className="col-span-2 grid gap-y-[30px]">
                    <TitleCard title="Product Information">
                        <div className="grid grid-cols-2 gap-x-4">
                            <TextInput label="Name" />
                            <TextInput label="SKU" />
                        </div>
                    </TitleCard>
                    <TitleCard title="Media" subtitle="Add Media From URL">
                        <div className="h-[225px] flex flex-col items-center justify-center bg-surface-accent rounded-lg">
                            <p className="mb-5">Drag and drop your file here</p>
                            <OutlineButton>Browse Files</OutlineButton>
                        </div>
                    </TitleCard>
                    <TitleCard title="Variants">
                        <div className="flex gap-x-4">
                            <IconCard>
                                <img src="/assets/camera.svg" alt="" />
                            </IconCard>
                            <div className="flex-1 grid grid-cols-3 gap-x-4">
                                <TextInput placeholder="Enter size" />
                            </div>
                        </div>
                    </TitleCard>
                </div>
                <div className=" flex flex-col gap-y-[30px]">
                    <TitleCard title="Pricing" className="px-6 py-4">
                        <TextInput label="Price" className="-mt-4"/>
                        <div className="flex flex-col gap-y-4 mt-5">
                            <div className="flex gap-x-4">
                                <img src="/assets/star.svg" alt="" />
                                <span>Ser" Compare to" Price</span>
                            </div>
                            <div className="flex gap-x-4">
                                <img src="/assets/star.svg" alt="" />
                                <span>Bulk discount Pricing</span>
                            </div>
                        </div>
                        <p className="text-black font-semibold pt-4 border-t mt-6">Availability: Yes</p>
                    </TitleCard>
                    <TitleCard title="Organization" className="px-6 py-4">
                        <TextInput label="Vendor" className="-mt-4"/>
                        <SelectInput className="mt-[30px]" label="Category" placeholder="Clothing">
                            <option value="Clothing">Clothing</option>
                            <option value="Accessories">Accessories</option>
                        </SelectInput>
                        <SelectInput className="mt-[30px]" label="Collection" placeholder="Summer">
                            <option value="Winter">Winter</option>
                            <option value="Autumnn">Autumnn</option>
                        </SelectInput>
                        <span className="mt-[7px] block font-[500]">Add this product to a collection so it is easy to find</span>
                        <TextInput className="mt-10" label="Tags" placeholder="Enter tags here" />
                    </TitleCard>
                </div>
            </div>
        </div>
    )
}

export default AddProducts