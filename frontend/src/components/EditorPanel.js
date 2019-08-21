import React, { Component } from 'react'
import { connect } from "react-redux";


import { addMessage } from "../actions/channels";
import { fetchMessages } from "../actions/messages";

class EditorPanel extends Component {

    componentDidMount() {
        this.props.setClick(this.clearInput);
    }

    state = {
        message: ""
    }

    handleChange = event => {
        this.setState({ message: event.target.value });
    }


    clearInput = () => this.setState({ message: "" })


    onSubmit = e => {
        e.preventDefault();
        this.props.addMessage(this.props.channel, this.state.message);
        this.clearInput();
    }



    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.message} onChange={this.handleChange} ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2" disabled={(this.props.channel === null || this.state.message === "")}>Submit</button>

            </form>
        )
    }
}




const mapStateToProps = state => {
    console.log("EDITOR STATE", state);
    return {
        channels: state.channels.channels,
        messages: state.messages.messagesN
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addMessage: (channel, message) =>
            dispatch(addMessage(channel, message)),
        fetchMessages: (channel) =>
            dispatch(fetchMessages(channel))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorPanel); 