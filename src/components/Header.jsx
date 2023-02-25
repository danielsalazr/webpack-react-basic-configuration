import React from 'react'
import encabezado from '@logos/dosificando.png'
// import encabezado from '../assets/images/logos/dosificando.png';
// import "@styles/side_bar_menu.css"

const Header = (props) => {
  return (
    <div>
      <nav className="navbar top-navbar navbar-light bg-light px-5 mb-2">
          <a 
          className="btn border-0"
          id="menu-btn"
          onClick={ props.changeState}
          >
              <i className="bx bx-menu"></i>
          </a>
          <span className='h3'>Dosificando.com</span> 
          <img src={encabezado} width="120" height="20" alt="" />
      </nav>
    </div>
  )
}

export default Header


