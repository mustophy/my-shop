import { OutlineButton } from "./Button"

export const FileInput = ({className}) => {
    return (
        <div className={`relative flex justify-center items-center w-full rounded-lg h-[225px] bg-surface-background ${className}`}>
            <div className='space-y-5 flex flex-col items-center'>
                <p>Drag and drop your file here</p>
                <OutlineButton>Browse Files</OutlineButton>
            </div>
            <input className='absolute opacity-0 cursor-pointer py-2 top-[50%] w-[165px] right-[51.5%] translate-x-[50%] ' type="file" />
        </div>
    )
}