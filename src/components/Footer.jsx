import React from 'react'
import { FaUniversity, FaPhoneAlt} from "react-icons/fa";
import { IoIosLocate } from "react-icons/io";
import "./Footer.css";
function Footer() {

  return (
    <div>
      <footer>
        <div className="container">
          <div className="first section">
            <h2>About Website</h2>
            <div className="content">
              <p>
                This website is developed by Bachelor studens of ADA University
                and demonstrates database about the world ranked cinema works.
              </p>
              <br />
              <div className="social">
                <a href="https://multiwebpress.com">Link 1</a>
                <a href="https://instagram.com/multiwebpress">Link 2</a>
                <a href="https://www.youtube.com/channel/UCvB-4cVzkhvu4TkTy1hs9zA">
                  Link 3
                </a>
              </div>
            </div>
          </div>
          <div className="second section">
            <h2>Authors</h2>
            <div className="content">
              <br />
              <p>Turgay FARHADLI</p>
              <br />
              <p>Sanan MARDANLI</p>
              <br />
              <p>Atilla SHARIFLI</p>
            </div>
          </div>
          <div className="right section">
            <h2>Address</h2>
            <div className="content">
              <div className="address">
                <FaUniversity />
                <p className="text">ADA University</p>
              </div>
              <br />
              <div className="phone">
                <FaPhoneAlt />
                <p className="text"> +994 12 437 32 35</p>
              </div>
              <br />
              <div className="email">
                <IoIosLocate />
                <p className="text"> 61 Ahmadbay Agha-Oglu Street, Baku, Azerbaijan, AZ1008 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="cp">
            <div>
              <span>
                Powered By{" "}
                <a href="www.youtube.com">
                  © 2021 | All Rights Reserved | Made By SAT(Sanan, Atilla, Turqay) Team
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
