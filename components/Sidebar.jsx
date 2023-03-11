import React, { useEffect, useState } from 'react'
import { sidebarRoutes } from '../config/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const [active, setActive] = useState(false)
    const hideSidebar = () => {
        const sidebar = document.getElementById('sidebar')
        sidebar.classList.toggle('slide-in')
    }
    useEffect(() => {

    }, [])
    return (
        <div id='sidebar' className='flex translate-x-[-100%] sm:translate-x-0 transition-all duration-500 z-10 w-[258px] px-4 pt-12 flex-col gap-y-2 fixed top-0 left-0 bg-[#1F1E1F] h-[100vh] overflow-auto'>
            <div className="flex ">
                <svg
                    className="cursor-pointer sm:hidden mt-4 ml-2 mr-6"
                    onClick={hideSidebar}
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.99988 18.0002L18 6"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M18 18.0002L5.99988 6"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <img src="/images/logo.svg" className='h-16 w-16 mb-7 ' alt="" />
            </div>
            {sidebarRoutes.map(route => {
                return <RouteRecursion route={route} active={active} setActive={setActive} />
            })}
        </div >
    )
}

export default Sidebar

const RouteRecursion = ({ route, firstLevel = true, active, setActive }) => {
    const { pathname } = useRouter()
    const [showSubroutes, setShowSubroutes] = useState("")
    const hideSidebar = () => {
        const sidebar = document.getElementById('sidebar')
        sidebar.classList.toggle('slide-in')
    }
    const toggleSubroutes = (name) => {
        if(!route.subRoutes) hideSidebar()
        if (firstLevel) {
            if (active === route.name) return setActive("")
            setActive(route.name)
        } else {
            setShowSubroutes(route.name)
        }
    }
    let topDivClassName = ''
    let topLinkClassName = ''
    let imgClassName = ''
    topDivClassName = active === route.name ? 'bg-primary' : ''
    topLinkClassName = active === route.name ? 'text-white font-semibold' : ''
    imgClassName = active === route.name ? 'make-white' : ''

    return (
        <div className=''>
            <Link href={`${route.subRoutes ? '' : route.url}`}>
                <div onClick={() => toggleSubroutes(route?.name)} className={`flex cursor-pointer px-4 py-3 rounded-lg items-center ${topDivClassName}`}>
                    {firstLevel &&
                        <img className={imgClassName} src={`/assets/sidebar/${route?.name}.svg`} alt="" />
                    }
                    <p className={`ml-[10px] ${topLinkClassName}`}>{route.name}</p>
                    {route.subRoutes &&
                        <div className='ml-auto shrink-0'>
                            {active === route.name
                                ? <img className={`${active === route.name && 'make-white'}`} src='/assets/sidebar/ArrowUp.svg' />
                                : <img className={`${active === route.name && 'make-white'}`} src='/assets/sidebar/ArrowDown.svg' />
                            }
                        </div>
                    }
                </div>
            </Link>
            {route.subRoutes && (active === route.name || showSubroutes === route.name) &&
                <div className="flex border-l-2 flex-col gap-y-6 mt-5 ml-10">
                    {route.subRoutes.map(link => {
                        return (
                            <>
                                {!link.subRoutes &&

                                    <Link href={link.url} onClick={hideSidebar}>
                                        <p className={`pl-7 ${isActiveLink(pathname, link.name) && 'text-primary'}`}>{link.name}</p>
                                    </Link>
                                }
                                {link.subRoutes &&
                                    <RouteRecursion route={link} firstLevel={false} active={active} setActive={setActive} />
                                }
                            </>
                        )
                    })}
                </div>
            }
        </div>
    )
}

const isActiveLink = (pathname, route) => {
    const divisions = pathname.split("/")
    return route.toLowerCase() === (divisions[divisions.length - 1]).toLowerCase()
}