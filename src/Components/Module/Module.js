import React, {Component} from 'react';
import './Module.css';

import { NavLink} from "react-router-dom";
import {FaEllipsisV} from "react-icons/fa";




class FileModule extends Component{

    constructor(){
        super()
        this.state = {
            title: "Airbnb",
            editDay: "five",
        }

    }

    render(){
        return (
            <NavLink className="module-margin" to="/roundone">
                <div className= "module">
                    <img className="module-img" src="data:image/jpeg;base64,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" alt=""/>
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