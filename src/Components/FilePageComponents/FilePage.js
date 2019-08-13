import React, { Component } from 'react';
import axios from 'axios'
import './FilePage.css';
import "../../anno-vanilla-rest-plugin"

import { connect } from "react-redux";


class FilePage extends Component {
    constructor() {
        super()
        this.state = {
            annotations: []
        };
        this.annoHandler = this.annoHandler.bind(this)
        this.createAnnotation = this.createAnnotation.bind(this)
    }

    annoHandler(handler, fn){
        window.anno.addHandler(handler, fn);
    };
    createAnnotation(annotation) {
        this.setState({
            annotations: [...this.state.annotations, annotation]
        });
        console.log("ANNOT")
        console.log(this.state.annotations)
    };
    componentDidMount() {
        window.anno.makeAnnotatable(this.myImage);
        this.annoHandler("onAnnotationCreated", this.createAnnotation);

        window.anno.addPlugin('VanillaREST', {
            'prefix':'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/',
            'urls': {
                read: '/get-notes',
                create:  '/create-notes',
                update:  '/update-notes/:id',
                destroy: '/delete-notes/:id',
            },
            extraAnnotationData: {commenter: this.props.username}
        });

    }
    componentWillUnmount() {
        window.anno.destroy();
      }

    render() {
        return (
            <div className="feedback">
                <div className="share">
                    <h1> Placeholder</h1>
                    {/* <img src={this.props.selected_file_link} /> */}
                    <img
                        ref={r => (this.myImage = r)}
                        className="file-img"
                        src={this.props.selected_file_link}
                        alt=""
                    />
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    selected_file_link: state.selected_file_link,
    username: state.username
})
export default connect(mapStateToProps)(FilePage);