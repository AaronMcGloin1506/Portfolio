import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';

export default class HomePage extends Component {
    render() {
        return (
            <Container className="mainContainer">
                <div className="rowHome">
                    <div className="col-10 mx-auto  text-center font-size">
                        <h1 className=" display-3 text-capitalize">
                            Aaron Mc Gloin
                        </h1>
                        <h4>
                            Computer Science Graduate
                        </h4>

                    </div>
                </div>
            </Container>
            
        )
    }
}
