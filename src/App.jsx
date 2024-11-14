import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import Menu from './pages/Menu/Menu'
import Lodge from './pages/Lodge/Lodge'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTopButton />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/lodge' element={<Lodge />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
