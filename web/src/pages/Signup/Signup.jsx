import logo from '../../../public/img/logo/logo-fundo-branco.svg'
import { Icon } from '../../components/icon/Icon'
import { Input } from '../../components/Input/Input'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik'
import *  as yup from  'yup'


const validationSchema = yup.object().shape({
  name: yup.string().required("Preencha seu nome"),
  passoword: yup.string().required("Digite uma senha"),
  username: yup.string().required("Digite um nome de usuario"),
  email: yup.string().required("Digite um email")
});


export const Signup = () => {

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
    name: '',
    username: '',
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
            <Link to="/dashboard">
               <Icon name="back" className="h-6 "/>
            </Link>
           
            <h2 className="text-xl font-bold">Crie sua Conta</h2>
            
          </div>

          <form className="p-4 space-y-6" onSubmit={formik.handleSubmit}>

          <Input 
              type="passoword"
              name="name"
              label="Seu nome"
              error={formik.touched.name && formik.errors.name}
              placeholder="Digite seu nome"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
           />

              <Input 
              type="text"
              name="username"
              label="Seu nome de usuario"
              error={formik.touched.username && formik.errors.username}
              placeholder="Digite um nome de usuario"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
           />

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
              type="passoword"
              name="passoword"
              label="Sua senha"
              error={formik.touched.passoword && formik.errors.passoword}
              placeholder="Digite sua senha"
              value={formik.values.passoword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
           />

            
              <button type="submit" className="w-full text-center text-red-700 text-white  bg-red-500 text-xl px-6 py-3 rounded-xl disabled:opacity-50" disabled={!formik.isValid}>
                          Criar minha conta
                </button>   
        
         
          </form>
        </main>
        
    </div>
  )
}

