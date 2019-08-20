import React, { Component } from 'react';
import './FilePage.css';

import "annotorious"
import "../../anno-vanilla-rest-plugin"


import { connect } from "react-redux";
import axios from 'axios';


class FilePage extends Component {
    constructor() {
        super()
        this.state = {
            annotations: [],
            fileURL:""
        };
        this.annoHandler = this.annoHandler.bind(this)
        this.createAnnotation = this.createAnnotation.bind(this)
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
            'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/file' + this.props.location.search
        )
            .then(data => {
                this.props.dispatch({ type: "SELECT_FILE", selected_file_link: data.data.data.fileURL })
                console.log("mount")
                this.setState({
                    fileURL: data.data.data.fileURL
                })
                console.log("mount2")

                window.anno.makeAnnotatable(this.myImage);
                console.log("mount3")

                // this.annoHandler("onAnnotationCreated", this.createAnnotation);
                console.log("mount4")

                window.anno.addPlugin('VanillaREST', {
                    'prefix': 'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/',
                    'urls': {
                        read: '/get-notes',
                        create: '/create-notes',
                        update: '/update-notes/:id',
                        destroy: '/delete-notes/:id',
                    },
                    extraAnnotationData: { commenter: this.props.username ? this.props.username :"Client" }
                })
                console.log("NICOLE")
                console.log("mount5")


                this.setState({
                    fileURL: data.data.data.fileURL

                })
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

    render() {
        console.log("render")
        return (
            <div className="feedback">
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