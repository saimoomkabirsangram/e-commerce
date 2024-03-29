import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main/Main'
import Everything from '../pages/Everything/Everything'
import Men from '../Components/Men/Men'
import Home from '../Components/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import ContactUs from '../pages/ContactUs/ContactUs'
import Cart from '../Components/Cart/Cart'
import CheckOut from '../Components/CheckOut/CheckOut'

const Router = createBrowserRouter ([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            
            {
                path:"/",
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
            },
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path:"/checkout",
                element: <CheckOut></CheckOut>
            }
        ]
    }
])

export default Router
