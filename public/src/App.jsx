import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';

function App() {
  return (
    <div className = "">
    <Router>
      <div className="App">
        {/* Adding the NavBar component at the top */}
        <NavBar />
        {/* Adding the routing mechanism */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/project1" element = {<Project1 />} />
          <Route path="/project2" element = {<Project2 />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
