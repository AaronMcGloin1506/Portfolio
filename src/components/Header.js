import React, { Component } from 'react'

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

import HomePage from '../pages/HomePage.js';
import AboutPage from '../pages/AboutPage.js';
import EducationPage from '../pages/EducationPage.js';
import ExperiencePage from '../pages/ExperiencePage.js';
import PortfolioPage from '../pages/PortfolioPage.js';
import SkillsPage from '../pages/SkillsPage.js';
import ContactPage from '../pages/ContactPage.js';

export default class Header extends Component {
    render() {
        return (
            <Head>
                <Router>
                <Container className="p-0" fluid={true} >
                <NavBar className="navbar-dark bg-dark fixed-top" bg="transparent" expand="lg">
                    <NavBar.Brand>Aaron McGloin</NavBar.Brand>

                    <NavBar.Toggle className="border-0"aria-controls="navbar-toggle" />
                    <NavBar.Collapse id="navbar-toggle">
                        <Nav className="ml-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/education">Education</Link>
                            <Link className="nav-link" to="/experience">Experience</Link>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            <Link className="nav-link" to="/skills">Skills</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </Nav>
                    </NavBar.Collapse>
                </NavBar>
                
                <Route exact path="/" render={() => <HomePage />} /> 
                <Route path="/about" render={() => <AboutPage />} /> 
                <Route path="/education" render={() => <EducationPage />} /> 
                <Route path="/experience" render={() => <ExperiencePage />} /> 
                <Route path="/portfolio" render={() => <PortfolioPage />} /> 
                <Route path="/skills" render={() => <SkillsPage />} /> 
                <Route path="/contact" render={() => <ContactPage />} /> 

                
                
                </Container>
                </Router>
                </Head>
        )
    }
}

const Head = styled.div`
color: white !important ;
`;
        