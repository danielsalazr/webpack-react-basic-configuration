import React from 'react'
import { useState } from 'react'
import Header from './Header';
import ImgCards from './ImgCards';
import Footer from './Footer';
import Aside from './Aside';
import { Link, NavLink } from 'react-router-dom';
import InfoSection from './InfoSection';
import InfoCenteredSection from './InfoCenteredSection';
import CounterSection from './ConterSection';



function SideBar( { children } ) {
const [hideMenu, setHideMenu] = useState(false);

    const changeState =  () => {
        setHideMenu(!hideMenu)
    } 

    const menuData = [];   
    menuData.push({
        title: 'Quienes Somos',
        icon: 'bx bxs-dashboard',
        pathRoute: '/',
    });
    menuData.push({
        title: 'Nuestros Servicios',
        icon: 'bx bx-user-check',
        pathRoute: '/a',
    });
    menuData.push({
        title: 'productos',
        icon: 'bx bx-history',
        pathRoute: '/ventas',
    });
    menuData.push({
        title: 'Proyectos',
        icon: 'bx bx-desktop',
        pathRoute: '/c',
    });
    menuData.push({
        title: 'Tutoriales',
        icon: 'bx bx-food-menu',
        pathRoute: '/d',
    });
    menuData.push({
        title: 'usuarios',
        icon: 'bx bx-user-check',
        pathRoute: '/e',
    });
    menuData.push({
        title: 'Agendar Cita',
        icon: 'bx bx-edit-alt',
        pathRoute: '/f',
    });

    menuData.push({
        title: 'Cerrar Sesión',
        icon: 'bx bx-user-x',
        pathRoute: '/g',
    });
    
    
  return (
    <>
        {/* <div
        className={`${!hideMenu? "active-nav":""} side-navbar d-flex justify-content-between flex-wrap flex-column`}
        id="sideb ar"
        >
            
            <ul className="nav flex-column text-white w-100">
                <a href="#" className="nav-link h3 text-white my-2">
                Menu 
                </a>
                {menuData.map( mData => (
                    <MenuLink toPath={mData} />
                ))
                }
            </ul>
            <NavLink to="/" className="nav-link rounded text-white">
                <i className="bx bx-user-x"></i>
                <span className="mx-2">Cerrar Sesion</span>
            </NavLink>
        </div> */}

        <Header  changeState={changeState} />
        
        {/* <Aside /> */}
        <div 
            // className="panel-body  overflow-auto pageBody" 
            // style={{
            //     height: "fit-content",
            // }}
        >
            {children}
        </div>
        {/* <InfoCenteredSection /> */}
        <hr class="featurette-divider"></hr>
        <InfoSection />
        <hr class="featurette-divider"></hr>
        <InfoSection />
        
        <InfoSection />
        <hr class="featurette-divider"></hr>
        

        {/* contenedor para introducir el contenido */}
        {/* <div className={`${!hideMenu? "active-cont":""} pb-1  my-container`}>
            
        </div> */}
        <ImgCards />
        <hr class="featurette-divider"></hr>
        <CounterSection />
        <hr class="featurette-divider"></hr>
        <Footer />

        
    </>

  )
}

function MenuLink( { toPath }) {
    return (
        <li className='nav-link'>
            {/* <a href={toPath.pathRoute} className="rounded">
                <i className={toPath.icon}></i>
                <span className="mx-2">{toPath.title}</span>
            </a> */}
            <NavLink
                className="rounded"
                style={({ isActive }) => ({
                // color: isActive ? 'Yellow' : 'white',
                fontWeight: isActive ? 'bold' : '',
                fontSize: isActive ? '1.2rem' : '',
                })}
                to={toPath.pathRoute}
            >
                <i className={toPath.icon}></i>
                <span className="mx-2">{toPath.title}</span>
            </NavLink>
            
        </li>
    )
}


export { SideBar } 



