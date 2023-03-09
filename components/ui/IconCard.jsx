export const IconCard = ({ children, className="bg-surface-background" }) => {
  return (
    <div className={`h-11 w-11 flex items-center justify-center rounded-full shrink-0 ${className}`}>
        {children}
    </div>
  )
}