import React, {Component} from 'react';
import './Module.css';

import { connect } from "react-redux";

import { NavLink} from "react-router-dom";
import {FaEllipsisV} from "react-icons/fa";




class FileModule extends Component{

    constructor(props){
        super(props)
        this.state = {
            title: this.props.file.projectDocName,
            img: this.props.file.projectDocLink,
            editDate: this.props.file.lastEdited,
            id: this.props.id
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        // this.props.dispatch({ type: "SELECT_FILE", selected_file: this.state.id, selected_file_link: this.state.img })
    }

    render(){

        const crntDate = new Date()
        const editDate = new Date(this.state.editDate)

        const diffTime = Math.abs(crntDate.getTime() - editDate.getTime())
        const diffMin = Math.floor( diffTime/ (1000 * 60)); 
        const diffHour = Math.floor( diffTime/ (1000 * 60 * 60)); 
        const diffDay = Math.floor( diffTime/ (1000 * 60 * 60 * 24)); 
        function monthDiff(d1, d2) {
            var months;
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth();
            months += d2.getMonth();
            return months <= 0 ? 0 : months;
        }
        const diffMonth = monthDiff(editDate, crntDate) 
        const diffYear = crntDate.getFullYear() - editDate.getFullYear()

        var lastEdited="";
        if(diffMin  < 1){
            lastEdited = "Edited less than a minute ago"
        }
        else if (diffMin === 1){
            lastEdited = "Edited 1 minute ago"
        }
        else if(diffHour < 1){
            lastEdited = "Edited " + diffMin + " minutes ago"
        }  
        else if(diffHour === 1){
            lastEdited = "Edited 1 hour ago"
        }
        else if (diffDay < 1){
            lastEdited = "Edited " + diffHour + " hours ago"
        }
        else if (diffDay === 1){
            lastEdited = "Edited 1 day ago"
        }
        else if (diffDay <30){
            lastEdited = "Edited " + diffDay + " days ago"
        }
        else if (diffMonth === 1 ){
            lastEdited = "Edited 1 month ago"
        }
        else if (diffMonth < 12 ){
            lastEdited = "Edited " + diffMonth + " months ago"
        }
        else if (diffYear ===1){
            lastEdited = "Edited 1 year ago"
        }
        else {
            lastEdited = "Edited " + diffYear + " years ago"
        }

        return (
            <NavLink onClick={this.handleClick} className="module-margin" to={"/file?accessType=freelancer&projectId="+this.props.selected_project+"&fileURL="+this.state.img}>
                <div className= "module">
                    <img className="module-img" src={this.state.img} alt=""/>
                    <div className='module-desc'>
                        <h4>{this.state.title}</h4>
                        <p>{lastEdited}</p>
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
export default connect(mapStateToProps)(FileModule);