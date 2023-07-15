import './App.css';
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/main/Layout';
import Blogs from './components/Blogs';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import UserContext from './context/UserContext';
import { useState } from 'react';

function App() {

  const [user,setUser] = useState({});
  const [userToken,setUserToken] = useState();

  return (
    <UserContext.Provider value={{user, setUser, userToken, setUserToken}}>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Blogs />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<SignUp />} />
        </Route>
      </Routes>
    </UserContext.Provider>

  );
}

export default App;
