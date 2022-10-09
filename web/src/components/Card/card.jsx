
export const Card = ({timeA,timeB,match}) => (

  <div className="roundend-xl border border-gray-300 p-4 text-center space-y-4">
  <span className="text-sm md:text-base text-gray-700 font-bold">{match.time}</span>

  <div className="flex space-x-4 justify-center items-center">
    <span className="uppercase">{timeA.slug}</span>
    <img src={`/public/img/bandeiras/${timeA.slug}.png`}  />

    <input  typ="number" className="bg-red-300/[0.2] w-16 h-16 text-red-700 text-xl text-center" />

    <span className="text-red-500 font-bold">X</span>

    <input typ="number"  className="bg-red-300/[0.2] w-16 h-16 text-red-700 text-xl text-center"/>

    <img src={`/public/img/bandeiras/${timeB.slug}.png`}  />
    <span className="uppercase">{timeB.slug}</span>
  </div>
</div>

)