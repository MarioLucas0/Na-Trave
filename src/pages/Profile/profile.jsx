import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/img/logo/logo-fundo-vermelho.svg'
import { Card } from '../../components/Card/card'
import { Icon } from '../../components/icon/Icon'


const initialDate = '2022-11-20T00:00:00'

const DateSelect = () => {

  const [currentDate, setCurrentDate] = useState(initialDate)
  
  return (

      <div className="p-4 flex space-x-4 items-center  justify-center">
      <Icon name="arrowLeft" className="w-6 text-red-500"></Icon>
      <span className="font-bold">24 de novembro</span>
      <Icon name="arrowRight" className="w-6 text-red-500"></Icon>
      </div>

    )

}

export const Profile   = () => (

  
  <div className="">

      <header className="bg-red-500 text-white p-4">
        <div  className="container max-w-3xl  flex justify-between ">
          <img src={logo}  className="w-28 md:w-40" />
        
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className="bg-red-500 text-white p-4">
          <div className='container max-w-3xl space-y-2'>
            <Link to="/dashboard">
              <Icon name="back" className="w-10" />
            </Link>

            <h3 className="text-2xl font-bold">Mario Lucas</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4">
            
            <h2 className="text-red-500 text-xl font-bold">Seus Palpites</h2>

            <DateSelect />

            <div className="space-y-4">
            <Card 

            timeA={{slug: 'sui' }}
            timeB={{slug: 'cam' }}
            match={{time: '7:00'}}
            
            
            />
            </div>



        </section>

      </main>

  </div>
  
)