import React, {Component} from 'react';
import './ProjectDash.css';
import ProjectModule from './ProjectModule';
import { IoIosAddCircleOutline } from "react-icons/io";
import {FaAngleDown} from "react-icons/fa";

import {NavLink} from "react-router-dom";



class ProjectDash extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

    render(){
        return (
        <div className="projects">
              <nav className="navbar">
                <div>
                    <a className="navbar-filter underline-from-center" href="#">All</a>
                    <a className="navbar-filter underline-from-center" href="#">Current</a>
                    <a className="navbar-filter underline-from-center" href="#">Completed</a>
                </div>
                <div className="navbar-sort">
                  Sort by <strong>due date</strong> <FaAngleDown/>
                </div>
                      <a className="profile">Ben Nelly
                       <img className="profile-pic" src="https://media.licdn.com/dms/image/C4E03AQGBYWT96u1X3A/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=-RAPE_wtKkE4OYJoddHusCvxVwQ3SU4Vam5n0n7Qn7w" alt=""/>
                      </a>
              </nav>

              <div className="project-all" href="/add-project">
              <NavLink to="/add-project">
                <div className="project-add">
                    Add a new project
                  <div className="project-add-btn">
                    <IoIosAddCircleOutline/>
                  </div>
                </div>
                </NavLink>
                  <ProjectModule/>
                  <ProjectModule/>
                  <ProjectModule/>
                  <ProjectModule/>
                  <ProjectModule/>
                  <ProjectModule/>
                  <ProjectModule/>
                  <ProjectModule/>
                  <ProjectModule/>
                  <ProjectModule/>
              </div>
        </div>
        );
        }
}

export default ProjectDash;
