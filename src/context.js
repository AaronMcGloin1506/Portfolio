import React, { Component } from 'react';

import { aboutContent, educationContent, experienceContent, portfolioContent, portfolioDetail} from './data.js';


const InfoContext = React.createContext();
// Provider
// Consumer

class InfoProvider extends Component {
    state={
        about: aboutContent,
        education: educationContent,
        experience: experienceContent,
        portfolio: portfolioContent,
        detailProject: portfolioDetail,
        modalOpen: false,
    }


    getProject = (id) => {
        const project = this.state.portfolio.find(portfolio => portfolio.id === id);
        return project;
    }

    handleDetail = (id) =>{
        const project = this.getProject(id);
        this.setState(()=>{
            return {detailProject: project,modalOpen:true}
        })
    }

    openModal = (id) =>{
        const product = this.getProject(id);
        this.setState(()=>{
            return {modalProduct: product, modalOpen:true}
        })
    }
    closeModal = () =>{
        this.setState(()=> {
            return{modalOpen: false}
        })
    }

    render() {
        return (
            <InfoContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                openModal: this.openModal,
                closeModal: this.closeModal,
                }}>
                {this.props.children}
            </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
