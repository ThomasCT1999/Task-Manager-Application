// Import Routes and Route from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './login';

const App = () => {
  return (
    <Router>
      {/* Use Routes to define your route configuration */}
      <Routes>
        {/* Use Route to define individual routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;