import React from 'react';
import { SideBar } from '../components/SideBar';



const Layout = (props) => {
    return (
        // < React.Fragment>
            <SideBar>
                
                {props.children}
                
            </SideBar>
        // </React.Fragment>
    );
}

export default Layout;