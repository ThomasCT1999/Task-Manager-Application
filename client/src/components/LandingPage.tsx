// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/landingstyles.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="login-container">
        {/* Use Link component to navigate to "/login" */}
        <Link to="/login">
          <button className="login-button">
            Login
          </button>
        </Link>
      </div>

      <div className="title-container">
        <header>
          <h1>Task Manager App</h1>
          <p>Your all-in-one solution for task management</p>
        </header>
      </div>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Effortless task creation and management</li>
          <li>User-friendly dashboard for quick insights</li>
          <li>Secure authentication with JWT</li>
          <li>Responsive design for any device</li>
        </ul>
        <button onClick={() => alert('Get Started clicked')}>Get Started</button>
      </section>

      <section>
        <h2>How It Works</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus euismod turpis, id cursus elit dignissim et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut tincidunt urna. Fusce vel tortor nec metus fermentum posuere.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Feel free to reach out to us.
        </p>
        <button onClick={() => alert('Contact clicked')}>Contact</button>
      </section>
    </div>
  );
};

export default LandingPage;
