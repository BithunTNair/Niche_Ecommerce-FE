import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '../components/home/Home'
import Otp_verification from './authentication/SignUp/Otp_verification'
import SetPassword from '../components/authentication/SignUp/Set_password'
import Login from '../components/authentication/Login/LogIn'
import Home from '../components/home/Home'
import ArtDecor from "./home/pages/categories/ArtDecor";
import Jewelry from "./home/pages/categories/Jewelry";
import Clothing from "./home/pages/categories/Clothing";
import Register_user from './authentication/SignUp/Register_user'
import Generate_otp from './authentication/SignUp/Generate_otp'

const Routing = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                    <Route path='/register_user' element={<Register_user/>} />
                    <Route path='/generate_otp' element={<Generate_otp/>} />
                    <Route path='/verify_otp' element={<Otp_verification/>} />
                    <Route path='/set_password' element={<SetPassword/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path="/categories/art-decor" element={<ArtDecor />} />
                    <Route path="/categories/jewelry" element={<Jewelry />} />
                    <Route path="/categories/clothing" element={<Clothing />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing