import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Modal from './components/Modal.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Modal />
      <Footer />
    </React.Fragment>
    
  );
}

export default App;
