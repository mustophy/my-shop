
export const TextInput = ({ placeholder="", label, className}) => {
  return (
    <div className={className}>
      {label && <span className="block mb-[10px]">{label}</span>}
      <input type="text" placeholder={placeholder} className="rounded-lg px-4 py-[13px] bg-input-bg border border-surface-border w-full" />
    </div>
  )
}
