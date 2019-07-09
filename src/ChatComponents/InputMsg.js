import React, {Component} from 'react';

class InputMsg extends Component{

    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }
    
    render(){
        return (
            
                <div className="msg-new">
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange}
                    value={this.state.message} type="text" className="msg-new-input" placeholder="Type a message" />
                    </form>
                        <button className="msg-new-send" type="button">
                          <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </button>
                </div>

        );
        }
}

export default InputMsg;