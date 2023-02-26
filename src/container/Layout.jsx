import React from 'react';
import { useAuth } from '../components/Auth';
import { SideBar } from '../components/SideBar';



const Layout = (props) => {
    const auth = useAuth();
    console.log(auth);
    
    return (
        <>
            {/* <SideBar showComponent={() => logued} children={props.children} /> */}
            {auth.user !== null  && <SideBar children={props.children} />}
        </>
          
    );
}

export default Layout;