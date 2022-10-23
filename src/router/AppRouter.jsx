import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login, MainPage, Register } from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/MainPage" element={<MainPage />}/>
            <Route path="/" element={<Navigate to={'/login'} />}/>
        </Routes>
    )
}
