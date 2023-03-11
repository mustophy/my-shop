import { Avatar } from '@/components/ui/Avatar'
import { Card, ProjectCard, ProjectSectionCard, TeamCard, TitleCard } from '@/components/ui/Cards'
import { Rating } from '@/components/ui/Rating'
import projectData from '@/data/projects.json'

const teams = () => {
  console.log('hey', projectData)
  return (
    <div className='p-3 sm:p-[30px] bg-surface-gray'>
      <div className="flex mb-[30px]">
        <Avatar src="/images/user.png" />
        <div className='ml-3'>
          <p className='text-white font-semibold'>Mark David</p>
          <span>markdavid@gmail.com</span>
        </div>
        <div className="hidden sm:flex items-center ml-auto mb-[30px]">
          <img src="/assets/sidebar/Calendar.svg" alt="" />
          <p className='ml-3'>Join February, 2021</p>
        </div>
      </div>
      <TitleCard title="Teams" subtitle="Connect +">
        <div className="grid sm:grid-cols-3 gap-[15px]">
            {[0,1,2,3].map(team => (
                <TeamCard />
            ))}
        </div>
      </TitleCard>
    </div>
  )
}

export default teams