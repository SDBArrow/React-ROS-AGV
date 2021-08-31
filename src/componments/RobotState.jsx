import React, { Component } from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
class RobotState extends Component {
    state = {
        x:0,
        y:0,
        orientation: 0,
        linear_velocity: 0,
        angular_velocity: 0,
        
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h4 className="mt-4">Position</h4>
                        <p className="mt-0">x: {this.state.x}</p>
                        <p className="mt-0">y: {this.state.y}</p>
                        <p className="mt-0">Orientation: {this.state.orientation}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className="mt-4">Velocities</h4>
                        <p className="mt-0">Linear Velocity: {this.state.linear_velocity}</p>
                        <p className="mt-0">Angular Velocity: {this.state.angular_velocity}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default RobotState;