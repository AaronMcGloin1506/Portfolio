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

                    <div className="row">
                        <div className="col-10 mx-auto text-center p-5">
                            <h4 className="">Click on projects for details</h4>
                        </div>
                    </div>

                    <Container fluid={true}>
                        <Row className="justify-content-around">
                            <InfoConsumer>

                                {(items) => {
                                    return items.portfolio.map((item)=>{
                                        return (
                                            <PortfolioItem key={item.id} item={item} handleDetail={items.handleDetail} openModal={items.openModal}/>
                                        )
                                    })
                                }}
                            </InfoConsumer>   
                        </Row>
                    </Container>
                    
                </div>
                
            </React.Fragment>
            
        )
    }
}





