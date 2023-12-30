// Import Routes and Route from react-router-dom
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register'; 

const App = () => {
  return (
    <Router>
      {/* Use Routes to define your route configuration */}
      <Routes>
        {/* Use Route to define individual routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} /> {/* Adjusted the path */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
