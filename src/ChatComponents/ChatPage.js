import React, {Component} from 'react';
import './ChatPage.css';
import Convo from './Conversations';
import MessageList from './MessageList';
import InputMsg from './InputMsg';
import Chatkit from "../../node_modules/@pusher/chatkit-client";
import { tokenUrl, instanceLocator } from './APIconfig'

class ChatPage extends Component{

    constructor(){
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)

    }
        
    componentDidMount() {
          const chatManager = new Chatkit.ChatManager({
              instanceLocator,
              userId: 'Alexander',
              tokenProvider: new Chatkit.TokenProvider({
                  url: tokenUrl
              })
          })
          
          chatManager.connect()
          .then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
                roomId: "19446455",
                hooks: {
                    onMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message]
                        })
                    }
                }
            })
          })
    }
    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: "19446455"
        })
    }


    render(){
        return (
            <div className="chat">
            <div className="inbox">
                <div className="inbox-heading">
                    <div className="messages-heading">
                        Messages
                    </div>
                    <div className="search">
                        <input type="text" className="search-input"  placeholder="Search" />
                        <span className="search-button">
                            <button type="button"> 
                                <i className="fa fa-search" aria-hidden="true"></i> 
                            </button>
                        </span> 
                    </div>
                </div>

                <div className="inbox-convo">
                    <Convo/>
                    <Convo/>
                    <Convo/>
                </div>
            </div>

            <div className="msg">
                <MessageList messages={this.state.messages}/>
                <InputMsg sendMessage={this.sendMessage}/>



            </div>

            
        </div>
        );
        }
}

export default ChatPage;
