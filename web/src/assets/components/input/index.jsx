export const Input = ({name, label, error, ...props}) =>(
  <div className="flex flex-col">
    <label className="font-regular text-gray-500 text-sm pb-4 " htmlFor={name}>{label}</label>
    <input className={` border rounded-xl border-gray-500 p-4 focus:outline outline-1 outline-red-300
    ${error && 'border-red-300'}`}
    {...props} name ={name} id={name}/>
    <span className="p-2 text-sm text-red-300">{error}</span>
  </div>
)