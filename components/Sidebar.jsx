import React, { useState } from 'react'
import { sidebarRoutes } from '../config/routes'

const Sidebar = () => {
    return (
        <div className='w-[218px] px-4 pt-12 flex flex-col gap-y-2 fixed top-0 left-0'>
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
                            route.subRoutes && showSubroutes &&(
                                <div className="flex border-l flex-col gap-y-6 mt-5 ml-6 pl-3">
                                    {route.subRoutes.map(link => (
                                        <p>{link.name}</p>
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