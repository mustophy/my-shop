
const orders = () => {
    return (
        <div className="h-full flex flex-col bg-surface-gray shadow-shadow1">
            <div className="grid grid-cols-3 sm:grid-cols-6 p-4 sm:p-[30px] bg-surface-background">
                <div className="grid sm:grid-cols-2 sm:col-span-2">
                    <p className=" text-xl font-semibold">Order</p>
                    <p className=" text-xl font-semibold">Date</p>
                </div>
                <div className="grid sm:grid-cols-2 justify-center sm:col-span-2">
                    <p className=" text-xl font-semibold">Customer</p>
                    <p className=" text-xl font-semibold">Status</p>
                </div>
                <p className=" text-xl font-semibold hidden sm:block">Payment</p>
                <p className=" text-xl font-semibold text-right sm:text-left">Action</p>
            </div>
            <div className="grid gap-y-[60px] px-4 sm:px-[30px] pt-6 flex-1 overflow-auto">
                {[0, 0, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4].map(order => (
                    <div className="grid grid-cols-3 sm:grid-cols-6">
                        <div className="grid sm:grid-cols-2 sm:col-span-2">
                            <span>#23456</span>
                            <span>Nov 20, 2022</span>
                        </div>
                        <div className="grid sm:grid-cols-2 sm:col-span-2 justify-center">
                            <span>Jase Marley</span>
                            <div className="flex items-center">
                                <div className="h-3 w-3 bg-secondary rounded-full"></div>
                                <span className="ml-2">Complete</span>
                            </div>
                        </div>
                        <img className="hidden sm:block" src="/images/mastercard.png" alt="" />
                        <span className="text-secondary text-right sm:text-left">View detail</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default orders