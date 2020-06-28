import React, { Component } from 'react'



export default class PortfolioItem extends Component {
    render() {
        const {img} = this.props.item;
        return (
            <div className="d-inline-flex p-2">
                <img className="a-card-image" src={img} alt="Portfolio Item" />
            </div>
        )
    }
}




