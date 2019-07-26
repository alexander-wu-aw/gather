import React, {Component} from 'react';
import {Route, NavLink, BrowserRouter} from "react-router-dom";



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