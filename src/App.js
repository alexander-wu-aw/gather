import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import axios from 'axios'


import ProjectDash from './Components/ProjectDashboardComponents/ProjectDash';
import Sidebar from "./Components/Sidebar"
import ProjectPage from "./Components/ProjectPageComponents/ProjectPage"
import FilePage from "./Components/FilePageComponents/FilePage"
import LogIn from './LogIn/LogIn';

import { Route, NavLink, BrowserRouter, Redirect, Switch } from "react-router-dom";

import { FaSearch } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io";
import { tsConstructSignatureDeclaration } from '@babel/types';


class App extends Component {
  constructor(){
    super()
    this.login = this.login.bind(this)
  }

  login(){
    this.componentDidMount()
  }

  componentDidMount() {
    axios.get(
      'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/dashboard?token=' + sessionStorage.getItem('userToken')
    )
      .then(data => {
        console.log('https://mongo-proj-ic8xgr.turbo360-vertex.com/api/dashboard?token=' + sessionStorage.getItem('userToken'))
        console.log("dashboard",data)
        this.props.dispatch({ type: "LOAD_PROJECTS", data: data.data.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    axios.get('https://mongo-proj-ic8xgr.turbo360-vertex.com/api/validate-token?token='+sessionStorage.getItem('userToken'))
    .then(data=>{
      console.log("validation",data)
    })
    return (
      <BrowserRouter>
        <Route path="/" component={() => {
          if (sessionStorage.getItem('userToken') !== null) {
            return (
              <React.Fragment>
                <Sidebar/>
              <div className="main">
                <Switch>
                  <Route exact path="/project-dashboard" component={()=><ProjectDash getData={this.componentDidMount}/>} />
                  {/* <Route path="/project/:project_id" component={ProjectPage} /> */}
                  {this.props.projects.map((project) => <Route path={"/project/" + project._id} key={project._id} component={() => { return <ProjectPage id={project._id} name={project.projectName} /> }} />)}
                  <Route path="/file" component={FilePage} />
                  {/* <Route path="/" component={()=> <Redirect to ="/project-dashboard"/>}/> */}
                </Switch>
              </div>
              </React.Fragment>
                )
          }
          else {
            return (<React.Fragment><Redirect to='/login' /><LogIn login={this.login}/> </React.Fragment>)
          }
        }} />


        {/* <div className="sidebar">
          <NavLink className="sidebar-title" to="/project-dashboard">
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

          <div className={"sidebar-nav-heading " + projectHeadingActive}>
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
            {this.props.projects.sort((a, b) => {
                  a = new Date(a.lastEdited);
                  b = new Date(b.lastEdited);
                  return a>b ? -1 : a<b ? 1 : 0;
              }).map((project) => {
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
          {this.props.projects.map((project) => <Route exact path={"/project/"+project._id} key={project._id} component={ () => {return <ProjectPage id={project._id} name={project.projectName}/>}} /> )}
          <Route path="/file" component={FilePage} />
        </div> */}
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
