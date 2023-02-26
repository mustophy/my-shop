export const IconCard = ({ children, className }) => {
  return (
    <div className={`h-10 w-10 flex rounded-[50%] items-center justify-center ${className}`}>
        {children}
    </div>
  )
}