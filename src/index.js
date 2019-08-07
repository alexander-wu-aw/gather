import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    username: "",
    data: {},
    projects: [],
    selected_project: "",
    files: []
}
function reducer(state = initialState, action){
    switch(action.type){
        case "LOAD_PROJECTS":
            return{
                data: action.data,
                projects: action.data.projects,
                username: action.data.userName
                }
        case "SELECT_PROJECT":
            return{
                ...state,
                selected_project: action.selected_project
            }
        case "LOAD_FILES":
            return{
                ...state,
                files: action.files
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
