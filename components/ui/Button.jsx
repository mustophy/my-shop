export const FilledButton = ({children, className}) => {
    return <button className={`bg-primary rounded-lg text-white flex items-center justify-center py-3 px-14 ${className}`}>
        {children}
    </button>
}

export const OutlineButton = ({children, className}) => {
    return <button className={`border border-primary rounded-lg text-primary flex items-center justify-center py-3 px-14 ${className}`}>
        {children}
    </button>
}