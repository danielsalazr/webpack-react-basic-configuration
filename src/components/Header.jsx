import React from 'react'
import encabezado from '@logos/dosificando.png'
import { useAuth } from './Auth';
import { Link } from 'react-router-dom';
import "@styles/bootstrap.min.css"
// import encabezado from '../assets/images/logos/dosificando.png';
// import "@styles/side_bar_menu.css"

const Header = (props) => {

  const auth = useAuth();
  console.log(auth);
  
  return (
    <>
      <header class="header">
        <div class="header_contact">
          <div class="company_logo">
            <div class="info">
            <span class="header_logo">Logo Logo</span>
              <span>Confecciones confecciones</span>
            </div>
          </div>

          <div class="content_info headersup">
            <div class="info">
              <i class="bx bxs-phone"></i>
              <a rel="nofollow noopener noreferer" href="tel:+57 315 555 5555">
                +57 315 555 5555
              </a>
            </div>

            <div class="info">
              <i class="bx bx-envelope"></i>
              <a href="mailto:comercial@refridcol.com">
              ventas@outlook.com
              </a>
            </div>
          </div>

          {/* <div class="social-box">
            <div class="info">
              <a
                target="_blank"
                rel="nofollow noopener noreferer"
                href="https://www.youtube.com/user/IndustriasRefridcol"
              >
                <i class="fa fa-youtube-square" aria-hidden="true"></i>
              </a>
            </div>
            <div class="info">
              <a
                target="_blank"
                rel="nofollow noopener noreferer"
                href="https://www.facebook.com/refridcol/?ref=hl"
              >
                {" "}
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
            </div>

            <div class="info">
              <a
                target="_blank"
                rel="nofollow noopener noreferer"
                href="https://www.linkedin.com/company/industrias-refridcol-s-a"
              >
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </div>
          </div> */}
        </div>

        <div class="header-container container">
          <div class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header


