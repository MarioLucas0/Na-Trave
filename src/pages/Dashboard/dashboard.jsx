import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo/logo-fundo-vermelho.svg'
import { Icon } from '../../components/icon/Icon'
import  ban  from './bandeiras/sui.png'

export const Dashboard   = () => (
  <div className="">
     
     <header className="bg-red-500 text-white p-4">
        <div  className="container max-w-3xl  flex justify-between ">
          <img src={logo}  className="w-28 md:w-40" />
          <Link to="/profile">
          <Icon name="profile" className="w-10" />
          </Link>
        
        </div>
      </header>

      <main >
        <section id="header" className="bg-red-500 text-white p-4">
          <div className='container max-w-3xl space-y-2'>
            <span >Ola Bruno</span>
            <h3 className="text-2xl font-bold">Qual seu palpite</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4">
            
            <div className="roundend-xl border border-gray-300 p-4 text-center space-y-4">
                <span className="text-sm md:text-base text-gray-700 font-bold">7:00</span>

                <div className="flex space-x-4 justify-center items-center">
                  <span className="uppercase">sui</span>
                  <img src={ban }  />

                  <input  typ="number" className="bg-red-300/[0.2] w-16 h-16 text-red-700 text-xl text-center" />

                  <span className="text-red-500 font-bold">X</span>

                  <input typ="number"  className="bg-red-300/[0.2] w-16 h-16 text-red-700 text-xl text-center"/>

                  <img src={ ban }   />
                  <span className="uppercase">cam</span>
                </div>
              
            </div>


        </section>

      </main>
     
  </div>
)