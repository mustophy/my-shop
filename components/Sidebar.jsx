import React, { useState } from 'react'
import { sidebarRoutes } from '../config/routes'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='w-[218px] px-4 pt-12 flex flex-col gap-y-2 fixed top-0 left-0 bg-white h-[100vh]'>
            <img src="/images/logo.svg" className='h-16 w-16 mb-7 mx-auto' alt="" />
            {sidebarRoutes.map(route => {
                const [showSubroutes, setShowSubroutes] = useState(false)
                const toggleSubroutes = () => setShowSubroutes(!showSubroutes)
                return (
                    <li className=''>
                        <div onClick={toggleSubroutes} className={`flex cursor-pointer px-4 py-3 rounded-lg items-center ${showSubroutes && 'bg-primary'}`}>
                            <img src={`/assets/sidebar/${route?.name}.svg`} alt="" />
                            <p className={`ml-[10px] ${showSubroutes && 'text-white'}`}>{route.name}</p>
                            {route.subRoutes &&
                                <div className='ml-auto'>
                                    {showSubroutes
                                        ? <img src='/assets/sidebar/ArrowUp.svg' />
                                        : <img src='/assets/sidebar/ArrowDown.svg' />
                                    }
                                </div>
                            }
                        </div>
                        {
                            route.subRoutes && showSubroutes && (
                                <div className="flex border-l-2 flex-col gap-y-6 mt-5 ml-10 pl-4">
                                    {route.subRoutes.map(link => (
                                        <Link href={link.url}>
                                            <p>{link.name}</p>
                                        </Link>
                                    ))}
                                </div>
                            )
                        }
                    </li>
                )
            })}
        </div >
    )
}

export default Sidebar