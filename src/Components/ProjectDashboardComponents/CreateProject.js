import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

import axios from 'axios';



class CreateProject extends Component {
    constructor(props){
        super(props)
        this.state = {
            projectName: " "
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const data = JSON.stringify({
            projectName: this.state.projectName,
        });
        axios.post("https://mongo-proj-ic8xgr.turbo360-vertex.com/api/project-create?userName=Nicole", data)
        .then(data => {
            console.log(data.data.project._id)
            this.props.history.push(('/project/' + data.data.project._id))
            window.location.reload();
        })
        .catch(error => {
            console.log(error)
        })

    }
    render() {
        return (
            <div className="popup-create-prjt">
                <div className="create-prjt">
                    <h2>Give your project a name</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Project Title
                        <br />
                            <input type="text" name="projectName" value={this.state.projectName} onChange={this.handleChange} />
                        </label>
                        <input className="create-prjt-submit" type="submit" value="Create New Project" />

                    </form>
                </div>
                <div onClick={this.props.closeAddProject} id="close-CreateProject"></div>
            </div>
        );
    }
}

export default withRouter(CreateProject);
