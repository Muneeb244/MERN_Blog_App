import React, { useContext, useState } from 'react'
import * as yup from 'yup';
import { Formik } from "formik";
import ErrorMessage from '../../components/ErrorMessage';
import Axios from 'axios';
import { ThreeDots } from 'react-loading-icons';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import UserContext from '../../context/UserContext';

function Login() {

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const {setUserToken} = useContext(UserContext);

  const userSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().min(6, "Password should be 6 characters minimum").required(),
  })


  const handleSubmit = async (values, {resetForm}) => {
    setIsLoading(true);
    setMessage(null);
    await Axios.post('http://localhost:5000/api/auth/signin', values)
      .then(res => {
        if(res.data?.token) {
          Cookies.set('token', res.data.token, {expires: 1})
          setIsLoading(false);
          setUserToken(res.data.token)
          return navigate('/')
        }
        if(res.data?.error) {
          setIsLoading(false);
          setMessage(res.data.error)
        }
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false);
      })

    resetForm();
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form action='' className='flex flex-col items-center justify-items-center'>
          <h1 className='text-3xl font-bold mt-10'>Sign In</h1>
          {message && <h3 className='font-bold text-base text-red-500 mt-2'>{message}</h3>}
          <input
            type="text"
            placeholder='email'
            value={values.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            className='mt-7 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black'
          />
          <ErrorMessage
            error={errors["email"]}
            visible={touched["email"]}
          />

          <input
            type="password"
            placeholder='Password'
            value={values.password}
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            className='mt-7 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black'
          />
          <ErrorMessage
            error={errors["password"]}
            visible={touched["password"]}
          />
          <button className='shadow bg-black text-white font-bold py-2 px-4 rounded mt-10' onClick={handleSubmit} type='submit'>
          {isLoading ? <ThreeDots stroke='white' fill='white' height={15} /> : "Login"}
          </button>
        </form>
      )}
    </Formik>
  )
}

export default Login