import { Avatar } from "@/components/ui/Avatar"
import { ConnectionCard, TitleCard } from "@/components/ui/Cards"
import connectionData from "@/data/users.json"
const connections = () => {
    return (
        <div className='p-[30px]'>
            <div className="flex mb-[30px]">
                <Avatar src="/images/user.png" />
                <div className='ml-3'>
                    <p>Mark David</p>
                    <span>markdavid@gmail.com</span>
                </div>
                <div className="flex items-center ml-auto mb-[30px]">
                    <img src="/assets/sidebar/Calendar.svg" alt="" />
                    <p className='ml-3'>Join February, 2021</p>
                </div>
            </div>
            <TitleCard title="Connections" subtitle="Connect +">
                <div className="grid grid-cols-4 gap-[30px]">
                    {connectionData.map(user => (
                        <ConnectionCard user={user}/>
                    ))}
                </div>
            </TitleCard>
        </div>
    )
}

export default connections