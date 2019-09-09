import React from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import ContactMe from './components/ContactMe'
import './styles/App.css'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </div>
  );
}

export default App
