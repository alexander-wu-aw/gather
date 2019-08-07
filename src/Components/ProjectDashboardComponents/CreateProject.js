import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter } from "react-router-dom";


class CreateProject extends Component {

    render() {
        return (
            <div className="popup-create-prjt">
                <div className="create-prjt">
                    <h2>Give your project a name</h2>

                    <form>
                        <label>
                            Project Title
                        <br />
                            <input type="text" />
                        </label>
                        <input className="create-prjt-submit" type="submit" value="Create New Project" />

                    </form>
                </div>
                <div onClick={this.props.closeAddProject} id="close-CreateProject"></div>
            </div>
        );
    }
}

export default CreateProject;