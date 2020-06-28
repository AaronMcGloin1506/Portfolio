import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { InfoConsumer } from'../context.js';

export default class ExperiencePage extends Component {
    render() {
        return (
            <InfoConsumer>
                {(info)=>{
                    const {title, date_1, jobTitle_1, business_1, jobDescription_1, date_2, jobTitle_2, business_2, jobDescription_2, date_3, jobTitle_3, business_3, jobDescription_3} = info.experience;
                    return(
                        <div className="mainContainer">
                        {/* title  */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center my-auto">
                                <h1 className="title">{title}</h1>
                            </div>
                        </div>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={date_1}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                
                            >
                                <h3 className="vertical-timeline-element-title">{jobTitle_1}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{business_1}</h4>
                                <p>{jobDescription_1}</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date={date_2}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                
                            >
                                <h3 className="vertical-timeline-element-title blueFont">{jobTitle_2}</h3>
                                <h4 className="vertical-timeline-element-subtitle blueFont">{business_2}</h4>
                                <p className="blueFont">{jobDescription_2}</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={date_3}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                
                            >
                                <h3 className="vertical-timeline-element-title">{jobTitle_3}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{business_3}</h4>
                                <p>{jobDescription_3}</p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                        
                    </div>
                    )
                }}
            </InfoConsumer>
           
        )
    }
}
