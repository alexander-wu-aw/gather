import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'



import FileModule from "../Module/FileModule";
import './ProjectPage.css';

import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { tsConstructSignatureDeclaration } from '@babel/types';



class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.textInput = React.createRef();

        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleChangeUpload = this.handleChangeUpload.bind(this)
        this.handleSubmitUpload = this.handleSubmitUpload.bind(this)


    }

    componentDidMount() {
        this.props.dispatch({ type: "SELECT_PROJECT", selected_project: this.props.id, selected_project_name: this.props.name })
        this.props.dispatch({ type: "LOAD_FILES", files: [] })

        console.log('https://mongo-proj-ic8xgr.turbo360-vertex.com/api/project-pictures?_id=' + this.props.selected_project + "&userName=" + this.props.username)

        axios.get(
            'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/project-pictures?_id=' + this.props.selected_project + "&userName=" + this.props.username
        )
            .then(data => {
                console.log("I GOT IT", data.data)
                this.props.dispatch({ type: "LOAD_FILES", files: data.data.project.projectDoc, upload_info: data.data.policy })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleChangeUpload() {
    }
    handleSubmitUpload(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        // fetch(this.props.upload_info.url, { method: "POST", body: data })
        //     .then((response) => {
        //     console.log(response);
        //     response.json().then((data) => {
        //         console.log(data);
        //     });
        // });

        var xhr = new XMLHttpRequest();
        // xhr.upload.addEventListener("progress", this.uploadProgress, false);
        xhr.addEventListener("load", this.uploadComplete, false);
        xhr.addEventListener("error", this.uploadFailed, false);
        xhr.addEventListener("abort", this.uploadCanceled, false);

        xhr.open("POST", this.props.upload_info.url, true);
        xhr.send(data);
    }
    uploadComplete(){
        console.log("DONE")
        console.log("https://mongo-proj-ic8xgr.turbo360-vertex.com/api/update-project-documents?key=" + this.props.upload_info.fields.key+"&projectId="+this.props.selected_project+"&userName"+this.props.username)
        axios.get("https://mongo-proj-ic8xgr.turbo360-vertex.com/api/update-project-documents?key=" + this.props.upload_info.fields.key+"&projectId="+this.props.selected_project+"&userName"+this.props.username)
    }
    uploadFailed(){

    }
    uploadCanceled(){

    }


    render() {
        console.log("file", this.props.files)
        console.log("policy", this.props.upload_info)

        var uploadForm = ""
        if (this.props.upload_info) {
            uploadForm =
                <form onSubmit={this.handleSubmitUpload}>
                    <input type="hidden" name="key" value={this.props.upload_info.fields.key} />
                    <input type="hidden" name="acl" value={this.props.upload_info.fields.acl} />
                    {/* <input type="hidden" name="success_action_redirect" value={this.props.upload_info.fields.success_action_redirect} /> */}
                    <input type="hidden" name="X-Amz-Credential" value={this.props.upload_info.fields["X-Amz-Credential"]} />
                    <input type="hidden" name="X-Amz-Algorithm" value={this.props.upload_info.fields["X-Amz-Algorithm"]} />
                    <input type="hidden" name="X-Amz-Date" value={this.props.upload_info.fields["X-Amz-Date"]} />
                    <input type="hidden" name="Policy" value={this.props.upload_info.fields.Policy} />
                    <input type="hidden" name="X-Amz-Signature" value={this.props.upload_info.fields["X-Amz-Signature"]} />

                    <input type="file" name="file" onChange={this.handleChangeUpload} required />
                    <br />
                    <input type="submit" name="submit" value="Upload" />
                </form>

        }



        return (
            <div className="files">
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
                    <div className="file-add">
                        {/*Add a new <br />file
                        <div className="file-add-btn">
                            <IoIosAddCircleOutline />
        </div>*/}

                        {uploadForm}

                    </div>
                    {this.props.files ? this.props.files.map((file) => <FileModule key={file._id} id={file._id} file={file} />) : ""}
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
