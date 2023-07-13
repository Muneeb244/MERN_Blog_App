import React from 'react';
import * as yup from 'yup';
import { Formik } from "formik";
import ErrorMessage from '../../components/ErrorMessage';

function SignUp() {

  const userSchema = yup.object().shape({
    name: yup.string().min(2, "Name should be 2 characters minimum").required(),
    email: yup.string().required().email(),
    password: yup.string().min(6, "Password should be 6 characters minimum").required(),
  })

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
          <button className='shadow bg-black text-white font-bold py-2 px-4 rounded mt-10' onClick={handleSubmit} type='submit' >Register</button>
        </form>
      )}
    </Formik>
  )
}

export default SignUp