import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

function Protected({children}) {
    if(!Cookies.get('token')){
      return <Navigate to='/login' />
    }
    return children
}

export default Protected