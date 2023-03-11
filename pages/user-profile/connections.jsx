import { Avatar } from "@/components/ui/Avatar"
import { ConnectionCard, TitleCard } from "@/components/ui/Cards"
import connectionData from "@/data/users.json"
const connections = () => {
    return (
        <div className=' p-5 sm:p-[30px] bg-surface-gray'>
            <div className="sm:flex mb-[30px]">
                <div className="flex">
                <Avatar src="/images/user.png" />
                <div className='ml-3'>
                    <p className="font-semibold text-white">Mark David</p>
                    <span>markdavid@gmail.com</span>
                </div>
                </div>
                <div className="hidden sm:flex items-center ml-auto mb-[30px] mt-3 sm:mt-0">
                    <img src="/assets/sidebar/Calendar.svg" className="hidden sm:block" alt="" />
                    <p className='ml-[50px] sm:ml-3'>Join February, 2021</p>
                </div>
            </div>
            <TitleCard title="Connections" subtitle="Connect +">
                <div className="grid sm:grid-cols-4 px-4 gap-[30px] ">
                    {connectionData.map(user => (
                        <ConnectionCard user={user}/>
                    ))}
                </div>
            </TitleCard>
        </div>
    )
}

export default connections