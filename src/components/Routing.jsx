import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '../components/home/Home'
import Otp_verification from './authentication/SignUp/Otp_verification'
import SetPassword from '../components/authentication/SignUp/Set_password'
import Login from '../components/authentication/Login/LogIn'
import Home from '../components/home/Home'
import ArtDecor from "./home/pages/categories/ArtDecor";
import ArtDecorDetailsPage from "./home/pages/categories/ArtDecorDetailsPage";
import Jewelry from "./home/pages/categories/Jewelry";
import JewelryDetailsPage from "./home/pages/categories/JewelryDetailsPage";
import Clothing from "./home/pages/categories/Clothing";
import ClothingDetailsPage from "./home/pages/categories/ClothingDetailsPage";
import Register_user from './authentication/SignUp/Register_user'
import Generate_otp from './authentication/SignUp/Generate_otp'
import ProductDetails from './home/ProductDetailsPage' // ✅ imported new component

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
                    <Route path="/categories/art-decor/:id" element={<ArtDecorDetailsPage />} />
                    <Route path="/categories/jewelry" element={<Jewelry />} />
                    <Route path="/categories/jewelry/:id" element={<JewelryDetailsPage />} />
                    <Route path="/categories/clothing" element={<Clothing />} />
                    <Route path="/categories/clothing/:id" element={<ClothingDetailsPage />} />
                    <Route path="/product/:id" element={<ProductDetails />} /> {/* ✅ added dynamic product route */}
                </Routes>
            </Router>
        </>
    )
}

export default Routing
