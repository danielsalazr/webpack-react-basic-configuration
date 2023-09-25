import React from 'react'
import encabezado from '@logos/dosificando.png'
import logoOptica from '@logos/bienestar_optica.png'
import { useAuth } from './Auth';
import { Link } from 'react-router-dom';
// import encabezado from '../assets/images/logos/dosificando.png';
// import "@styles/side_bar_menu.css"

const Header = (props) => {

  const auth = useAuth();
  console.log(auth);
  
  return (
    <>
    <div className='header mb-2' id='header'>
      <nav className=" navbar top-navbar">
      
      <a 
          className="btn border-0 menuBtn"
          id="menu-btn"
          onClick={ props.changeState}
          >
              <i className="bx bx-menu"></i>
          </a>
          <span className='h3 text-light'>Bienestar Optica</span>
          <div style={{
            display: "flex",
            alignItems:'center',
            }}>
            {/* { auth.user !== null && <span style={{marginRight: "20px"}}>{auth.user}</span>} */}
            <span style={{
              marginRight: "20px",
              fontWeight: "bold",
              fontSize: "1.1rem",
              }}>{auth.user}
            </span>

            {
              !auth.user && <Link to="/login" style={{
              marginRight: "20px",
              fontSize: "1.2rem",
              color:"white"
              }}>Login</Link> 
            }

            <img className='header-logo' src={logoOptica}  alt="" />
          </div> 
      
          
          
      </nav>
      </div>
      </>
  )
}

export default Header


