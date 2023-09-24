import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Formik } from "formik";
import ErrorMessage from '../../components/ErrorMessage';
import axios from 'axios';
import { ThreeDots } from 'react-loading-icons';

function SignUp() {


  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');
  const [message, setMessage] = useState(null);


  useEffect(() => {
    document.title = "Sign In";
  })


  const userSchema = yup.object().shape({
    name: yup.string().min(2, "Name should be 2 characters minimum").required(),
    email: yup.string().required().email(),
    password: yup.string().min(6, "Password should be 6 characters minimum").required(),
  })

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    setMessage(null);
    await axios.post('http://localhost:5000/api/auth/signup', values)
      .then(res => {
        if(res.data?.token) {
          setIsLoading(false);
          setMessage("Login successfully")
          return setToken(res.data.token)
        }
        if(res.data?.error) {
          setIsLoading(false);
          setMessage(res.data.error)
          return setToken(null)
        }
      })
      .catch(err => {
        console.log(err)
        setToken(null)
        setIsLoading(false);
      })
    resetForm();
  }

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form action='' className='flex flex-col items-center justify-items-center'>
          <h1 className='text-3xl font-bold mt-10'>Sign up</h1>
          {message && <h3 className={token ? 'font-bold text-base text-green-500 mt-2' : 'font-bold text-base text-red-500 mt-2'}>{message}</h3>}
          <input
            type="text"
            placeholder='name'
            value={values.name}
            onChange={handleChange('name')}
            onBlur={handleBlur('name')}
            className='mt-7 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black'
          />
          <ErrorMessage
            error={errors["name"]}
            visible={touched["name"]}
          />

          <input
            type="email"
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
          <button className='shadow bg-black text-white font-bold py-2 px-4 rounded mt-10' onClick={handleSubmit} type='submit' >
            {isLoading ? <ThreeDots stroke='white' fill='white' height={15} /> : "Register"}
          </button>
          {/* <button className='shadow bg-black text-white font-bold py-2 px-4 rounded mt-10 w-1/4 h-1/2' onClick={handleSubmit} type='submit' >
          <span className="loading loading-dots loading-md text-white"></span>
          Regiter
          </button> */}
        </form>
      )}
    </Formik>
  )
}

export default SignUp