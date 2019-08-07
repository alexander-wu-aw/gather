import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import axios from 'axios'


import ProjectDash from './Components/ProjectDashboardComponents/ProjectDash';
import SidebarProject from "./Components/SidebarProject"
import CreateProject from "./Components/ProjectDashboardComponents/CreateProject";
import ProjectPage from "./Components/ProjectPageComponents/ProjectPage"
import FilePage from "./Components/FilePageComponents/FilePage"

import { Route, NavLink, BrowserRouter } from "react-router-dom";

import { FaSearch } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io";
import { stat } from 'fs';


class App extends Component {

  componentDidMount() {
    axios.get(
      'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/dashboard?userName=Nicole'
    )
      .then(data => {
        this.props.dispatch({ type: "LOAD_PROJECTS", data: data.data.data })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="sidebar">
          <NavLink className="sidebar-title" to="/">
            <span>
              gather
              </span>
          </NavLink>
          <div className="sidebar-search">
            <button type="submit" className="sidebar-search-btn">
              <FaSearch />
            </button>
            <input type="text" className="sidebar-search-input" placeholder="Search for a project or file" />
          </div>

          <div className="sidebar-nav-heading heading-active">
            <NavLink className="sidebar-nav-heading-title" to="/project-dashboard">
              <span >
                Projects
                  </span>
            </NavLink>
            <button className="sidebar-nav-heading-btn">
              <IoIosAddCircleOutline />
            </button>
          </div>

          <div className="sidebar-nav">
            {this.props.projects.map((project) => {
              if (this.props.selected_project === project._id) {
                return <SidebarProject key={project._id} id={project._id} name={project.projectName} active="true" />
              }
              else {
                return <SidebarProject key={project._id} id={project._id} name={project.projectName} active="false" />
              }
            })}
          </div>
        </div>
        <div className="main">
          <Route exact path="/" component={ProjectDash} />
          <Route path="/project-dashboard" component={ProjectDash} />
          <Route path="/project" component={ProjectPage} />
          <Route path="/roundone" component={FilePage} />
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.data,
  projects: state.projects,
  selected_project: state.selected_project
})

export default connect(mapStateToProps)(App);
