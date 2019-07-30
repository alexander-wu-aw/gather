import React, { Component } from 'react';
import FileModule from "./FileModule";
import './ProjectPage.css';

import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";



class ProjectPage extends Component {

    render() {
        return (
            <div className="files">
                <nav className="navbar">
                    <div className="history">
                        <NavLink to="/project-dashboard">Projects</NavLink>
                        <FaAngleRight style={{ fontSize: "25px", margin: "0 6px" }} />
                        Airbnb
                    </div>

                    <a className="profile">Ben Nelly
                       <img className="profile-pic" src="https://media.licdn.com/dms/image/C4E03AQGBYWT96u1X3A/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=-RAPE_wtKkE4OYJoddHusCvxVwQ3SU4Vam5n0n7Qn7w" alt="" />
                    </a>
                </nav>
                <div className="project-title">
                        Airbnb Design Project
                </div>
                <div className="files-all">
                    <div className="project-add">
                        Add a new <br/>file
                        <div className="project-add-btn">
                            <IoIosAddCircleOutline />
                        </div>
                    </div>

                    <FileModule />
                    <FileModule />
                    <FileModule />
                    <FileModule />
                    <FileModule />
                    <FileModule />
                    <FileModule />
                    <FileModule />
                    <FileModule />
                    <FileModule />
                </div>
            </div>

        );
    }
}

export default ProjectPage;