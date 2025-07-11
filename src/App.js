import React from 'react';
import Header from './component/Header';
import About from './component/About';
import Projects from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Skills from './component/Skills';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />   
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
