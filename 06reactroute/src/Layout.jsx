import React from 'react'

import {Outlet} from "react-router-dom"
import Header from './componants/Header/Header'
import Footer from './componants/Footer/Footer'



function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
