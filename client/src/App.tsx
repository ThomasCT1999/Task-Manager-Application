// Import Routes and Route from react-router-dom
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Adjusted the filename
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <Router>
      {/* Use Routes to define your route configuration */}
      <Routes>
        {/* Use Route to define individual routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} /> {/* Adjusted the path */}
      </Routes>
    </Router>
  );
};

export default App;
