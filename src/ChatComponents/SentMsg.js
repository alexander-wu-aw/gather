import React, {Component} from 'react';

class SentMsg extends Component{

    render(){

      const date = new Date(JSON.parse(JSON.stringify(this.props.date)));

        return (
                <div className="msg-out">
                    <div className="msg-out-content">
                      <p>{this.props.text}</p>
                      <span className="time_date"> {date.toLocaleTimeString()}    |    {date.toDateString().substr(4,6)}</span> 
                    </div>
                </div>
        );
        }
}

export default SentMsg;