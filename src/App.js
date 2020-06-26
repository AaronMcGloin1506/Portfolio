import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
    
  );
}

export default App;
