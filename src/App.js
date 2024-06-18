// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashPage from './SplashPage';
import InfoPage from './InfoPage';
import './index.css'; // Ensure this imports Tailwind CSS

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SplashPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
