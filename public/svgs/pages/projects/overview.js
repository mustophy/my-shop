import React from 'react'
import Data from '@/data/projects-overview.json'

const Overview = () => {
  return (
    <div>
      <div className='sm:flex justify-between'>
        <div className='flex items-center rounded-lg p-[15px] shadow-shadow2 bg-surface-gray sm:w-[28%] justify-between mb-6 sm:mb-0'>
          <div>
            <p className='font-bold'>Total Projects</p>
            <p className='text-primary font-bold'>65</p>
            <p className='text-[12.5px] text-red-600 flex gap-2' ><img src='/assets/projects/arrow.svg' alt='arr' /> Late in due</p>
          </div>
          <div>
            <img src='/assets/projects/chart1.svg' alt='' />
          </div>
        </div>
        <div className='sm:w-[70%] flex justify-between rounded-lg p-[15px] shadow-shadow2 bg-surface-gray'>
          <div className='sm:flex gap-1 sm:gap-6 items-center'>
            <div>
              <p className='font-bold'>To do</p>
              <p className='text-primary font-bold'>10</p>
              <p className='text-[12.5px]'>Month of August</p>
            </div>
            <div className='mt-3 sm:mt-0'>
              <img src='/assets/projects/chart2.svg' alt='' />
            </div>
          </div>
          <div className='sm:flex gap-1 sm:gap-6 items-center'>
            <div>
              <p className='font-bold'>In progress</p>
              <p className='text-primary font-bold'>15</p>
              <p className='text-[12.5px]'>Month of August</p>
            </div>
            <div className='mt-3 sm:mt-0'>
              <img src='/assets/projects/chart3.svg' alt='' />
            </div>
          </div>
          <div className='sm:flex gap-1 sm:gap-6 items-center'>
            <div>
              <p className='font-bold'>Completed</p>
              <p className='text-primary font-bold'>60</p>
              <p className='text-[12.5px]'>Month of August</p>
            </div>
            <div className='mt-3 sm:mt-0'>
              <img src='/assets/projects/chart4.svg' alt='' />
            </div>
          </div>
        </div>
      </div>


      <div className='rounded-lg p-[20px] shadow-shadow2 bg-surface-gray mt-6 mb-8'>
        <div className=' flex justify-between mb-5'>
          <div className='relative '>
            <svg className='absolute text-red-500 top-5 left-4' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.625 9H9.0325L8.8225 8.7975C9.58291 7.91552 10.0008 6.78952 10 5.625C10 4.66082 9.71409 3.71829 9.17842 2.9166C8.64275 2.11491 7.88137 1.49007 6.99058 1.12109C6.09979 0.752112 5.11959 0.655571 4.17394 0.843674C3.22828 1.03178 2.35964 1.49608 1.67786 2.17786C0.996076 2.85964 0.531777 3.72828 0.343674 4.67394C0.155571 5.61959 0.252112 6.59979 0.621089 7.49058C0.990067 8.38137 1.61491 9.14275 2.4166 9.67842C3.21829 10.2141 4.16082 10.5 5.125 10.5C6.3325 10.5 7.4425 10.0575 8.2975 9.3225L8.5 9.5325V10.125L12.25 13.8675L13.3675 12.75L9.625 9ZM5.125 9C3.2575 9 1.75 7.4925 1.75 5.625C1.75 3.7575 3.2575 2.25 5.125 2.25C6.9925 2.25 8.5 3.7575 8.5 5.625C8.5 7.4925 6.9925 9 5.125 9Z" fill="#727272" />
            </svg>
            <input type="text" className='py-[14px] w-full pl-12 pr-12 rounded-lg text-white bg-surface-background' placeholder='Search for user...' />
          </div>
          <div className='flex gap-2 items-center'>
            <img src="/assets/projects/filter.svg" alt="" />
            <p className='font-bold text-[13px]'>Apply Filter</p>
          </div>
        </div>
        <div className='rounded-lg  shadow-shadow2 bg-surface-gray'>
          <div className='flex p-[25px] bg-surface-background font-bold mb-[20px]'>
            <p className='text-[12.8px] sm:text-[15px] font-bold w-[20%] sm:w-[28%]'>Projects</p>
            <p className='text-[12.8px] sm:text-[15px] font-bold w-[10%] sm:w-[12%]'>Tasks</p>
            <p className='text-[12.8px] sm:text-[15px] font-bold w-[18%] sm:w-[15%]'>Members</p>
            <p className='text-[12.8px] sm:text-[15px] font-bold w-[17%] sm:w-[15%]'>Status</p>
            <p className='text-[12.8px] sm:text-[15px] font-bold w-[20%] sm:w-[15%]'>Completion</p>
            <p className='text-[12.8px] sm:text-[15px] font-bold w-[10%] sm:w-[15%]'>Files</p>
            <div />
          </div>

          <div className='p-[15px] pb-[.2px]'>
            {
              Data.map((project, index)=> (
                <div className='grid grid-cols-9 items-center mb-[40px]'>
                  <div className='sm:flex gap-2 col-span-3 items-center '>
                    <img src={`/assets/projects/avatar${project.avatar}.svg`} alt="" />
                    <div>
                      <p className=' text-white font-bold'>{project.title}</p>
                      <p className='text-[10px]'>{project.subtitle}</p>
                    </div>
                  </div>
                  <p className='pl-[15px]'>{project.tasks}</p>
                  <div className='flex relative mt-[-15px]'>
                    
                    { (project.members.length > 4) &&
                    <div>
                      <img className={`h-[20px] absolute left-[0px] `} src={`/assets/projects/mem${project.members[0]}.svg`} alt="" />
                      <img className={`h-[20px] absolute left-[15px] `} src={`/assets/projects/mem${project.members[1]}.svg`} alt="" />
                      <div className='h-[20px] text-[10px] flex items-center justify-center text-primary w-[20px] rounded-full absolute left-[30px] bg-surface-background'>+{project.members.length -2}</div>
                    </div>}  

                    {(project.members.length <= 4 && project.members.length > 0 ) && project.members.map( (mem, i)  =>(
                      <img key={i} className={`h-[20px] absolute left-[${(i +1) * 15}px] `} src={`/assets/projects/mem${mem}.svg`} alt="" />
                    ))}

                    {(project.members.length == 0) && <p className='text-[13px] mt-[15px]'>No Assignee</p> }

                  </div>
                  <div className='flex gap-[10px] items-center'>
                    {(project.status == "Completed") && <div className='h-[8px] w-[8px] bg-[#0AA699] rounded-full' />}
                    {(project.status == "To Do") && <div className='h-[8px] w-[8px] bg-[#B6E4E0] rounded-full' />}
                    {(project.status == "In progress") && <div className='h-[8px] w-[8px] bg-primary rounded-full' />}
                    <p className='text-[13px]'>{project.status}</p>
                  </div>
                  <div className=''>
                      <img className='max-w-[80%]' src={`/assets/projects/${project.completion}.svg`} alt="" />
                  </div>
                  <div className='flex gap-2 items-center'>
                    <img className='h-[16px]' src="/assets/projects/file.svg" alt="" />
                    <p className='text-[12px]'>{project.files}</p>
                  </div>
                  <div className=''>
                    <img src="/assets/projects/more.svg" alt="" />
                  </div>
                </div>
              ))
            }
          </div>

        </div>

        <div className='flex justify-between mt-[30px] mb-[15px] items-center'>
          <p className='text-[13px]'>Showing: 7 of 15</p>
          <div className='flex gap-4 justify-center items-center'>
            <p>Prev</p>
            <p className='bg-primary text-white h-[40px] w-[40px] rounded-full flex justify-center items-center'>1</p>
            <p className='bg-surface-background text-primary h-[40px] w-[40px] rounded-full flex justify-center items-center'>2</p>
            <p className='text-primary'>Next</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview