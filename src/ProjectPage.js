import React, {Component} from 'react';
import './ProjectPage.css';


class ProjectPage extends Component{

    render(){
        return (
        <div>
            <nav class="navbar navbar-expand-md" data-menu-underline-from-center>
                <a class="navbar-brand" href="#">Projects</a>
                <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="main-navigation">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link underline-from-center" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link underline-from-center" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link underline-from-center" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>


        </div>
        );
        }
}

export default ProjectPage;
