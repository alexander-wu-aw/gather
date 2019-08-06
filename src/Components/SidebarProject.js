import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';





class SidebarProject extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: this.props.name
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick(){
        this.props.dispatch({type: "SELECT_PROJECT", selected_project: this.props.id})
      }
    render(){
        if(this.props.active === "true"){
        return (
            <NavLink className ="sidebar-nav-project project-active" onClick={this.handleClick} to="/project" >
                <span >
                    {this.state.name}
                </span>
            </NavLink>
        );}
        else{
            return(
            <NavLink className ="sidebar-nav-project" onClick={this.handleClick} to="/project" >
            <span >
                {this.state.name}
            </span>
        </NavLink>
            )
        }
        }
}
const mapStateToProps = (state) => ({
    selected_project: state.selected_project,
  })
export default connect(mapStateToProps)(SidebarProject);