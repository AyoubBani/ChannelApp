import React, { Component } from 'react'


import { connect } from "react-redux";


// import { channel } from "../actions";
import { fetchChannels } from "../actions/channels";
import { fetchMessages } from "../actions/messages";

class NavigationPanel extends Component {


    componentDidMount() {
        this.props.fetchChannels();
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.setChannel(e.target.id);
        this.props.clearInput();
        // fetch Messages
        this.props.fetchMessages(e.target.id);        

    };


    render() {        
        const list = (this.props.channels) ? (
            <div className="list-group mt-2" id="list-tab" role="tablist">
                {
                    this.props.channels.map((channel) => {                                                
                        return <a key={channel} className={"list-group-item list-group-item-action " + ((parseInt(this.props.selectedChannel) === channel) ? 'active' : '')} id={channel} href="#" onClick={this.handleClick}>Channel #{channel}</a>
                    })
                }
            </div>
        ) : <div></div>;


        return list;

    }

}

const mapStateToProps = state => {
    return {
        channels: state.channels.channels
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchChannels: () =>
            dispatch(fetchChannels()),
        fetchMessages: (channel) =>
            dispatch(fetchMessages(channel))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavigationPanel);