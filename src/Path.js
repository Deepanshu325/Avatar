import React from 'react'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import App from './App'
import Team from './Components/Team'
import Adduser from './Pages/Adduser'
import Header from './Components/Header'
import Home from './Pages/Home'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Path = () => {
  return (
   <BrowserRouter>
   
   <Header/>
   

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/adduser" element={<Adduser/>}/>
   </Routes>
   <ToastContainer />
   </BrowserRouter>
  )
}

export default Path
