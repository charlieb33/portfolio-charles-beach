import React from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
// import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <AboutMe />
      <MyProjects />
    </div>
  );
}

export default App
