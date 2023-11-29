import React from 'react'
import {Routes,Route} from "react-router-dom"
import ContactPage from './ContactPage'
import RegistrationForm from './ReactForm'
import Home from './Home'
const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/registration' element={<RegistrationForm />} />
        </Routes>
    )
}

export default Allroutes
