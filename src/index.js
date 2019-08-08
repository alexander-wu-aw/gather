import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    username: "",
    profile_pic: "",
    data: {},
    projects: [],
    selected_project: "",
    selected_project_name: "",
    files: [],
    upload_info: {},
}
function reducer(state = initialState, action){
    switch(action.type){
        case "LOAD_PROJECTS":
            return{
                data: action.data,
                projects: action.data.projects,
                username: action.data.userName,
                profile_pic: action.data.profilepic
                }
        case "SELECT_PROJECT":
            return{
                ...state,
                selected_project: action.selected_project,
                selected_project_name: action.selected_project_name
            }
        case "LOAD_FILES":
            return{
                ...state,
                files: action.files,
                upload_info: action.upload_info
            }
        
        default:
            return state
    }
}
const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
