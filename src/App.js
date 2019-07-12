import React, {Component} from 'react';
import './App.css';
import ProjectPage from './ProjectPageComponents/ProjectPage';
import ChatPage from "./ChatComponents/ChatPage";
import { FaBars, FaRegComment, FaRegCircle, FaRegObjectGroup } from 'react-icons/fa';


class App extends Component{
  state ={
    page: "project"
  }

  projectHandleClick = () => {
    this.setState((prevState) => {
      return {page: "project"};
    });
  };

  chatHandleClick = () => {
    this.setState((prevState) => {
      return {page: "chat"};
    });
  };

  render(){
    let page;
    if(this.state.page === "project"){
      page = <ProjectPage/>
    }
    else if (this.state.page === "chat"){
      page = <ChatPage />
    }
  return (
  <div>
    <div className="sidebar">
        <div className="sidebar-options">
            <div className="sidebar-link" onClick={this.projectHandleClick}>
                  <FaRegObjectGroup/>              
            </div>
            <div className="sidebar-link" onClick={this.chatHandleClick}>
                  <FaRegComment/>
            </div>
            <div className="sidebar-link">
                  <FaRegCircle/> 
            </div>
            <div className="sidebar-link">
                  <FaBars/>
            </div>
        </div>
      </div>
    <div className="main">
      {page}
    </div>
</div>
  );
  }
} 

export default App;
