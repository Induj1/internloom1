// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './internloom.jpg'; // Import the logo image

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={logo} alt="InternLoom Logo" className="home-logo" />
      </header>
      <h1>What are you looking for?</h1>
      <div className="card-container">
        <Link to="/internships" className="card">
          <h2>Internships</h2>
          <p>Explore a variety of internships tailored to your skills.</p>
        </Link>
        <Link to="/courses" className="card">
          <h2>Internships Plus Courses</h2>
          <p>Get access to internships and valuable skill-enhancing courses.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
