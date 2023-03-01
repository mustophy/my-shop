
const orders = () => {
    return (
        <div className="h-full flex flex-col bg-white shadow-shadow1">
            <div className="grid grid-cols-6 p-[30px] bg-surface-accent">
                <p className="text-black text-xl font-semibold">Order</p>
                <p className="text-black text-xl font-semibold">Date</p>
                <p className="text-black text-xl font-semibold">Customer</p>
                <p className="text-black text-xl font-semibold">Status</p>
                <p className="text-black text-xl font-semibold">Payment</p>
                <p className="text-black text-xl font-semibold">Action</p>
            </div>
            <div className="grid gap-y-[60px] px-[30px] pt-6 flex-1 overflow-auto">
                {[0, 0, 1, 2, 3, 4,4,4,4,4,4,4,4].map(order => (
                    <div className="grid grid-cols-6">
                        <p>#23456</p>
                        <p>Nov 20, 2022</p>
                        <p>Jase Marley</p>
                        <div className="flex items-center">
                            <div className="h-3 w-3 bg-secondary rounded-full"></div>
                            <p className="ml-2">Complete</p>
                        </div>
                        <img src="/images/mastercard.png" alt="" />
                        <p className="text-secondary">View detail</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default orders