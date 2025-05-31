import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '../components/landing_page/Landing'
import Otp_verification from './authentication/SignUp/Otp_verification'
import SetPassword from '../components/authentication/SignUp/Set_password'
import Login from '../components/authentication/Login/LogIn'
import Home from '../components/home/Home'
import Register_user from './authentication/SignUp/Register_user'
import Generate_otp from './authentication/SignUp/Generate_otp'
import Cart from '../components/cart/Cart'
import ProductDetails from './product_details/ProductDetails'

const Routing = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/register_user' element={<Register_user />} />
                    <Route path='/generate_otp' element={<Generate_otp />} />
                    <Route path='/verify_otp' element={<Otp_verification />} />
                    <Route path='/set_password' element={<SetPassword />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/view_product/:productId' element={<ProductDetails />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing