import React from 'react';

const WeatherCard = ({ children, className = '' }) => {
  return (
    <div className={`weather-card ${className}`}>
      {children}
    </div>
  );
};

export default WeatherCard; 