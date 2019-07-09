import React, {Component} from 'react';
import './ChatPage.css';


class ChatPage extends Component{

    render(){
        return (
            <div class="chat">
            <div class="inbox">
                <div class="inbox-heading">
                    <div class="recent-heading">
                        Messages
                    </div>
                    <div class="search">
                        <input type="text" class="search-input"  placeholder="Search" />
                        <span class="search-button">
                            <button type="button"> 
                                <i class="fa fa-search" aria-hidden="true"></i> 
                            </button>
                        </span> 
                    </div>
                </div>

                <div class="inbox-convo">
                    <div class="convo active-convo">
                        <div class="convo-img"> 
                            <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> 
                        </div>
                        <div class="convo-desc">
                            <h5>Sunil Rajput <span class="convo-date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions 
                            astrology under one roof.</p>
                        </div>
                    </div>
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
                </div>
            </div>

            <div class="msg">
              <div class="msg-history">
                <div class="msg-in">
                    <div class="msg-in-img"> 
                        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> 
                    </div>
                    <div class="msg-in-content">
                        <div class="msg-in-content-box">
                          <p>Test which is a new approach to have all solutions</p>
                          <span class="time_date"> 11:01 AM    |    June 9</span>
                        </div>
                    </div>
                </div>
                <div class="msg-out">
                    <div class="msg-out-content">
                      <p>Hello, Test which is a new approach to have all
                        solutions</p>
                      <span class="time_date"> 11:01 AM    |    June 9</span> 
                    </div>
                </div>
                <div class="msg-in">
                    <div class="msg-in-img"> 
                        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> 
                    </div>
                    <div class="msg-in-content">
                        <div class="msg-in-content-box">
                          <p>Test which is a new approach to have all solutions</p>
                          <span class="time_date"> 11:01 AM    |    June 9</span>
                        </div>
                    </div>
                </div>
                <div class="msg-out">
                    <div class="msg-out-content">
                      <p>Hello, Test which is a new approach to have all
                        solutions</p>
                      <span class="time_date"> 11:01 AM    |    June 9</span> 
                    </div>
                </div>
                <div class="msg-in">
                    <div class="msg-in-img"> 
                        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> 
                    </div>
                    <div class="msg-in-content">
                        <div class="msg-in-content-box">
                          <p>Test which is a new approach to have all solutions</p>
                          <span class="time_date"> 11:01 AM    |    June 9</span>
                        </div>
                    </div>
                </div>
                <div class="msg-out">
                    <div class="msg-out-content">
                      <p>Hello, Test which is a new approach to have all
                        solutions</p>
                      <span class="time_date"> 11:01 AM    |    June 9</span> 
                    </div>
                </div>
                
              </div>

                <div class="msg-new">
                        <input type="text" class="msg-new-input" placeholder="Type a message" />
                        <button class="msg-new-send" type="button">
                          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </button>
                </div>



            </div>

            
        </div>
        );
        }
}

export default ChatPage;
