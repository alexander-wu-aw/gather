import React, {Component} from 'react';
import './ChatPage.css';
import ReceivedMsg from './ReceivedMsg';
import SentMsg from './SentMsg';


class MessageList extends Component{

    render(){
        return (
              <div className="msg-history">
                {this.props.messages.map((message, index) =>{
                  if(message.senderId === "Alexander"){
                    return(
                      <SentMsg key={index} date={message.createdAt} text={message.text}/>
                    )
                  }
                  else{
                    return(
                      <ReceivedMsg key={index} date={message.createdAt} text={message.text} username={message.senderId}/>
                    )
                  }
    
                } )}
              </div>

                
        );
        }
}

export default MessageList;
