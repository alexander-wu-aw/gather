import React, {Component} from 'react';
import './Sidebar.css';
import ProjectPage from './ProjectPage';
import ChatPage from "./ChatPage";

import { IconContext } from "react-icons";
import { FaBars, FaRegComment, FaRegCircle, FaRegObjectGroup } from 'react-icons/fa';


class Sidebar extends Component{
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
    <div class="sidebar">
        <div class="sidebar-options">
            <button class="sidebar-link" onClick={this.projectHandleClick}>
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <div>
                      <FaBars/>
                    </div>
                </IconContext.Provider>                
            </button>
            <button class="sidebar-link" onClick={this.chatHandleClick}>
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <div>
                      <FaRegComment/>
                    </div>
                </IconContext.Provider>      
            </button>
            <button class="sidebar-link">
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <div>
                      <FaRegCircle/>
                    </div>
                </IconContext.Provider>  
            </button>
            <button class="sidebar-link">
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <div>
                      <FaRegObjectGroup/>
                    </div>
                </IconContext.Provider>  
            </button>
        </div>
      </div>
    <div class="main">
      {page}
    </div>
</div>
  );
  }
}

export default Sidebar;
