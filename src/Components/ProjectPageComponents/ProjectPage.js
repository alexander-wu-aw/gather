import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'


import FileModule from "../Module/FileModule";
import './ProjectPage.css';

import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";



class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        this.props.dispatch({type: "SELECT_PROJECT", selected_project: this.props.id, selected_project_name: this.props.name})
        
        axios.get(
            'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/project-pictures?_id=' + this.props.selected_project
        )
            .then(data => {
                console.log("project: ", data.data.data.projectDoc)
                this.props.dispatch({ type: "LOAD_FILES", files: data.data.data.projectDoc })
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        console.log("file",this.props.files)
        return (
            <div className="files">
                <nav className="navbar">
                    <div className="history">
                        <NavLink to="/project-dashboard">Projects</NavLink>
                        <FaAngleRight style={{ fontSize: "25px", margin: "0 6px" }} />
                        {this.props.selected_project_name}
                    </div>

                    <a className="profile">{this.props.username}
                        <img className="profile-pic" src="https://media.licdn.com/dms/image/C4E03AQGBYWT96u1X3A/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=-RAPE_wtKkE4OYJoddHusCvxVwQ3SU4Vam5n0n7Qn7w" alt="" />
                    </a>
                </nav>
                <div className="project-title">
                    {this.props.selected_project_name}
                </div>
                <div className="files-all">
                    <div className="file-add">
                        Add a new <br />file
                        <div className="file-add-btn">
                            <IoIosAddCircleOutline />
                        </div>
                    </div>
                    {this.props.files ? this.props.files.map((file) => <FileModule key = {file._id} id = {file._id} file ={file}/>) : ""}
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    selected_project: state.selected_project,
    username: state.username,
    selected_project_name: state.selected_project_name,
    files: state.files
})
export default connect(mapStateToProps)(ProjectPage);