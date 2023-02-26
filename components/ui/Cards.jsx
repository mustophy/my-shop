import { Rating } from "./Rating"

export const TitleCard = ({ children, title, subtitle, className }) => {
    return (
        <div className="h-fit">
            <div className={`py-6 mb-[30-px] px-[30px] bg-surface-background flex justify-between items-center rounded-t-lg relative ${className}`}>
                <h2>{title}</h2>
                <p className="text-primary cursor-pointer">{subtitle}</p>
            </div>
            <div className={`border-b border-x border-surface-border px-[30px] pt-[30px] pb-[25px] rounded-b-lg ${className}`}>
                {children}
            </div>
        </div>
    )
}

export const DotTitleCard = ({ children, title, className }) => {
    return (
        <div className="h-fit">
            <div className={`p-5 mb-[30-px] bg-surface-background flex justify-between items-center rounded-t-lg relative ${className}`}>
                <h2>{title}</h2>
                <img src="/assets/three-dots.svg" alt="" />
            </div>
            <div className={`border-b border-x border-surface-border p-5 pb-[25px] rounded-b-lg ${className}`}>
                {children}
            </div>
        </div>
    )
}

export const TeamCard = ({ team, outline=false, outlinePosition="bottom", className }) => {
    const borderPosition = outlinePosition === "bottom" ? 'border-b-4' : 'border-t-4'
    return (
        <div className={`py-7 px-4 border-surface-border rounded-lg ${outline && `${borderPosition} border-primary`} border relative ${className}`}>
            <div className="flex justify-between">
                <p className='text-primary font-semibold'>#digitalmarketing</p>
                <img src="/assets/three-dots.svg" className='rotate-90 cursor-pointer' alt="" />
            </div>
            <span className='block mt-[15px] font-[400]'>Our group promotes and sells products and services by leveraging online marketing </span>
            <div className="flex justify-between items-center mt-8">
                <p className='text-black font-semibold'>INDUSTRY:</p>
                <span className='block rounded-xl py-2 px-5 bg-primary text-white'>Marketing Team</span>
            </div>
            <div className="flex justify-between mt-4">
                <Rating />
                <div>

                </div>
            </div>
        </div>
    )
}

export const Card = ({ children, outline = false, outlinePosition = "bottom", className }) => {
    const borderPosition = outlinePosition === "bottom" ? 'border-b-4' : 'border-t-4'
    return (
        <div className={`py-7 px-4 border-surface-border rounded-lg ${outline && `${borderPosition} border-primary`} border relative ${className}`}>
            {children}
        </div>
    )
}

export const ProjectSectionCard = ({ children, outline = false, outlinePosition = "bottom", title }) => {
    return (
        <div className="shadow-shadow2 h-fit pb-[30px]">
            <div className="px-5 py-4 bg-surface-background flex justify-between">
                <p className="font-[500] text-black">{title}</p>
                <svg width="24" className="cursor-pointer" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 13.5C6.82843 13.5 7.5 12.8284 7.5 12C7.5 11.1716 6.82843 10.5 6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5Z" fill="black" />
                    <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="black" />
                    <path d="M18 13.5C18.8284 13.5 19.5 12.8284 19.5 12C19.5 11.1716 18.8284 10.5 18 10.5C17.1716 10.5 16.5 11.1716 16.5 12C16.5 12.8284 17.1716 13.5 18 13.5Z" fill="black" />
                </svg>
            </div>
            <div className="px-5">
                {children}
            </div>
        </div>
    )
}

export const ProjectCard = ({ children, project }) => {
    return (
        <div className="rounded-lg p-[15px] shadow-shadow2">
            <div className="flex justify-between items-center">
                <p className="text-black font-semibold">{project.title}</p>
                <div className="flex items-center">
                    <img className="h-4 w-4 mr-3" src="/assets/clock.svg" alt="" />
                    <span className="">{project.time}</span>
                </div>
            </div>
            <div className="flex mt-4 mb-12">
                <img src="/assets/sidebar/calendar.svg" alt="" />
                <span className="ml-[10px]">{project.team}</span>
            </div>
            <div className="flex items-center">
                <img className="cursor-pointer" src="/assets/file.svg" alt="" />
                <span className="ml-[10px] mr-[30px]">{project.fileLength}</span>
                <img className="cursor-pointer" src="/assets/sidebar/messages.svg" alt="" />
                <span className="ml-[10px] mr-[30px]">{project.messageLength}</span>
                <div className="h-8 w-8 flex ml-auto items-center justify-center bg-surface-background cursor-pointer rounded-full">
                    <img src="/assets/plus.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export const ConnectionCard = ({ user }) => {
    user.image = '/images/user.png'
    return (
        <div className="rounded-lg shadow-shadow2 px-[30px] pt-[30px] pb-5">
            <img src={user.image} className="w-[85px] h-[85px] mx-auto rounded-full" alt="" />
            <p className="mt-5 mb-[10px] text-center">{user.name}</p>
            <div className="flex justify-center items-center my-3">
                {user.type === "Product Seller"
                    ? <img src="/assets/tag.svg" alt="" />
                    : <img src="/assets/cart.svg" alt="" />
                }
                <p className="ml-3">{user.type}</p>
            </div>
            <div className="flex items-center justify-center">
                <Rating />
            </div>
            <div className="flex justify-between mt-16">
                <p className="cursor-pointer">Profile</p>
                <p className={`cursor-pointer hover:text-primary ${user.connected && 'text-primary'}`}>
                    {user.connected
                        ? 'Connected'
                        : 'Connect'
                    }
                </p>
            </div>
        </div>
    )
}