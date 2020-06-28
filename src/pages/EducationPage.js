import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { InfoConsumer } from'../context.js';

export default class EducationPage extends Component {
    render() {
        return (
            <InfoConsumer>
                {(info)=>{
                    const {title,date_1,certification_1,college_1,description_1,date_2,certification_2,college_2,description_2,date_3,certification_3,college_3,description_3} = info.education;
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
                                <h3 className="vertical-timeline-element-title">{certification_1}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{college_1}</h4>
                                <p>{description_1}</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date={date_2}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                
                            >
                                <h3 className="vertical-timeline-element-title blueFont">{college_2}</h3>
                                <h4 className="vertical-timeline-element-subtitle blueFont">{certification_2}</h4>
                                <p className="blueFont">{description_2}</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={date_3}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                
                            >
                                <h3 className="vertical-timeline-element-title">{certification_3}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{college_3}</h4>
                                <p>{description_3}</p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                        
                    </div>
                    )
                }}
            </InfoConsumer>
           
        )
    }
}
