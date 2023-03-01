import React, { useState } from 'react'
import { sidebarRoutes } from '../config/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const [active, setActive] = useState(false)
    return (
        <div className='hidden sm:flex w-[218px] px-4 pt-12 flex-col gap-y-2 fixed top-0 left-0 bg-white h-[100vh] overflow-auto'>
            <img src="/images/logo.svg" className='h-16 w-16 mb-7 mx-auto' alt="" />
            {sidebarRoutes.map(route => {
                return <RouteRecursion route={route} active={active} setActive={setActive} />
            })}
        </div >
    )
}

export default Sidebar

const RouteRecursion = ({ route, firstLevel = true, active, setActive }) => {
    const { pathname } = useRouter()
    const [showSubroutes, setShowSubroutes] = useState(false)
    const toggleSubroutes = (name) => {
        if (firstLevel === true) {
            setActive(name)
        }
        setShowSubroutes(!showSubroutes)
    }
    const topDivClassName = showSubroutes && firstLevel && active === route.name ? 'bg-primary' : ''
    const topLinkClassName = showSubroutes && firstLevel && active === route.name ? 'text-white' : ''
    return (
        <li className=''>
            <Link href={`${route.subRoutes ? '/#' : route.url}`}>
                <div onClick={() => toggleSubroutes(route?.name)} className={`flex cursor-pointer px-4 py-3 rounded-lg items-center ${topDivClassName}`}>
                    {firstLevel &&
                        <img src={`/assets/sidebar/${route?.name}.svg`} alt="" />
                    }
                    <p className={`ml-[10px] ${topLinkClassName}`}>{route.name}</p>
                    {route.subRoutes &&
                        <div className='ml-auto shrink-0'>
                            {showSubroutes
                                ? <img src='/assets/sidebar/ArrowUp.svg' />
                                : <img src='/assets/sidebar/ArrowDown.svg' />
                            }
                        </div>
                    }
                </div>
            </Link>
            {active === route.name && route.subRoutes && showSubroutes &&
                <div className="flex border-l-2 flex-col gap-y-6 mt-5 ml-10">
                    {route.subRoutes.map(link => {
                        return (
                            <>
                                {!link.subRoutes &&

                                    <Link href={link.url}>
                                        <p className={`pl-7 ${isActiveLink(pathname, link.name) && 'text-primary'}`}>{link.name}</p>
                                    </Link>
                                }
                                {link.subRoutes &&
                                    <RouteRecursion route={link} firstLevel={false} />
                                }
                            </>
                        )
                    })}
                </div>
            }
        </li>
    )
}

const isActiveLink = (pathname, route) => {
    const divisions = pathname.split("/")
    return route.toLowerCase() === (divisions[divisions.length - 1]).toLowerCase()
}