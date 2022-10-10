import { Icon } from "~/assets/components/icon"
import { useLocalStorage } from 'react-use';
import { Navigate } from 'react-router-dom'

export function Home() {
  const [auth] = useLocalStorage('auth', {})

  if (auth?.user?.id){
    return <Navigate to = "/dashboard" replace={true} />
  }

  return (
    <div className="h-screen md:h-max-screen bg-red-700 text-white flex flex-col items-center">

      <header className="my-4 flex justify-center container ">
        <Icon className="h-16 lg:h-20" name="logo" />
      </header>

      <div className="container p-6 flex-1 flex flex-col space-y-6
        md:flex-row md:space-y-0 md:space-x-6 md:items-center md:items-center"
      >
        <div className="md:flex-1 flex justify-center">
          <img className="w-full max-w-lg" src="/imgs/img-destaque.png" />
        </div>
        <div className="flex flex-col space-y-6
            md:flex-1">
          <h1 className="text-center font-bold lg:text-4xl lg:text-center md:text-left md:text-2xl text-3xl"> Dê o seu palpite na Copa do Mundo do Catar 2022! </h1>

          <a href="./signUp" className="text-red-700 bg-white text-xl px-6 py-4 rounded-xl text-center md:text-lg hover:bg-red-500 hover:text-white">
            Criar minha conta
          </a>

          <a href="./login" className="border border-white text-xl px-6 py-4 rounded-xl text-center md:text-lg hover:bg-red-500">
            Fazer login
          </a>
        </div>
      </div>
    </div>
  )
}