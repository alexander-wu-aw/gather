import React, { Component } from 'react';
import './FilePage.css';

import "annotorious"
//  import "./annotorious"
import "./anno-vanilla-rest-plugin"

import EnterName from "./EnterName"

import { connect } from "react-redux";
import axios from 'axios';


class FilePage extends Component {
    constructor() {
        super()
        this.state = {
            annotations: [],
            fileURL: "",
            enterName: true
        };
        this.annoHandler = this.annoHandler.bind(this)
        this.createAnnotation = this.createAnnotation.bind(this)
        this.closeEnterName = this.closeEnterName.bind(this)
    }
    annoHandler(handler, fn) {
        window.anno.addHandler(handler, fn);
    };
    createAnnotation(annotation) {
        this.setState({
            annotations: [...this.state.annotations, annotation]
        });
    };
    componentDidMount() {
        axios.get(
            'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/file' + this.props.location.search + "&token=" + sessionStorage.getItem("userToken")
        )
            .then(data => {
                console.log(data.data.data)
                if(data.data.data.client === "false" || sessionStorage.getItem('clientName') !== null){
                    this.setState({
                        enterName:false
                    })
                    if(sessionStorage.getItem('clientName') !== null){
                    this.props.dispatch({ type: "CLIENT_NAME", clientName: sessionStorage.getItem('clientName') })
                    }
                }
                this.props.dispatch({ type: "SELECT_FILE", selected_file_link: data.data.data.fileURL })
                this.setState({
                    fileURL: data.data.data.fileURL
                })

                setTimeout(function () {

                    window.anno.makeAnnotatable(this.myImage);
                    this.annoHandler("onAnnotationCreated", this.createAnnotation);
                    window.anno.addPlugin('VanillaREST', {
                        'prefix': 'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/',
                        'urls': {
                            read: '/get-notes',
                            create: '/create-notes',
                            update: '/update-notes/:id',
                            destroy: '/delete-notes/:id',
                        },
                        extraAnnotationData: { commenter: this.props.username}
                    })
                }.bind(this), 100);
            })
            .catch(err => {
                console.log(err)
            })

        // window.anno.makeAnnotatable(this.myImage);
        // this.annoHandler("onAnnotationCreated", this.createAnnotation);

        // window.anno.addPlugin('VanillaREST', {
        //     'prefix': 'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/',
        //     'urls': {
        //         read: '/get-notes',
        //         create: '/create-notes',
        //         update: '/update-notes/:id',
        //         destroy: '/delete-notes/:id',
        //     },
        //     extraAnnotationData: { commenter: this.props.username }
        // });

    }
    componentWillUnmount() {
        window.anno.destroy();
    }
    closeEnterName() {
        this.setState({
            enterName: false
        });
        console.log("s",this.props.username)
        this.componentDidMount()
        this.render()
      }

    render() {
        return (
            <div className="feedback">
                {this.state.enterName ? <EnterName closeEnterName={this.closeEnterName} /> : null}
                <img
                    ref={r => (this.myImage = r)}
                    className="file-img"
                    src={this.state.fileURL}
                    alt=""
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    selected_file_link: state.selected_file_link,
    username: state.username
})
export default connect(mapStateToProps)(FilePage);