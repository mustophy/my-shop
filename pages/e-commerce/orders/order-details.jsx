import { Avatar } from "@/components/ui/Avatar"
import { Card, DotTitleCard, TitleCard } from "@/components/ui/Cards"
import { IconCard } from "@/components/ui/IconCard"
import { Rating } from "@/components/ui/Rating"
const OrdersDetails = () => {
    return (
        <div className="bg-surface-gray rounded-lg p-4 sm:p-[30px] flex flex-col gap-y-[30px]">
            <Card className="px-4 bg-surface-background border-0 sm:px-[30px]">
                <div className="flex mb-4">
                    <h2>Last Order detail</h2>
                    <div className="flex"></div>
                </div>
                <span className="mb-[6px] block font-[400]">Order no: <span className="pl-3 text-white font-semibold">#23456</span> </span>
                <span className="block font-[400]">Customer: <span className="pl-3 text-white font-semibold"> Henry</span></span>
                <div className="flex items-center mt-4">
                    <img src="/assets/sidebar/calendar.svg" alt="" />
                    <span className="ml-[10px] mr-[30px] font-[400]">20 Nov, 2022</span>
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="ml-[10px] mr-[30px] font-[400]">Paid</span>
                    <div className="h-3 w-3 rounded-full bg-secondary"></div>
                    <span className="ml-[10px] font-[400]">Fulfilled</span>
                    <img src="/assets/left-arrow.svg" className=" hidden sm:block ml-auto mr-7" alt="" />
                    <img src="/assets/right-arrow.svg" className="hidden sm:block" alt="" />
                </div>
            </Card>
            <div className="sm:grid grid-cols-3 gap-x-[30px]">
                <div className="col-span-2 flex flex-col gap-y-[30px]">
                    <TitleCard title="Order details" subtitle="Edit">
                        <div className="grid grid-cols-4 sm:grid-cols-2 items-center gap-y-[30px]">
                            {[1, 2, 3].map(entry => (
                                <>
                                    <div className="flex col-span-3 sm:col-span-1 items-center">
                                        <img src={`/images/product${entry }.png`} alt="" className="h-[70px] w-[70px] bg-secondary mr-[30px] rounded-md" />
                                        <div className="flex flex-col gap-y-[10px]">
                                            <p className="font-semibold text-white">Laptop Batteries</p>
                                            <Rating />
                                            <span>Nov 20, 2022</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-end gap-y-3 justify-between">
                                        <p className=" font-semibold">$20</p>
                                        <p className=" font-semibold">1</p>
                                        <p className=" font-semibold">$40</p>
                                    </div>
                                </>
                            ))}
                        </div>
                    </TitleCard>
                    <TitleCard title="Shipping activity" subtitle="Edit">
                        <span className="block -mt-6 mb-9">Tuesday, 20 Nov</span>
                        <div className="flex flex-col gap-y-6">
                            <div className="flex items-center">
                                <IconCard>
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                </IconCard>
                                <div className="ml-3">
                                    <p className=" font-semibold text-white">Delivery</p>
                                    <span>2:18pm</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <IconCard>
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                </IconCard>
                                <div className="ml-3">
                                    <p className=" font-semibold text-white">Out for delivery</p>
                                    <span>2:18pm</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <IconCard>
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                </IconCard>
                                <div className="ml-3">
                                    <p className=" font-semibold text-white">Package arrived at the final delivery station</p>
                                    <span>2:18pm</span>
                                </div>
                            </div>
                        </div>
                    </TitleCard>
                </div>
                <div className="flex flex-col gap-y-[30px]">
                    <TitleCard title="Customer" className="px-[20px]">
                        <div className="flex flex-col gap-y-[30px]">
                            <div className="flex items-center">
                                <Avatar src="/images/user.png" />
                                <p className="ml-3 font-semibold text-white">Harvey</p>
                                <img className="ml-auto" src="/assets/right-arrow.svg" alt="" />
                            </div>
                            <div className="flex items-center">
                                <IconCard>
                                    <svg className="" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0.65625C0 0.292578 0.260069 0 0.583333 0H1.68924C2.22396 0 2.69792 0.35 2.9191 0.875H12.9087C13.5479 0.875 14.0146 1.55859 13.8469 2.25312L12.8503 6.41758C12.6438 7.27617 11.951 7.875 11.1611 7.875H4.14896L4.28021 8.6543C4.33368 8.96328 4.57431 9.1875 4.85382 9.1875H11.8611C12.1844 9.1875 12.4444 9.48008 12.4444 9.84375C12.4444 10.2074 12.1844 10.5 11.8611 10.5H4.85382C4.01285 10.5 3.29097 9.82734 3.13542 8.90039L1.88125 1.49023C1.86424 1.38633 1.78403 1.3125 1.68924 1.3125H0.583333C0.260069 1.3125 0 1.01992 0 0.65625ZM3.11111 12.6875C3.11111 12.5151 3.14129 12.3445 3.19992 12.1852C3.25855 12.026 3.34448 11.8813 3.45282 11.7594C3.56115 11.6375 3.68977 11.5409 3.83131 11.4749C3.97286 11.4089 4.12457 11.375 4.27778 11.375C4.43099 11.375 4.5827 11.4089 4.72424 11.4749C4.86579 11.5409 4.9944 11.6375 5.10274 11.7594C5.21107 11.8813 5.29701 12.026 5.35564 12.1852C5.41427 12.3445 5.44444 12.5151 5.44444 12.6875C5.44444 12.8599 5.41427 13.0305 5.35564 13.1898C5.29701 13.349 5.21107 13.4937 5.10274 13.6156C4.9944 13.7375 4.86579 13.8341 4.72424 13.9001C4.5827 13.9661 4.43099 14 4.27778 14C4.12457 14 3.97286 13.9661 3.83131 13.9001C3.68977 13.8341 3.56115 13.7375 3.45282 13.6156C3.34448 13.4937 3.25855 13.349 3.19992 13.1898C3.14129 13.0305 3.11111 12.8599 3.11111 12.6875ZM11.2778 11.375C11.5872 11.375 11.8839 11.5133 12.1027 11.7594C12.3215 12.0056 12.4444 12.3394 12.4444 12.6875C12.4444 13.0356 12.3215 13.3694 12.1027 13.6156C11.8839 13.8617 11.5872 14 11.2778 14C10.9684 14 10.6716 13.8617 10.4528 13.6156C10.234 13.3694 10.1111 13.0356 10.1111 12.6875C10.1111 12.3394 10.234 12.0056 10.4528 11.7594C10.6716 11.5133 10.9684 11.375 11.2778 11.375Z" fill="#E8565B" />
                                    </svg>
                                </IconCard>
                                <p className="ml-3 font-semibold text-white">Orders</p>
                                <img className="ml-auto" src="/assets/right-arrow.svg" alt="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold mb-1 text-white">Contact info</p>
                                    <span>herv@gmail.com</span>
                                </div>
                                <span className="text-primary font-semibold">Edit</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold mb-1 text-white">Shipping Address </p>
                                    <span>Berlin, Germany</span>
                                </div>
                                <span className="text-primary font-semibold">Edit</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold mb-1 text-white">Billing Address</p>
                                    <span>Berlin, Germany</span>
                                </div>
                                <span className="text-primary font-semibold">Edit</span>
                            </div>
                        </div>
                    </TitleCard>
                    <DotTitleCard title="Profit Increase">
                    </DotTitleCard>
                </div>
            </div>
        </div>
    )
}

export default OrdersDetails