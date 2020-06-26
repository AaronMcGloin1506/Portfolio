import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer fixed-bottom">
            <Container fluid={true} >
                <Row className=" justify-content-between p-3 ">
                    <Col className="p-0" md={2} sm={2}>
                        <h6>This site was designed and developed by Aaron Mc Gloin</h6>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        <a href="https://www.linkedin.com/in/aaron-mcgloin-1aa66193/?originalSubdomain=ie">
                            <i className="fa-2x fab fa-linkedin px-2"></i>
                        </a>

                        <a href="https://github.com/AaronMcGloin1506?tab=repositories">
                            <i className="fa-2x fab fa-github-square px-2"></i>
                        </a>
                        
                        
                    </Col>
                </Row>
            </Container>
        </footer>
        )
    }
}
