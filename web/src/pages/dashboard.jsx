import { useLocalStorage } from 'react-use';
import { Navigate } from 'react-router-dom'

import { Icon, Card, DateSelect } from "~/assets/components"

export const Dashboard = () => {
  const [auth] = useLocalStorage('auth', {})

  if (!auth?.user?.id){
    return <Navigate to = "/" replace={true} />
  }

  return (
    <>
      <header className="bg-red-500 h-20 flex ">
        <div className="container max-w-3xl flex items-center justify-between">
          <Icon className="h-12 w-max" name="logo" />
          <a href="/profile">
            <Icon className="h-8" name="profile" />
          </a>
        </div>
      </header>

      <main className="space-y-6">
        <section className=" bg-red-500 h-40 text-white">
          <div className="pt-6 container max-w-3xl space-y-6 ">
            <span>Olá Renara!</span>
            <h3 className="text-2xl font-bold ">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content">
          <DateSelect />

          <div className="space-y-4">
            <Card
              timeA={{ slug: 'sui' }}
              timeB={{ slug: 'cam' }}
              match={{ time: '7:00' }}
            />
            <Card
              timeA={{ slug: 'uru' }}
              timeB={{ slug: 'cor' }}
              match={{ time: '7:00' }}
            />
            <Card
              timeA={{ slug: 'por' }}
              timeB={{ slug: 'gan' }}
              match={{ time: '7:00' }}
            />
          </div>
        </section>
      </main>
    </>
  )
}