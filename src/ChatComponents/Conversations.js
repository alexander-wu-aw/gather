import React, {Component} from 'react';
import './Conversations.css';


class Convo extends Component{

    render(){
        return (
                    <div class="convo">
                        <div class="convo-img"> 
                            <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> 
                        </div>
                        <div class="convo-desc">
                            <h5>Sunil Rajput <span class="convo-date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions 
                            astrology under one roof.</p>
                        </div>
                    </div>
                    
        );
        }
}

export default Convo;
