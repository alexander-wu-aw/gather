import React, {Component} from 'react';
import './App.css';

import ProjectPage from './Components/ProjectPageComponents/ProjectPage';
import ChatPage from "./Components/ChatComponents/ChatPage";
import SidebarProject from "./Components/SidebarProject"

import {Route, NavLink, BrowserRouter} from "react-router-dom";

import { FaSearch } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io";


class App extends Component{

  render(){
    return (
      <div>
        <div className="sidebar">
            <div className="sidebar-title">
                gather
            </div>
            <div className="sidebar-search">
                <button type="submit" className="sidebar-search-btn">
                    <FaSearch/>
                </button>
                <input type="text" className="sidebar-search-input" placeholder="Search for a project or file"/>
            </div>
            <div className="sidebar-nav">
                <div className="sidebar-nav-heading heading-active">
                    <div className="sidebar-nav-heading-title">
                        Projects
                    </div>
                    <button className="sidebar-nav-heading-btn">
                        <IoIosAddCircleOutline/>
                    </button>
                </div>

                <SidebarProject/>
                
            </div>
        </div>
        <div className="main">
          <ProjectPage />
        </div>
      </div>
    );
    }
  } 
export default App;
