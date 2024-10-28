import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootswatch/dist/lux/bootstrap.min.css';
import { BrowserRouter , Routes, Route, } from "react-router-dom";
import App from './App.jsx'
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Navbar from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter> 
  </StrictMode>,
)
