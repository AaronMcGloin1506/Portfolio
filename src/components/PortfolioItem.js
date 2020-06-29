import React, { Component } from 'react';

import { InfoConsumer } from '../context.js'



export default class PortfolioItem extends Component {
    render() {
        const {img, id} = this.props.item;
        return (
            <div className="d-inline-flex p-2">
                <img className="a-card-image" src={img} alt="Portfolio Item" onClick={()=>{this.props.handleDetail(id)}}/>
            </div>
        )
    }
}




