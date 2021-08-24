import React, { Component } from 'react';


class Connection extends Component {
    state = {  }

    init_connection(){
        var ros = new Window.ROSLIB.Ros();
    }

    render() { 
        return (<h2>Connection</h2> );
    }
}
 
export default Connection;