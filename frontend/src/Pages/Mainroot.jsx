import React from 'react'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import {Outlet} from "react-router-dom"
const Mainroot = () => {
  return (
    <div>
<Header/>
<Outlet/>
<Footer/>
    </div>
  )
}

export default Mainroot