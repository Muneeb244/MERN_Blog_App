import './App.css';
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/main/Layout';
import Blogs from './components/Blogs';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Blogs />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<SignUp />} />
      </Route>
    </Routes>

  );
}

export default App;
