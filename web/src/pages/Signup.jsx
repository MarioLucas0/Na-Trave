import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik '
import { useLocalStorage } from 'react-use';
import { Navigate } from 'react-router-dom'


import { Icon, Input } from "~/assets/components/"

const validationSchema = yup.object().shape({
  name: yup.string().required('Preencha seu nome'),
  username: yup.string().required('Preencha seu nome de usuário'),
  email: yup.string().email('Informe um email válido').required('Digite seu E-email'),
  password: yup.string().required('Digite uma senha'),
})

export const Signup = () => {
  const [auth,  setAuth] = useLocalStorage('auth', {})

  const formik = useFormik({
    onSubmit:async (values) => {
      const res = await axios({
        method: 'post',
        baseURL: 'http://localhost:3000',
        url: '/users',
        data: values
      })
    },

    initialValues:{
      name:'',
      username: '',
      email:'',
      password:''
    },
    validationSchema
  })

  if (auth?.user?.id){
    return <Navigate to = "/dashboard" replace={true} />
  }

  return (
    <div>
      <header className="py-4 flex justify-center border-b-2 border-red-500 ">
      <Icon className="h-16" name="logoLight"/>
      </header>

      <main className="p-4 container max-w-xl">
        <div className="flex py-8 items-center">
          <a href="/"><Icon name="arrows" className=" h-8 text-red-500 "/></a>
          <h2 className="ml-4 text-xl font-bold">Crie sua conta</h2>
        </div>

        <form className="space-y-6 " onSubmit={formik.handleSubmit}>
        <Input
            type="text"
            name="name"
            label="Seu nome"
            error={formik.touched.name && formik.errors.name}
            placeholder="Digite seu nome"
            value={formik.values.name}
            onChange= {formik.handleChange}
            onBlur = {formik.handleBlur}
          />

          <Input
            type="text"
            name="username"
            label="Seu nome de usuário"
            error={formik.touched.username && formik.errors.username}
            placeholder="Digite um nome de usuário"
            value={formik.values.username}
            onChange= {formik.handleChange}
            onBlur = {formik.handleBlur}
          />

          <Input
            type="text"
            name="email"
            label="Seu e-mail"
            error={formik.touched.email && formik.errors.email}
            placeholder="Digite seu e-mail"
            value={formik.values.email}
            onChange= {formik.handleChange}
            onBlur = {formik.handleBlur}
          />

          <Input
            type="password"
            name="password"
            label="Sua senha"
            error={formik.touched.password && formik.errors.password}
            placeholder="Digite sua senha"
            value={formik.values.password}
            onChange= {formik.handleChange}
            onBlur = {formik.handleBlur}
          />

          <div className="flex ">
            <button type="submit"
              className="w-full text-center text-base font-regular text-white bg-red-500 text-xl  py-5 rounded-[16px] hover:bg-red-700 disabled:opacity-50"
              disabled={!formik.isValid || formik.isSubmitting}
              >
              {formik.isSubmitting ? 'Carregando...' : 'Criar minha conta'}
            </button>
          </div>
        </form>

      </main>
    </div>
  )
}