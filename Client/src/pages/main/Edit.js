import React from 'react'
import FormikForm from '../../components/FormikForm'
import { useLocation } from 'react-router-dom';

function Edit() {
  const location = useLocation();
  const { id } = location.state;
  if(location.pathname.includes('edit')) 
  return (
    <FormikForm edit={true} editId={id}/>
  )
}

export default Edit