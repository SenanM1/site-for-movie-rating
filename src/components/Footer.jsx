import React from "react";
import { FaUniversity, FaPhoneAlt } from "react-icons/fa";
import { IoIosLocate } from "react-icons/io";
import FooterCSS from "./Footer.module.css";
function Footer() {
  return (
    <div className={FooterCSS.body}>
      <footer>
        <div className={FooterCSS.container}>
          <div className={`${FooterCSS.first} ${FooterCSS.section}`}>
            <h2>About Website</h2>
            <div className={FooterCSS.content}>
              <p>
                This website is developed by Bachelor studens of ADA University
                and demonstrates database about the world ranked cinema works.
              </p>
              <br />
            </div>
          </div>
          <div className={`${FooterCSS.second} ${FooterCSS.section}`}>
            <h2>Authors</h2>
            <div className={FooterCSS.content}>
              <br />
              <p>Turgay FARHADLI</p>
              <br />
              <p>Sanan MARDANLI</p>
              <br />
              <p>Atilla SHARIFLI</p>
            </div>
          </div>
          <div className={`${FooterCSS.right} ${FooterCSS.section}`}>
            <h2>Address</h2>
            <div className={FooterCSS.content}>
              <div className={FooterCSS.address}>
                <FaUniversity />
                <p className={FooterCSS.text}>ADA University</p>
              </div>
              <br />
              <div className={FooterCSS.phone}>
                <FaPhoneAlt />
                <p className={FooterCSS.text}> +994 12 437 32 35</p>
              </div>
              <br />
              <div className={FooterCSS.email}>
                <IoIosLocate />
                <p className={FooterCSS.text}>
                  {" "}
                  61 Ahmadbay Agha-Oglu Street, Baku, Azerbaijan, AZ1008{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={FooterCSS.footer_bottom}>
          <div className={FooterCSS.cp}>
            <div>
              <span>
                Powered By{" "}
                <a href="www.youtube.com">
                  © 2021 | All Rights Reserved | Made By SAT(Sanan, Atilla,
                  Turqay) Team
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
