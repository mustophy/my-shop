import { Avatar } from '@/components/ui/Avatar'
import { ProjectCard, ProjectSectionCard, TitleCard } from '@/components/ui/Cards'
import projectData from '@/data/projects.json'

const projects = () => {
  return (
    <div className=' p-5 sm:p-[30px] bg-surface-gray'>
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
      <TitleCard title="Projects" subtitle="Connect +">
        <div className="grid sm:grid-cols-3 gap-[30px]">
          <ProjectSectionCard title="To Do Tasks" outline={true} outlineColor="#E95F8B">
            <div className="grid gap-y-5 mt-5">
              {projectData.map(project => (
                <ProjectCard project={project} />
              ))}
            </div>
          </ProjectSectionCard>
          <ProjectSectionCard title="In Progress" outline={true} outlineColor='#FB1DF2'>
            <div className="grid gap-y-5 mt-5">
              {projectData.map((project, index) => (
                <>
                  {index % 5 == 0 &&
                    <ProjectCard project={project} />
                  }
                </>
              ))}
            </div>
          </ProjectSectionCard>
          <ProjectSectionCard title="Completed" outline={true} outlineColor="#F6B445">
            <div className="grid gap-y-5 mt-5">
              {projectData.map((project, index) => (
                <>
                  {index % 3 === 0 &&
                    <ProjectCard project={project} />
                  }
                </>
              ))}
            </div>
          </ProjectSectionCard>
        </div>
      </TitleCard>
    </div>
  )
}

export default projects