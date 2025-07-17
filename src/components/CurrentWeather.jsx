import React from "react";

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  const getWeatherIcon = (condition) => {
    const icons = {
      Clear: "fas fa-sun",
      Clouds: "fas fa-cloud",
      Rain: "fas fa-cloud-rain",
      Snow: "fas fa-snowflake",
      Thunderstorm: "fas fa-bolt",
      Drizzle: "fas fa-cloud-drizzle",
      Mist: "fas fa-smog",
      Smoke: "fas fa-smog",
      Haze: "fas fa-smog",
      Dust: "fas fa-smog",
      Fog: "fas fa-smog",
      Sand: "fas fa-smog",
      Ash: "fas fa-smog",
      Squall: "fas fa-wind",
      Tornado: "fas fa-wind",
    };
    return icons[condition] || "fas fa-cloud";
  };

  return (
    <div className="current-weather">
      <div className="weather-main">
        <div className="weather-icon">
          <i className={getWeatherIcon(weather.weather[0].main)}></i>
        </div>
        <div className="weather-info">
          <h2 className="temperature">{Math.round(weather.main.temp)}°C</h2>
          <p className="description">{weather.weather[0].description}</p>
          <p className="location">
            {weather.name}, {weather.sys.country}
          </p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <i className="fas fa-thermometer-half"></i>
          <span>Feels like: {Math.round(weather.main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <i className="fas fa-tint"></i>
          <span>Humidity: {weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <i className="fas fa-wind"></i>
          <span>Wind: {Math.round(weather.wind.speed)} m/s</span>
        </div>
        <div className="detail-item">
          <i className="fas fa-compress-arrows-alt"></i>
          <span>Pressure: {weather.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
