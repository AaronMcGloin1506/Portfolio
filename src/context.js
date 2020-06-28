import React, { Component } from 'react';

import { aboutContent, educationContent, experienceContent} from './data.js';


const InfoContext = React.createContext();
// Provider
// Consumer

class InfoProvider extends Component {
    state={
        about: aboutContent,
        education: educationContent,
        experience: experienceContent
    }
    render() {
        return (
            <InfoContext.Provider value={{...this.state}}>
                {this.props.children}
            </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
