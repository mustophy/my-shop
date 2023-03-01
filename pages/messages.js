import { Avatar } from '@/components/ui/Avatar'
import { ChatCard, MessageCard } from '@/components/ui/Cards'
import { IconCard } from '@/components/ui/IconCard'
import React from 'react'

const messages = () => {
  return (
    <div className="p-[30px] rounded-lg flex gap-x-10 bg-white border-surface-border">
      <div className="w-[300px]">
        <div className="flex justify-between items-center">
          <h2>New Message</h2>
        </div>
        <div className='relative mt-7'>
          <svg className='absolute text-red-500 top-5 left-4' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.625 9H9.0325L8.8225 8.7975C9.58291 7.91552 10.0008 6.78952 10 5.625C10 4.66082 9.71409 3.71829 9.17842 2.9166C8.64275 2.11491 7.88137 1.49007 6.99058 1.12109C6.09979 0.752112 5.11959 0.655571 4.17394 0.843674C3.22828 1.03178 2.35964 1.49608 1.67786 2.17786C0.996076 2.85964 0.531777 3.72828 0.343674 4.67394C0.155571 5.61959 0.252112 6.59979 0.621089 7.49058C0.990067 8.38137 1.61491 9.14275 2.4166 9.67842C3.21829 10.2141 4.16082 10.5 5.125 10.5C6.3325 10.5 7.4425 10.0575 8.2975 9.3225L8.5 9.5325V10.125L12.25 13.8675L13.3675 12.75L9.625 9ZM5.125 9C3.2575 9 1.75 7.4925 1.75 5.625C1.75 3.7575 3.2575 2.25 5.125 2.25C6.9925 2.25 8.5 3.7575 8.5 5.625C8.5 7.4925 6.9925 9 5.125 9Z" fill="#727272" />
          </svg>
          <input type="text" className='py-[14px] w-full pl-12 border border-surface-border pr-6 rounded-lg bg-surface-background' placeholder='Search chat' />
        </div>
        <div className="flex items-center mt-11 border-surface-border gap-x-4">
          <img className="" src="/assets/pin.svg" alt="" />
          <span className="text-primary">PINNED</span>
        </div>
        <div className="flex flex-col gap-y-7 mt-[30px]">
          {[0, 1, 1].map(contact => (
            <ChatCard />
          ))}
        </div>
        <div className="flex items-center mt-11 border-surface-border gap-x-4">
          <img className="" src="/assets/sidebar/Messages.svg" alt="" />
          <span className="text-primary">ALL MESSAGES</span>
        </div>
        <div className="flex flex-col gap-y-7 mt-[30px]">
          {[0, 1, 1].map(contact => (
            <ChatCard />
          ))}
        </div>
      </div>
      <div className="flex-1 rounded-lg shadow-shadow1">
        <div className="px-[30px] pt-6 pb-5 flex bg-surface-background">
          <Avatar src="images/user.png" />
          <div className="ml-3">
            <p className="font-semibold">Killan James</p>
            <span>Active Now</span>
          </div>
          <div className="ml-auto flex gap-x-[10px]">
            <IconCard className="bg-primary">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.5C0 1.53477 0.697569 0.75 1.55556 0.75H7.77778C8.63576 0.75 9.33333 1.53477 9.33333 2.5V9.5C9.33333 10.4652 8.63576 11.25 7.77778 11.25H1.55556C0.697569 11.25 0 10.4652 0 9.5V2.5ZM13.5892 1.72891C13.842 1.88203 14 2.17734 14 2.5V9.5C14 9.82266 13.842 10.118 13.5892 10.2711C13.3365 10.4242 13.0302 10.4078 12.7896 10.2273L10.4563 8.47734L10.1111 8.21758V7.75V4.25V3.78242L10.4563 3.52266L12.7896 1.77266C13.0278 1.59492 13.334 1.57578 13.5892 1.72891Z" fill="white" />
              </svg>
            </IconCard>
            <IconCard className='bg-primary'>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.50898 0.673273C4.29844 0.164679 3.74336 -0.106024 3.21289 0.0388978L0.806641 0.695148C0.330859 0.826398 0 1.25843 0 1.75062C0 8.51546 5.48516 14.0006 12.25 14.0006C12.7422 14.0006 13.1742 13.6698 13.3055 13.194L13.9617 10.7877C14.1066 10.2573 13.8359 9.70218 13.3273 9.49163L10.7023 8.39788C10.2566 8.21194 9.73984 8.34046 9.43633 8.71507L8.33164 10.0631C6.40664 9.15257 4.84805 7.59398 3.9375 5.66898L5.28555 4.56702C5.66016 4.26077 5.78867 3.74671 5.60273 3.30101L4.50898 0.676007V0.673273Z" fill="white" />
              </svg>
            </IconCard>
            <IconCard className='bg-primary'>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4.375C7.48325 4.375 7.875 3.98325 7.875 3.5C7.875 3.01675 7.48325 2.625 7 2.625C6.51675 2.625 6.125 3.01675 6.125 3.5C6.125 3.98325 6.51675 4.375 7 4.375Z" fill="white" />
                <path d="M7 7.875C7.48325 7.875 7.875 7.48325 7.875 7C7.875 6.51675 7.48325 6.125 7 6.125C6.51675 6.125 6.125 6.51675 6.125 7C6.125 7.48325 6.51675 7.875 7 7.875Z" fill="white" />
                <path d="M7 11.375C7.48325 11.375 7.875 10.9832 7.875 10.5C7.875 10.0168 7.48325 9.625 7 9.625C6.51675 9.625 6.125 10.0168 6.125 10.5C6.125 10.9832 6.51675 11.375 7 11.375Z" fill="white" />
              </svg>
            </IconCard>
          </div>
        </div>
        <div className="p-[30px] flex flex-col gap-y-[25px] relative">
          {[0, 1, 1, 1].map((message, index) => (
            <MessageCard isUser={index % 3 === 0 || index % 5 === 0 }/>
          ))}
          <div className="absolute bottom-[30px] left-0 px-[30px] w-full">
              <img src="/assets/file.svg" className="absolute top-4 left-14 h-4" alt="" />
              <img src="/assets/send.svg" className="absolute top-4 right-14 h-4" alt="" />
              <input type="text" className="h-12 py-[14px] px-12 w-full border-surface-border rounded-lg bg-surface-background focus:outline-primary" placeholder="Enter text"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default messages