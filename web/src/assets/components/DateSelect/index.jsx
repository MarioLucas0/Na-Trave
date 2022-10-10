import { useState } from 'react'
import { addDays, subDays, format} from 'date-fns'
import { ptBR } from 'date-fns/locale'

import{ Icon } from '~/assets/components/icon'

export const DateSelect = () => {
  // date years|moths|day|| h:m:s (iso)
  const initialDate = '2022-11-20T00:00:00z'
  const [currentDate, setCurrentDate] = useState(new Date(initialDate))

  function prevDay() {
    // function lib date-fns
    const nextDay = subDays(currentDate, 1)
    setCurrentDate(nextDay)
  }

  const nextDay = () =>{
    // function lib date-fns
    const nextDay = addDays(currentDate, 1)
    setCurrentDate(nextDay)
  }

  return(
    <div className="flex gap-8 justify-center h-20 items-center m-5 ">
      <Icon className="h-10 text-red-500" name="arrowLeft" onClick={prevDay}/>
      <h4 className="font-bold text-xl">{format(currentDate, "d 'de' MMMM",  {locale: ptBR})}</h4>
      <Icon className="h-10 text-red-500"  name="arrowRight" onClick={nextDay}/>
    </div>
  )
}