export const FilledButton = ({children, className}) => {
    return <button className={`bg-primary rounded-lg hover:bg-primary/95 hover:shadow-xl hover:text-[16px] hover:shadow-primary/25 transition-all duration-200 text-white flex items-center justify-center py-3 px-14 ${className}`}>
        {children}
    </button>
}

export const OutlineButton = ({children, className}) => {
    return <button className={`border border-primary rounded-lg hover:bg-white/95 hover:shadow-lg hover:text-[16px] hover:shadow-primary/25 transition-all duration-200 text-primary flex items-center justify-center py-3 px-14 ${className}`}>
        {children}
    </button>
}