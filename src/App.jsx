import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./scenes/Home.jsx";
import Navbar from "./components/global/navbar.jsx";
import Footer from "./components/global/Footer.jsx";
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import About from "./scenes/About.jsx";
import MainLayout from "./components/global/MainLayout.jsx";
import Contact from "./scenes/Contact.jsx";
import LogIn from "./scenes/LogIn.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/about',
                    element: <About/>,
                },
                {
                    path: '/contact',
                    element: <Contact/>
                },
                {
                    path: '/login',
                    element: <LogIn/>
                }
            ]
        }
    ])

    return <RouterProvider router={router}/>;
}

export default App
