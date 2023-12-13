import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main/Main'
import Navbar from '../Components/Navbar/Navbar'
import Everything from '../pages/Everything/Everything'
import Men from '../Components/Men/Men'
import Home from '../Components/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'

const Router = createBrowserRouter ([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path: '/everything',
                element: <Everything></Everything>
            },
            {
                path: "/men",
                element: <Men></Men>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            }
        ]
    }
])

export default Router
