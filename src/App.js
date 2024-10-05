// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed Link
import SplashScreen from './SplashScreen';
import Internships from './Internships';
import Courses from './Courses';
import Home from './Home';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false); // Hide splash screen after 3 seconds
  };

  return (
    <Router>
      <div className="App">
        {showSplash ? (
          <SplashScreen onFinish={handleSplashFinish} />
        ) : (
          <>
            {/* Define Routes */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Home Page Route */}
              <Route path="/internships" element={<Internships />} />
              <Route path="/courses" element={<Courses />} />
              {/* Add more routes as needed */}
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
