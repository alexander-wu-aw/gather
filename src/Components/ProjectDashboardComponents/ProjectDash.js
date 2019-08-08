import React, { Component } from 'react';
import {connect} from "react-redux";
import './ProjectDash.css';

import ProjectModule from '../Module/ProjectModule';
import { NavLink } from "react-router-dom";

import { IoIosAddCircleOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import CreateProject from './CreateProject';
import { stat } from 'fs';

class ProjectDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addProject: false,
      filter: "All"
    }
    this.addProject = this.addProject.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleClickAll = this.handleClickAll.bind(this)
    this.handleClickCurrent = this.handleClickCurrent.bind(this)
    this.handleClickCompleted = this.handleClickCompleted.bind(this)

  }
  handleClickAll(){
    this.setState({
      filter: "All"
    })
  }
  handleClickCurrent(){
    this.setState({
      filter: "Current"
    })
  }
  handleClickCompleted(){
    this.setState({
      filter: "Completed"
    })
  }
  addProject() {
    this.setState({
      addProject: !this.state.addProject
    });
  }
  componentDidMount(){
    this.props.dispatch({type: "SELECT_PROJECT", selected_project: ""})
  }
  render() {
    return (
      <div className="projects">
        <nav className="navbar">
          <div>
            <a className="navbar-filter underline-from-center" onClick={this.handleClickAll}>All</a>
            <a className="navbar-filter underline-from-center" onClick={this.handleClickCurrent}>Current</a>
            <a className="navbar-filter underline-from-center" onClick={this.handleClickCompleted}>Completed</a>
          </div>
          <div className="navbar-sort">
            Sort by <strong>due date</strong> <FaAngleDown />
          </div>
          <a className="profile">{this.props.username}
              <img className="profile-pic" src={this.props.profile_pic} alt="" />
          </a>
        </nav>

        <div className="project-all" href="/add-project">
          <div onClick={this.addProject} className="project-add">
            Add a new project
                  <div className="project-add-btn">
              <IoIosAddCircleOutline />
            </div>
          </div>
          {this.props.projects.map((project) => <ProjectModule key = {project._id} id = {project._id} project ={project} />)}
        </div>
        {this.state.addProject ?
          <>
            <CreateProject closeAddProject={this.addProject} />
          </> : null}
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  username: state.username,
  projects: state.projects,
  profile_pic: state.profile_pic
})
export default connect(mapStateToProps)(ProjectDash);
