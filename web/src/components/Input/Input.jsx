export const Input = ({ name,label, error, ...props })  => (

  <div className="flex flex-col">
     <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-4">{label}</label>
     <input {...props} name={name} id={name}  className={`p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 ${error && 'border-red-300'}`} /><span className="p2 text-sm text-red-300">{error}</span>
  </div>  

)
