import React, { Component } from 'react';
import ROSLIB from "roslib";


class Connection extends Component {
    state = {  }

    init_connection(){
        var ros = new ROSLIB.Ros();
    }

    render() { 
        return (<h2>Connection</h2> );
    }
}
 
export default Connection;