import { useState } from "react"

export const SelectInput = ({ label, placeholder="Select", children, className }) => {
    const [selected, setSelected] = useState(placeholder)
    return (
        <div className={`${className}`}>
            <span className='font-[400] block mb-[10px]'>{label}</span>
            <div className="px-4 pt-[13px] pb-[14px] rounded-lg border border-surface-border bg-input-bg flex justify-between items-center relative">
                <p>{selected}</p>
                <img src="/assets/down-arrow.svg" alt="" />
                <select onChange={(e) => setSelected(e.target.value)} className='absolute cursor-pointer w-full h-full opacity-0' name="" id="" placeholder={placeholder}>
                    {children}
                </select>
            </div>
        </div>
    )
}
