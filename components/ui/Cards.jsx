export const TitleCard = ({ children, title, subtitle }) => {
    return (
        <>
            <div className="py-6 mb-[30-px] px-[30px] bg-surface-background flex justify-between items-center rounded-t-lg relative">
                <h2>{title}</h2>
                <p className="text-primary">{subtitle}</p>
            </div>
            <div className="px-[30px] pt-[30px] pb-[25px] rounded-lg">
                {children}
            </div>
        </>
    )
}

export const Card = ({ children, outline = false, outlinePosition = "bottom" }) => {
    const borderPosition = outlinePosition === "bottom" ? 'border-b-4' : 'border-t-4'
    return (
        <div className={`py-7 px-4 rounded-lg ${outline && borderPosition} border-primary shadow-shadow1 relative`}>
            {children}
        </div>
    )
}
