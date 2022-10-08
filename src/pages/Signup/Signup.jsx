import logo  from '../../assets/img/logo/logo-fundo-branco.svg'
import { Icon } from '../../components/icon/Icon'
import { Input } from '../../components/Input/Input'
import { Link } from 'react-router-dom';



export const Signup = () => {
  return ( 
    <div>
        <header className="p-4 flex border-b border-red-300">
          <div className="container max-w-xl flex justify-center ">
            <img src={logo} className="w-32 md:w-40" />
          </div>
        </header>

         
        <main className="container max-w-xl p-4">
          <div className="p-4  flex space-x-4 items-center">
            <Link to="/dashboard">
               <Icon name="back" className="h-6 "/>
            </Link>
           
            <h2 className="text-xl font-bold">Crie sua Conta</h2>
            
          </div>

          <form className="p-4 space-y-6">

          <Input 
              type="passoword"
              name="name"
              label="Seu nome"
              placeholder="Digite seu nome"
           />

              <Input 
              type="passoword"
              name="username"
              label="Seu nome de usuario"
              placeholder="Digite um nome de usuario"
           />

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

            <Link to="/dashboard" className="text-center text-red-700 text-white  bg-red-500 text-xl px-6 py-3 rounded-xl">
                        Criar minha conta
              </Link>
              
          </form>
        </main>
        
    </div>
  )
}

