import React from 'react';
import './Sidebar.css';

import { IconContext } from "react-icons";
import { FaBars, FaRegComment, FaRegCircle, FaRegObjectGroup } from 'react-icons/fa';


function Sidebar() {
  return (
    <div class="sidebar">
        <div class="sidebar-options">
            <button class="sidebar-link">
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <div>
                      <FaBars/>
                    </div>
                </IconContext.Provider>                
            </button>
            <button class="sidebar-link">
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
  );
}

export default Sidebar;
