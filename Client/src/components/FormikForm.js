import React, { useContext, useEffect, useState } from 'react'
import * as yup from 'yup';
import { Formik } from "formik";
import ErrorMessage from './ErrorMessage';
import Axios from 'axios';
import { ThreeDots } from 'react-loading-icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Lottie from 'lottie-react';
import loading from '../lottieFile/loading.json';

function FormikForm({ edit, editId }) {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    // const { user, setUser, userToken } = useContext(UserContext);
    const [blog, setBlog] = useState(null);

    const ref = React.useRef();

    useEffect(() => {
        document.title = "Create Post";

        try {
            {
                editId && Axios.get(`http://localhost:5000/api/blog/${editId}`)
                    .then(res => {
                        setBlog(res.data.blog)
                    })
                    .catch(err => {
                        console.log(err)
                        // setMessage("Something went wrong");
                        // navigate('/login');
                    })
            }
        } catch (error) {
            console.log("from form main catch:", error)
        }
    }, [])


    const imageUpload = async (image) => {
        setIsLoading(true)
        setMessage(null);
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'dpivkpad3');
        try {
            let res = await fetch('https://api.cloudinary.com/v1_1/dpivkpad3/image/upload', {
                method: 'POST',
                body: data
            })
            res = await res.json();
            return res.url;
        } catch (error) {
            setIsLoading(false)
            console.log("from cloudinary", error)
            setMessage('Something went wrong');
        }
    }



    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

    const blogSchema = yup.object().shape({
        title: yup.string().required().min(10, "Please write proper title"),
        summary: yup.string().min(20, "Please write proper summary").required().max(150),
        description: yup.string().min(50, "Please write proper description").required(),
        image: yup.mixed()
            .nullable()
            .required('A file is required')
            .test('File size',
                'File size too big', (value) => !value || (value && value.size <= 1024 * 1024))
            .test('format',
                'Unsupported file format', (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
    })


    const handleSubmit = async (values, { resetForm }) => {
        const url = await imageUpload(values.image);
        if(!url) {
            setMessage("Something went wrong");
            return;
        }
        values.image = url;
        setIsLoading(true);
        setMessage(null);
        try {
            Axios.post('http://localhost:5000/api/blog/post', JSON.stringify(values), {
                headers: {
                    'Content-Type': 'application/JSON',
                    'authorization': Cookies.get('token')
                }
            })
                .then(res => {
                    if (res.data?.blog) {
                        setIsLoading(false);
                        setMessage("post created successfully");
                    }
                    if (res.data?.error) {
                        setIsLoading(false);
                        setMessage(res.data.error)
                    }
                })
                .catch(err => {
                    console.log("from create first catch", err)
                    setMessage("Something went wrong");
                    setIsLoading(false);
                })
        } catch (error) {
            console.log("from create second catch", error)
            setMessage("Something went wrong");
            setIsLoading(false);
        }
        resetForm();
        ref.current.value = null;
    }

    const handleEdit = async (values, { resetForm }) => {
        const url = await imageUpload(values.image);
        if(!url) {
            setMessage("Something went wrong");
            return;
        }
        values.image = url;
        setIsLoading(true);
        setMessage(null);
        try {
            Axios.put(`http://localhost:5000/api/blog/${editId}`, JSON.stringify(values), {
                headers: {
                    'Content-Type': 'application/JSON',
                    'authorization': Cookies.get('token')
                }
            })
                .then(res => {
                    if (res.data?.blog) {
                        setBlog(res.data.blog)
                        setIsLoading(false);
                        setMessage("post updated successfully");
                    }
                    if (res.data?.error) {
                        setIsLoading(false);
                        setMessage(res.data.error)
                    }
                })
                .catch(err => {
                    console.log("from create first catch", err)
                    setMessage("Something went wrong");
                    setIsLoading(false);
                })
        } catch (error) {
            console.log("from create second catch", error)
            setMessage("Something went wrong");
            setIsLoading(false);
        }
        resetForm();
    }


    return (
        <>
        {edit && !blog && <Lottie animationData={loading} style={{ width: '100%', height: "100vh", position: 'absolute', top: 0, backgroundColor: '#fff', zIndex: 1 }} />}
        <Formik
            initialValues={edit ?
                { title: blog?.title, summary: blog?.summary, description: blog?.description, image: blog?.image }
                :
                { title: "", summary: "", description: "", image: "" }
            }
            validationSchema={!edit && blogSchema}
            onSubmit={edit ? handleEdit : handleSubmit}
            enableReinitialize={true}
        >
            {({ values, setFieldValue, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form action='' className='flex flex-col items-center justify-items-center'>
                    <h1 className='text-xl md:text-3xl font-bold mt-10'>{edit ? "Edit post" : "Create new post"}</h1>
                    {message && <h3 className={message === "Something went wrong" ? 'font-bold text-base text-red-500 mt-2' : 'font-bold text-base text-green-500 mt-2'}>{message}</h3>}
                    <input
                        type="text"
                        placeholder='title'
                        value={values.title}
                        onChange={handleChange('title')}
                        onBlur={handleBlur('title')}
                        className='mt-7 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[80%] xl:w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black'
                    />
                    <ErrorMessage
                        error={errors["title"]}
                        visible={touched["title"]}
                    />

                    <input
                        type="text"
                        placeholder='summary'
                        value={values.summary}
                        onChange={handleChange('summary')}
                        onBlur={handleBlur('summary')}
                        className='mt-7 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[80%] xl:w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black'
                    />
                    <ErrorMessage
                        error={errors["summary"]}
                        visible={touched["summary"]}
                    />
                    <input type="file" className="block w-[80%] xl:w-1/2 mt-7 text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-black-700
                        hover:file:bg-gray-200
                        "
                        name='image'
                        ref={ref}
                        onChange={(event) => {
                            setFieldValue("image", event.currentTarget.files[0]);
                        }}
                        onBlur={handleBlur('image')}
                    />
                    <ErrorMessage
                        error={errors["image"]}
                        visible={touched["image"]}
                    />
                    <ReactQuill className='w-[80%] xl:w-1/2 mt-7'
                        onChange={handleChange('description')}
                        // onBlur={handleBlur('description')}
                        value={values.description}
                    />
                    <ErrorMessage
                        error={errors["description"]}
                        visible={touched["description"]}
                    />
                    <button className='shadow bg-black text-white w-[80%] xl:w-1/2 font-bold py-2 px-4 rounded mt-10 mb-5 flex justify-center' onClick={handleSubmit} type='submit'>
                        {isLoading ? <ThreeDots stroke='white' fill='white' height={15} /> : edit ? "Edit post" : "Create new post"}
                    </button>
                </form>
            )}
        </Formik>
        </>
    )
}

export default FormikForm