import React from 'react'
import { useState } from 'react'
import Header from './Header';

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
    pathRoute: '/',
});
menuData.push({
    title: 'productos',
    icon: 'bx bx-history',
    pathRoute: '/',
});
menuData.push({
    title: 'Proyectos',
    icon: 'bx bx-desktop',
    pathRoute: '/',
});
menuData.push({
    title: 'Tutoriales',
    icon: 'bx bx-food-menu',
    pathRoute: '/',
});
menuData.push({
    title: 'usuarios',
    icon: 'bx bx-user-check',
    pathRoute: '/',
});
menuData.push({
    title: 'Agendar Cita',
    icon: 'bx bx-edit-alt',
    pathRoute: '/',
});

menuData.push({
    title: 'Cerrar Sesión',
    icon: 'bx bx-user-x',
    pathRoute: '/',
});
   
    
  return (
    <div>
        <div
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
        </div>

        {/* Boton para esconder menu */}
        <div className={`${!hideMenu? "active-cont":""} p-1  my-container`}>
            <Header  changeState={changeState} />
            <div className="panel-body ps-5 " >
                {children}
            </div>
        </div>
    </div>

  )
}

function MenuLink( { toPath }) {
    return (
        <li className='nav-link'>
            <a href={toPath.pathRoute} className="rounded">
                <i className={toPath.icon}></i>
                <span className="mx-2">{toPath.title}</span>
            </a>
        </li>
    )
}


export { SideBar } 



