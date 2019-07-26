import React, {Component} from 'react';
import './ProjectPage.css';
import ProjectModule from './ProjectModule';

class ProjectPage extends Component{

    render(){
        return (
        <div className="projects">
            <nav className="navbar navbar-expand-md" >
                <div className=" navbar-collapse" id="main-navigation">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link underline-from-center" href="#">All</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link underline-from-center" href="#">Current</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link underline-from-center" href="#">Completed</a>
                    </li>
                  </ul>
                </div>

                <a className = "profile">Ben Nelly
                <img className="profile-pic" src="https://media.licdn.com/dms/image/C4E03AQGBYWT96u1X3A/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=-RAPE_wtKkE4OYJoddHusCvxVwQ3SU4Vam5n0n7Qn7w" alt=""/>
                </a>
              </nav>

              <div className="project-all">
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

export default ProjectPage;
