import React, { Component } from 'react';
import axios from 'axios'
import {connect} from "react-redux";
import './ProjectDash.css';

import ProjectModule from '../Module/ProjectModule';
import { NavLink } from "react-router-dom";

import { IoIosAddCircleOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import CreateProject from './CreateProject';

class ProjectDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addProject: false,
    }
    this.addProject = this.addProject.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

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
            <a className="navbar-filter underline-from-center" href="#">All</a>
            <a className="navbar-filter underline-from-center" href="#">Current</a>
            <a className="navbar-filter underline-from-center" href="#">Completed</a>
          </div>
          <div className="navbar-sort">
            Sort by <strong>due date</strong> <FaAngleDown />
          </div>
          <a className="profile">{this.props.username}
              <img className="profile-pic" src="https://media.licdn.com/dms/image/C4E03AQGBYWT96u1X3A/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=-RAPE_wtKkE4OYJoddHusCvxVwQ3SU4Vam5n0n7Qn7w" alt="" />
          </a>
        </nav>

        <div className="project-all" href="/add-project">
          <div onClick={this.addProject} className="project-add">
            Add a new project
                  <div className="project-add-btn">
              <IoIosAddCircleOutline />
            </div>
          </div>
          {this.props.projects.map((project) => <ProjectModule key = {project._id} id = {project._id} project ={project}/>)}
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
  projects: state.projects
})
export default connect(mapStateToProps)(ProjectDash);
