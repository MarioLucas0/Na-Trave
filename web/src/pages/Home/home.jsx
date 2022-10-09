import { Link } from 'react-router-dom';
import logo from '../../../public/img/logo/logo-fundo-vinho.svg'


function Home() {

  return (
    <div className="h-screen bg-red-700 text-white p-6 flex flex-col items-center space-y-6">

      <header className="container max-w-5xl p-4 flex justify-center">
        <img src={logo} className="w-40" />
      </header>

      <div className="container  p-4 h-screen bg-red-700 text-white flex-1 flex flex-col items-center md:flex-row space-y-6 md:space-x-6">

        <div className="md:flex-1 flex justify-center">
            <img src="/public/img/imagem/photo.png" className="w-full max-w-md" />
        </div>

        <div className="md:flez-1 flex flex-col space-y-6">
          <h1 className="text-3xl text-center md:text-left font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022! </h1>


        <Link to="/signup" className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
            Criar minha conta
          </Link>

          <Link to="/login" className="text-center text-white-700 border border-white text-xl px-8 py-4 rounded-xl">
           Fazer Login
          </Link> 
        </div>

      </div>
    </div>
  )
}

export default Home;



