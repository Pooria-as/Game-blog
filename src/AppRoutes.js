import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Page/Home'
const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/Home' element={<Home />} />
            </Routes>


        </div>
    )
}

export default AppRoutes