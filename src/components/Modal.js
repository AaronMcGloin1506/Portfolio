import React, { Component } from 'react';
import {InfoConsumer} from '../context';

export default class Modal extends Component {
    render() {
        return (
            <InfoConsumer>
                {(value)=>{
                    const { id, imgFull, title , descriptionFull, link } = value.detailProject
                    const { modalOpen } = value;
        
                    if(!modalOpen){
                        return null;
                    }

                    else{
                        return(
                                <div className="modalContainer p-5">
                                    <h1 className="text-center title">{title}</h1>
                                    <div className="row">
                                        <div className="col-7 mx-auto col-md-6 my-5 px-5">
                                            <img src={imgFull} className="projectImage"/>
                                        </div>
                                        <div className="col-7 mx-auto col-md-6 my-5">
                                            <p>{descriptionFull}</p>
                                            
                                            <button type="button" class="btn btn-outline-primary mx-2" onClick={()=>{value.closeModal()}}>Back</button>
                                            <a href={link} target="_blank">
                                                <button type="button" class="btn btn-outline-primary" onClick={()=>{value.closeModal()}}>View Website</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        )
                    }
                }}
            </InfoConsumer>
        )
    }
}
