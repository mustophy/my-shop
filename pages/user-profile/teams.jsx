import { Avatar } from '@/components/ui/Avatar'
import { Card, ProjectCard, ProjectSectionCard, TeamCard, TitleCard } from '@/components/ui/Cards'
import { Rating } from '@/components/ui/Rating'
import projectData from '@/data/projects.json'

const teams = () => {
  console.log('hey', projectData)
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
      <TitleCard title="Teams" subtitle="Connect +">
        <div className="grid grid-cols-3 gap-[15px]">
            {[0,1,2,3].map(team => (
                <TeamCard />
            ))}
        </div>
      </TitleCard>
    </div>
  )
}

export default teams