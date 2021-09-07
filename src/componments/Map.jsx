import React, { Component } from 'react';
import Config from '../scripts/Config';

class Map extends React.Component {

state = {
    ros: null,
};

    init_connection() {
        this.state.ros = new window.ROSLIB.Ros();
        console.log(this.state.ros);
        try {
            this.state.ros.connect("ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PROT);
        } catch (error) {
            console.log("ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PROT);
            console.log("can't connect to the AGV.Try again after 1 second");
        }
    }

    componentDidMount(){
        this.init_connection();
    }

    render() { 
        return <div>This is map componment</div>;
    }
}
 
export default Map;