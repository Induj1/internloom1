import React, { useEffect } from 'react';
import './SplashScreen.css';
import logo from './internloom.jpg';

function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();  // Call the onFinish function passed via props after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);  // Cleanup timer
  }, [onFinish]);

  return (
    <div className="splash-container">
      <img src={logo} alt="InternLoom Logo" className="splash-logo" />
    </div>
  );
}

export default SplashScreen;
