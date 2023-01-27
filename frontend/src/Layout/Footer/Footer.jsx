import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
<footer>
  <div className="container">
    <div className="d-flex align-items-center justify-content-between">
<span>2023 All rights reserved | This template is made with  by Colorlib
</span>
<div className="social">
  <ul className='d-flex align-items-center list-unstyled'>
    <li><i className="fa-brands fa-twitter"></i></li>
    <li><i className="fa-brands fa-linkedin-in"></i></li>
    <li><i className="fa-brands fa-instagram"></i></li>
    <li><i className="fa-brands fa-facebook-f"></i></li>
    <li><i className="fa-brands fa-pinterest-p"></i></li>
    </ul>
</div>
    </div>
  </div>
</footer>
  )
}

export default Footer