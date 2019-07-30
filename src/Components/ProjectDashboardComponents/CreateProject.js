import React, {Component} from 'react';
import {Route, NavLink, BrowserRouter} from "react-router-dom";


class CreateProject extends Component{

    render(){
        return (
            <div className="create-prjt">
                <h2>Create a new project</h2>
                <p>Add some basic details to set up your new project -you can always add more later!</p>

                <form>
                    <label>
                        Project Title
                        <br/>
                        <input type="text"/>
                    </label>
                    <input className="create-prjt-submit" type="submit" value="Create New Project" />

                </form>
            </div>
        );
        }
}

export default CreateProject;