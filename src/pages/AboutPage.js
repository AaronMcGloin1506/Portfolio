import React, { Component } from 'react';

import { InfoConsumer } from'../context.js';
import img from '../assets/images/portrait.jpg'

export default class AboutPage extends Component {
    render() {
        return (
            <InfoConsumer>
                {(info)=>{
                    const {title, statement_1, subTitle, mission} = info.about;
                    return (
                        <div className="container mt-5 aboutContainer">
                            {/* title  */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center fluid my-1">
                                    <h1 className="title">{title}</h1>
                                </div>
                            </div>
                            <div className="row px-5">
                                <div className="col-7 mx-auto col-md-6 my-3 px-5">
                                    <img src={img} className="profilePic"/>
                                </div>
                                <div className="col-7 mx-auto col-md-6 my-3">
                                    <p>{statement_1}</p>
                                    <h3>{subTitle}</h3>
                                    <p>{mission}</p>
                                </div>
                            </div>
                            {/* end title  */}
                        </div>
                        
                    );
                }}
            </InfoConsumer>
        )
    }
}

