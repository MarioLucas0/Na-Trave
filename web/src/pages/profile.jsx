import { useLocalStorage } from 'react-use';
import { Navigate } from 'react-router-dom'

import { Icon, Card, DateSelect } from "~/assets/components"

export const Profile =() =>{
  const [auth,  setAuth] = useLocalStorage('auth', {})
  const logout = () => setAuth({})

  if (!auth?.user?.id){
    return <Navigate to = "/" replace={true} />
  }

  return(
    <>

      <header className="bg-red-500 h-20 flex ">
        <div className="container max-w-3xl flex items-center justify-between">
          <Icon className="h-12 w-max" name="logo" />
          <div onClick= {logout} className='text-white -bold p-2 cursor-pointer'>
            Sair
          </div>
        </div>
      </header>

      <main className="space-y-6">
        <section className=" bg-red-500 h-40 text-white">
          <div className= "pt-6 container max-w-3xl space-y-6 ">
            <a href="/dashboard">
              <Icon name="arrows" className="h-8 text-white"/>
            </a>
            <h3 className="text-2xl font-bold ">Renara Secchim</h3>
          </div>
        </section>

        <section id="content">
          <div className="container max-w-3xl my-12">
            <h2 className="text-2xl font-bold text-red-500">Seus Palpites</h2>
          </div>

          <div className="flex gap-8 justify-center h-20 items-center m-5 ">
            <DateSelect />
          </div>

          <div className="space-y-4">
            <Card
              timeA={{slug :'sui'}}
              timeB={{slug :'cam'}}
              match = {{time: '7:00'}}
            />
            <Card
              timeA={{slug :'uru'}}
              timeB={{slug :'cor'}}
              match = {{time: '7:00'}}
            />
            <Card
              timeA={{slug :'por'}}
              timeB={{slug :'gan'}}
              match = {{time: '7:00'}}
            />
          </div>
        </section>
      </main>
    </>
  )
}