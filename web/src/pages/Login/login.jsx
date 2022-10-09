import logo from '../../../public/img/logo/logo-fundo-branco.svg'
import { Icon } from '../../components/Icon/Icon'
import { Input } from '../../components/Input/Input.jsx'
import { Link } from 'react-router-dom';


export const Login = () => {
  return (
    <div>
        <header className="p-4 flex border-b border-red-300">
          <div className="container max-w-xl flex justify-center ">
            <img src={logo} className="w-32 md:w-40" />
          </div>
        </header>

         
        <main className="container max-w-xl p-4">
          <div className="p-4  flex space-x-4 items-center">
            <Link to="/">
               <Icon name="arrowLeft" className="h-6 "/>
            </Link>
           
            <h2 className="text-xl font-bold">Entre na sua conta</h2>
            
          </div>

          <form className="p-4 space-y-6">

          <Input 
              type="text"
              name="email"
              label="Seu e-mail"
              placeholder="Digite seu email"
           />
           

          <Input 
              type="passoword"
              name="passoword"
              label="Sua senha"
              placeholder="Digite sua senha"
           />

            <button className="text-center text-red-700 text-white  bg-red-500 text-xl px-6 py-3 rounded-xl">
                        Entrar
              </button>
              
          </form>
        </main>
        
    </div>
  )
}

