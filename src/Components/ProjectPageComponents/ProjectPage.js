import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import { withRouter } from 'react-router'

import FileModule from "../Module/FileModule";
import './ProjectPage.css';

import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";


class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploading: false
        }
        this.textInput = React.createRef();

        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleChangeUpload = this.handleChangeUpload.bind(this)
        this.handleSubmitUpload = this.handleSubmitUpload.bind(this)
        this.uploadComplete = this.uploadComplete.bind(this)



    }

    componentDidMount() {
        this.props.dispatch({ type: "SELECT_PROJECT", selected_project: this.props.id, selected_project_name: this.props.name })
        this.props.dispatch({ type: "LOAD_FILES", files: [] })


        axios.get(
            'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/project-pictures?_id=' + this.props.selected_project + "&userName=" + this.props.username
        )
            .then(data => {
                this.props.dispatch({ type: "LOAD_FILES", files: data.data.project.projectDoc, upload_info: data.data.policy })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleChangeUpload() {
        this.form.dispatchEvent(new Event("submit"));
    }
    handleSubmitUpload(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        var xhr = new XMLHttpRequest();
        // xhr.upload.addEventListener("progress", this.uploadProgress, false);
        xhr.addEventListener("load", this.uploadComplete, false);
        xhr.addEventListener("error", this.uploadFailed, false);
        xhr.addEventListener("abort", this.uploadCanceled, false);

        xhr.open("POST", this.props.upload_info.url, true);
        xhr.send(data);
    }
    uploadComplete(){
        axios.get("https://mongo-proj-ic8xgr.turbo360-vertex.com/api/update-project-documents?key=" + this.props.upload_info.fields.key+"&projectId="+this.props.selected_project+"&userName="+this.props.username)
        .then(res => window.location.reload())
        this.setState({
            uploading: true
        })
    }
    uploadFailed(){

    }
    uploadCanceled(){

    }


    render() {
        var uploadForm = ""
        if (this.props.upload_info) {
            uploadForm =
                <form onSubmit={this.handleSubmitUpload} ref={r => (this.form = r)}>
                    <input type="hidden" name="key" value={this.props.upload_info.fields.key} />
                    <input type="hidden" name="acl" value={this.props.upload_info.fields.acl} />
                    {/* <input type="hidden" name="success_action_redirect" value={this.props.upload_info.fields.success_action_redirect} /> */}
                    <input type="hidden" name="X-Amz-Credential" value={this.props.upload_info.fields["X-Amz-Credential"]} />
                    <input type="hidden" name="X-Amz-Algorithm" value={this.props.upload_info.fields["X-Amz-Algorithm"]} />
                    <input type="hidden" name="X-Amz-Date" value={this.props.upload_info.fields["X-Amz-Date"]} />
                    <input type="hidden" name="Policy" value={this.props.upload_info.fields.Policy} />
                    <input type="hidden" name="X-Amz-Signature" value={this.props.upload_info.fields["X-Amz-Signature"]} />
                    <label className="file-add">
                    Add a new <br />file
                        <div className="file-add-btn">
                            <IoIosAddCircleOutline />
        </div>
                    <input className="file-add-input" type="file" name="file" onChange={this.handleChangeUpload} required />
                    </label>
                    <br />
                    {/* <input type="submit" name="submit" value="Upload" /> */}
                </form>
        }

        var fileModules = "" ;
        if(this.props.files){
           fileModules = this.props.files.sort((a, b) => {
               a = new Date(a.lastEdited);
               b = new Date(b.lastEdited);
               return a>b ? -1 : a<b ? 1 : 0;
           })
           .map((file) => <FileModule key={file._id} id={file._id} file={file} />)
       }

       var uploadScreen = "";
       if(this.state.uploading){
           uploadScreen = <div className="uploadScreen"> Uploading...</div>
       }


        return (
            <div className="files">
                {uploadScreen}
                <nav className="navbar">
                    <div className="history">
                        <NavLink to="/project-dashboard">Projects</NavLink>
                        <FaAngleRight style={{ fontSize: "25px", margin: "0 6px" }} />
                        {this.props.selected_project_name}
                    </div>

                    <a className="profile">{this.props.username}
                        <img className="profile-pic" src={this.props.profile_pic} alt="" />
                    </a>
                </nav>
                <div className="project-title">
                    {this.props.selected_project_name}
                </div>
                <div className="files-all">
                    <div >
                        {/* Add a new <br />file
                        <div className="file-add-btn">
                            <IoIosAddCircleOutline />
        </div> */}

                        {uploadForm}
                    </div>
                    {fileModules}
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    selected_project: state.selected_project,
    username: state.username,
    selected_project_name: state.selected_project_name,
    files: state.files,
    profile_pic: state.profile_pic,
    upload_info: state.upload_info
})
export default connect(mapStateToProps)(withRouter(ProjectPage));
