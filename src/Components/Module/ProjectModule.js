import React, {Component} from 'react';
import './Module.css';
import {connect} from "react-redux";

import { NavLink} from "react-router-dom";
import {FaEllipsisV} from "react-icons/fa";




class ProjectModule extends Component{

    constructor(props){
        super(props)
        this.state = {
            title: this.props.project.projectName,
            editDay: "five",
            img: this.props.project.projectpic
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick(){
        this.props.dispatch({type: "SELECT_PROJECT", selected_project: this.props.id})
    }

    render(){
        return (
            <NavLink className="module-margin" to="/project" onClick={this.handleClick}>
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

const mapStateToProps = (state) => ({
    selected_project: state.selected_project,
  })
export default connect(mapStateToProps)(ProjectModule);
