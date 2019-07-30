import React, {Component} from 'react';
import './App.css';

import ProjectDash from './Components/ProjectDashboardComponents/ProjectDash';
import ChatPage from "./Components/ChatComponents/ChatPage";
import SidebarProject from "./Components/SidebarProject"
import CreateProject from "./Components/ProjectDashboardComponents/CreateProject";
import ProjectPage from "./Components/ProjectPageComponents/ProjectPage"
import FilePage from "./Components/FilePageComponents/FilePage"

import {Route, NavLink, BrowserRouter} from "react-router-dom";

import { FaSearch } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io";


class App extends Component{

  render(){
    return (
      <BrowserRouter>
          <div className="sidebar">
            <NavLink className ="sidebar-title" to="/">
              <span>
                  gather
              </span>
            </NavLink>
              <div className="sidebar-search">
                  <button type="submit" className="sidebar-search-btn">
                      <FaSearch/>
                  </button>
                  <input type="text" className="sidebar-search-input" placeholder="Search for a project or file"/>
              </div>
              <div className="sidebar-nav-heading heading-active">
                <NavLink className ="sidebar-nav-heading-title" to="/project-dashboard">
                  <span >
                      Projects
                  </span>
                </NavLink>
                  <button className="sidebar-nav-heading-btn">
                      <IoIosAddCircleOutline/>
                  </button>
              </div>
              <div className="sidebar-nav">
                  <SidebarProject/>
                  <SidebarProject/>
                  <SidebarProject/>
                  <SidebarProject/>
                  <SidebarProject/>
                  <SidebarProject/>
                  <SidebarProject/>

              </div>
          </div>
          <div className="main">
          <Route exact path="/" component={ProjectDash} />
          <Route path="/project-dashboard" component={ProjectDash} />
          <Route path="/add-project" component={CreateProject} />
          <Route path="/airbnb" component={ProjectPage} />
          <Route path="/roundone" component={FilePage} />
          </div>
      </BrowserRouter>
    );
    }
  } 
export default App;
