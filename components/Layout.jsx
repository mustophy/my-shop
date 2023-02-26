import React from 'react'
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'
import { formatPathname } from '@/utils/formatPathname'

const Layout = ({ children }) => {
  const { pathname } = useRouter()
  const { formattedPath, mainPath } = formatPathname(pathname)
  return (
    <div className='pl-[218px]'>
      <Sidebar />
      <div className='ml-[30px] py-6 pr-[30px] h-[100vh] flex flex-col'>
        <div className='flex mb-[30px] items-center pl-[30px]'>
          <p className='font-[700] text-[25px] leading-[32px]'>{formattedPath}</p>
          <p className='text-primary ml-1 font-[700] text-[25px] leading-[32px]'>{mainPath}</p>
          <div className='ml-20 relative'>
            <svg className='absolute right-5 top-[14px] cursor-pointer' width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5.85C13 7.14094 12.5344 8.33344 11.75 9.30094L15.7062 12.8644C16.0969 13.2159 16.0969 13.7869 15.7062 14.1384C15.3156 14.49 14.6812 14.49 14.2906 14.1384L10.3344 10.575C9.25937 11.2838 7.93437 11.7 6.5 11.7C2.90937 11.7 0 9.08156 0 5.85C0 2.61844 2.90937 0 6.5 0C10.0906 0 13 2.61844 13 5.85ZM6.5 9.9C8.98437 9.9 11 8.08594 11 5.85C11 3.61406 8.98437 1.8 6.5 1.8C4.01562 1.8 2 3.61406 2 5.85C2 8.08594 4.01562 9.9 6.5 9.9Z" fill="#727272" />
            </svg>
            <input type="text" className='border border-surface-border rounded-[30px] py-3 pl-4 w-[350px]' placeholder='Search anything here...' />
          </div>
        </div>
        <div className='rounded-lg shadow-shadow1 bg-white flex-1 '>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
