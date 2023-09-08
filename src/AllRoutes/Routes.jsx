import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Components/Login';
import SignUpR from "../Components/SignUpR"
import Dashboard from '../Components/DashBoard';
import Home from '../Components/Home';

function AllRoutes(props) {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUpR />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    );
}

export default AllRoutes;