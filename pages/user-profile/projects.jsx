import { Avatar } from '@/components/ui/Avatar'
import { ProjectCard, ProjectSectionCard, TitleCard } from '@/components/ui/Cards'
import projectData from '@/data/projects.json'

const projects = () => {
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
      <TitleCard title="Projects" subtitle="Connect +">
        <div className="grid grid-cols-3 gap-x-[30px]">
          <ProjectSectionCard title="To Do Tasks">
            <div className="grid gap-y-5 mt-5">
              {projectData.map(project => (
                <ProjectCard project={project} />
              ))}
            </div>
          </ProjectSectionCard>
          <ProjectSectionCard title="In Progress">
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
          <ProjectSectionCard title="Completed">
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