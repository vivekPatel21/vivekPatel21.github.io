import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Adding the NavBar component at the top */}
        <NavBar />
        {/* Adding the routing mechanism */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
