import React, { Component } from 'react';

import { InfoConsumer } from'../context.js';
import img from '../assets/images/portrait.jpg'

export default class AboutPage extends Component {
    render() {
        return (
            <InfoConsumer>
                {(info)=>{
                    const {title, statement_1, mission} = info.about;
                    return (
                        <div className="mainContainer ">
                            {/* title  */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center ">
                                    <h1 className="title">{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7 mx-auto col-md-6 my-5 px-5">
                                    <img src={img} className="profilePic"/>
                                </div>
                                <div className="col-7 mx-auto col-md-6 my-5">
                                    <p>{statement_1}</p>
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

