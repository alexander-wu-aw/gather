import React, {Component} from 'react';
import './ProjectPage.css';
import ProjectModule from './ProjectModule';

class ProjectPage extends Component{

    render(){
        return (
        <div class="projects">
            <nav class="navbar navbar-expand-md" >
                <p class="navbar-brand" >Projects</p>
                <div class=" navbar-collapse" id="main-navigation">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link underline-from-center" href="#">All</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link underline-from-center" href="#">Current</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link underline-from-center" href="#">Completed</a>
                    </li>
                  </ul>
                </div>

                <a class = "profile">Ben Nelly
                <img class="profile-pic" src="https://media.licdn.com/dms/image/C4E03AQGBYWT96u1X3A/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=-RAPE_wtKkE4OYJoddHusCvxVwQ3SU4Vam5n0n7Qn7w" alt=""/>
                </a>
              </nav>

              <div class="project-all">
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
