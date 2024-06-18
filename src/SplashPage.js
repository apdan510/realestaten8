import React from 'react';
import { Link } from 'react-router-dom';
import './SplashPage.css';

function SplashPage() {
  return (
    <div className="splash-container">
      <div className="button-container">
        <Link to="/info" className="enter-button">Enter Here</Link>
      </div>
      <div className="quote">Turning your future into today's reality</div>
    </div>
  );
}

export default SplashPage;
