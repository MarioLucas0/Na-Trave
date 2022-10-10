export const Card= ({timeA, timeB, match}) =>(
  <div className="container max-w-3xl border border-gray-300 rounded-2xl text-center p-4">
    <span className="text-base  lg:text-xl text-gray-700 font-bold">{match.time}</span>

    <div className="flex gap-6 justify-center items-center p-4">
      <span className="uppercase">{timeA.slug}</span>
      <img src={`./imgs/lags/${timeA.slug}.png`}/>

      <input  type="number" className="bg-red-300/[0.2] w-16 h-14 text-center tex-red-700 font-bold text-xl placeholder-red-700  " placeholder="-"/>
      <span className="mx-4 text-red-500 font-bold text-xl">X</span>
      <input  type="number" className="bg-red-300/[0.2] w-16 h-14 text-center tex-red-700 font-bold text-xl placeholder-red-700 " placeholder="-"/>

      <img src={`./imgs/lags/${timeB.slug}.png`}/>
      <span className="uppercase">{timeB.slug}</span>
    </div>
  </div>
)