import React from 'react'
import {FaHome, FaPhoneAlt, FaEnvelope} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
function Footer() {
  return (
    <div className='bg-dark'>
    <div className="container">
      <div className='row py-5 text-white'>
        <div className='col-md-4 col-sm-12'>
          <h4 className='text-warning'>About Website</h4>
          <p>This website is developed by Bachelor studens of ADA University and demonstrates database about the world ranked cinema works.</p>
        </div>
        <div className='col-md-3 col=sm-12'>
          <h4>Authors</h4>
          <p>Sanan MARDANLI</p>
          <p>Turgay FARHADLI</p>
          <p>Atilla SAFARLI</p>
        </div>
        <div className='col-md-3 col-sm-12'>
          <h4>Useful links</h4>
          <p><a href='https://www.instagram.com/_senan_m_/'>Get in touch with Sanan</a></p>
          <p><a href='https://www.instagram.com/sharifli.atilla/'>Get in touch with Atilla</a></p>
          <p><a href='https://www.instagram.com/phturgay/'>Get in touch with Turgay</a></p>          
        </div>
        <div className='col-md-3 col-sm-12'>
          <h4>Address</h4>
          <FaHome className='me-2'/>ADA University <br/>
          <FaPhoneAlt className='me-2' /> 994+ 055 690 51 39<br/>
          <FaEnvelope className='me-2' /> tferhadli14021@ada.edu.az<br/>
        </div>
      </div>
    </div>
    <p className='text-white pb-5'>
      @Copyrights Belong to SAT team (2023)
      </p>
    </div>
  )
}

export default Footer
