import ReactDOM from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import Product from './components/Product.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar></Navbar><Home></Home></>,
    },
    {
        path: "/products",
        element: <><Navbar></Navbar><Products></Products></>,
    },
    {
        path: "/products/:id",
        element: <><Navbar></Navbar><Product></Product></>,
    },
    {
        path: "/about",
        element: <><Navbar></Navbar><About></About></>,
    },
    {
        path: "/contact",
        element: <><Navbar></Navbar><Contact></Contact></>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
   
)
