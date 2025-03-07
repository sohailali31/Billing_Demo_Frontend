import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Component 1/Register';
import Login from './Component 1/Login';
import './index.css';
import Welcome from './Component 1/Welcome';
import LandingPage from './Component 1/landingpage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/register/bellarybilling+550+software&kk$" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/welcome/:username' element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
