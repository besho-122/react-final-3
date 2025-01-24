import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashbordLayout' 
import Register from './pages/dashboard/user/register/Register' 
import Login from './pages/dashboard/user/login/Login'
import { ToastContainer } from 'react-toastify'
import UserLayout from './layouts/UserLayout'
import Home from './pages/dashboard/user/home/home'
import Categories from './pages/dashboard/user/category/Categories'
import Products from './pages/dashboard/user/products/Products'
import CategoryProducts from './pages/dashboard/user/products/CategoryProducts'
import ProductDetails from './pages/dashboard/user/products/ProductDetails'
function App() {
  const router =createBrowserRouter(
   [{
      path :'/auth',
      element: <AuthLayout/>,
      children : [
        {
        path:'register',
        element:<Register/>
      },
      {path :'login',
        element:<Login/>
      }

      ]
    },
    {
      path :'/dashboard',
      element: <DashboardLayout/>
    },
    {
      path :'/',
      element: <UserLayout/>,
      children : [
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/categories',
          element:<Categories/>
        } 
        , 
        {
          path :'/categories/:categoryId',
          element:<CategoryProducts/>
        },
        {
          path:'/products',
          element:<Products/>
        }
        ,
        {
          path:'/product/:productId',
          element:<ProductDetails/>
        }
       
      ]

    },
   

      
    
        
   
  ]
  )
  return (
    <>
    <ToastContainer/>
    <RouterProvider router={router}/>
     <div className='main'>
      </div>
    </>
   
  )
}

export default App
