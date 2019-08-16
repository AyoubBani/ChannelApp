import React, { Component } from 'react'
import { connect } from "react-redux";

class MessagesPanel extends Component {
    

    render() {

        const messages = this.props.messages.map((message, key) => {
            return (<div key={key} className="card mt-2">
                <div className="card-body">
                    {message}       
        </div>
            </div>)

        })

        return (
            <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">       
            {messages}         
            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        messages: state.messages.messages
    }
}




export default connect(mapStateToProps, null)(MessagesPanel);