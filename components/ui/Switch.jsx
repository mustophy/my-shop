import { useState } from "react"

export const SwitchBtn = ({selected}) => {
    const [swtch, setSwtch] = useState(selected)
    return (
        <div 
            style={{justifyContent: swtch? "end" : "start", backgroundColor: swtch? "#E75EA0" : "#727272"}} 
            className={`relative flex w-[24px] transition-all h-[15px] rounded-[40px] p-1 pt-0.05 cursor-pointer`}
            onClick={() => setSwtch(!swtch)}
        >
            <div className={` bg-white w-[9px] h-[9px] rounded-[50%]`}></div>
        </div>
    )
}