import React, { Component } from 'react';
import Connection from './Connection';
import Teleoperation from './Teleoperation';
import { Row, Col, Container, Button } from "react-bootstrap";
import RobotState from './RobotState';
class Home extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <Container>
                    <h1 className="text-center mt-3">AGV Control Page</h1>
                    <Row>
                        <Col>
                            <Connection />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Teleoperation />
                        </Col>
                        <Col>
                            <h1>MAP</h1>
                            <p>This region will be used later for displaying a map</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <RobotState />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;