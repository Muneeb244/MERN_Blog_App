import { useEffect } from 'react';
import FormikForm from '../../components/FormikForm';
import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';

function CreatePost() {
    return(
        <FormikForm />
    )
}

export default CreatePost