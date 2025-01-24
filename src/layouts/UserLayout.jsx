import React from 'react'
import CustomNavBar from '../components/dashboard/user/navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
export default function UserLayout() {
  return (
    <>
    <CustomNavBar/>
    <Outlet/>
    </>
  )
}
