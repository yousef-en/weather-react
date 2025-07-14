import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">
          <i className="fas fa-cloud-sun"></i>
          Weather App
        </h1>
        <p className="header-subtitle">Get real-time weather information</p>
      </div>
    </header>
  );
};

export default Header; 