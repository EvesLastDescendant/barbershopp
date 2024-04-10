import { createBrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

import PageLayout from "./layout/pagelayout";

import Error from './error'
import Home from "./routes/home";
import Contact from "./routes/contact";
import About from "./routes/about";
import Bookings from "./routes/bookings";
import SignIn from "./routes/signIn";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "our story",
                element: <About />
            },
            {
                path: "bookings",
                element: <Bookings />
            },
            {
                path: "signin",
                element: <SignIn/>
            }
        
        ]
    }
])