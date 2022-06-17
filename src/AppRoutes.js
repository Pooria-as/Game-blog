import React from 'react'
import { Routes, Route } from "react-router-dom"
import GlobalStyles from './components/GlobalStyles/GlobalStyles'
import Home from './Page/Home'
const AppRoutes = () => {
    return (
        <div>
            <GlobalStyles/>
            <Routes>
                <Route path='/Home' element={<Home />} />
            </Routes>


        </div>
    )
}

export default AppRoutes