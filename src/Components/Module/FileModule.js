import React, {Component} from 'react';
import './Module.css';

import { NavLink} from "react-router-dom";
import {FaEllipsisV} from "react-icons/fa";




class FileModule extends Component{

    constructor(props){
        super(props)
        this.state = {
            title: this.props.project.projectName,
            editDay: "five",
            img: this.props.project.projectpic
        }

    }

    render(){
        return (
            <NavLink className="module-margin" to="/roundone">
                <div className= "module">
                    <img className="module-img" src={this.state.img} alt=""/>
                    <div className='module-desc'>
                        <h4>{this.state.title}</h4>
                        <p>Edited {this.state.editDay} days ago</p>
                    </div>
                    <span>
                    <button className="module-options"><FaEllipsisV style={{ fontSize: "22px"}}/></button>

                    </span>
                </div>
            </NavLink>

        );
        }
}

export default FileModule;