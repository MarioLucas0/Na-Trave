import logo from '../../../public/img/logo/logo-fundo-branco.svg'
import { Icon } from '../../components/Icon/Icon'
import { Input } from '../../components/Input/Input.jsx'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik'
import *  as yup from  'yup'

const validationSchema = yup.object().shape({
  passoword: yup.string().required("Digite uma senha"),
  email: yup.string().required("Digite um email")
});


export const Login = () => {
  const formik = useFormik({
    onSubmit: async (values) =>{
  
      const res = await axios({
        method: 'post',
        baseURL: 'http://localhost:3000',
        url: '/users',
        data: values
      })
    },
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema
  })
  

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
              error={formik.touched.email && formik.errors.email}
              placeholder="Digite seu email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
           />
           

          <Input 
              type="password"
              name="passoword"
              label="Sua senha"
              error={formik.touched.passoword && formik.errors.passoword}
              placeholder="Digite sua senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
           />
            <button className="text-center text-red-700 text-white  bg-red-500 text-xl px-6 py-3 rounded-xl">
                        Entrar
              </button>
              
          </form>
        </main>
        
    </div>
  )
}

