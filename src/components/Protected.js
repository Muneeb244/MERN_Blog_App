import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

function Protected({children}) {
    // console.log("protected")
    console.log(Cookies.get('token'))
    if(!Cookies.get('token')){
        console.log("protected if conditon")
      return <Navigate to='/login' />
    }
    return children
}

export default Protected