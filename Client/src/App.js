import './App.css';
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/main/Layout';
import Blogs from './components/Blogs';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import UserContext from './context/UserContext';
import { useState } from 'react';
import CreatePost from './pages/main/CreatePost';
import Post from './pages/main/Post';
import Edit from './pages/main/Edit';
import Protected from './components/Protected';
import NotFound from './pages/main/NotFound';

function App() {

  const [user, setUser] = useState({});
  const [userToken, setUserToken] = useState();

  return (
    <UserContext.Provider value={{ user, setUser, userToken, setUserToken }}>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Blogs />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<SignUp />} />
          <Route path={'/create'} element={<Protected>
            <CreatePost />
          </Protected>} />
          <Route path={'/post/:id'} element={<Post />} />
          <Route path={'/edit/:id'} element={<Edit />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </UserContext.Provider>

  );
}

export default App;
