import React, {Component} from 'react';
import {NavLink} from "react-router-dom";



class SidebarProject extends Component{

    render(){
        return (
            <NavLink className ="sidebar-nav-project" to="/airbnb">
                <span >
                    Airbnb
                </span>
            </NavLink>
        );
        }
}

export default SidebarProject;