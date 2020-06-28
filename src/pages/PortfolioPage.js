import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import { InfoConsumer } from '../context.js'
import PortfolioItem from '../components/PortfolioItem.js'

export default class PortfolioPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="mainContainer">
                    <div className="row">
                        <div className="col-10 mx-auto text-center ">
                            <h1 className="title">Portfolio</h1>
                        </div>
                    </div>
                    <InfoConsumer>
                    {(items) => {
                        return items.portfolio.map((item)=>{
                            return (
                                <Container fluid={true}>
                                    <Row className="justify-content-around ">
                                        <PortfolioItem key={item.id} item={item}/>
                                    </Row>
                                </Container>
                            )
                        })
                    }}
                </InfoConsumer>
                </div>
                
            </React.Fragment>
            
        )
    }
}





