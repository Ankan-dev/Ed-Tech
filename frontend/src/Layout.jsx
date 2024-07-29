import React, { useEffect } from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'

const layout = () => {

    

    return (
        <>
            <Nav/>
            <Outlet />
            <Footer/>
        </>
    )
}

export default layout