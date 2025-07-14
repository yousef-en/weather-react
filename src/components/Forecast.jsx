import React from 'react';

const Forecast = ({ forecast }) => {
  if (!forecast || !forecast.list) return null;

  const getWeatherIcon = (condition) => {
    
    const icons = {
      'Clear': 'fas fa-sun',
      'Clouds': 'fas fa-cloud',
      'Rain': 'fas fa-cloud-rain',
      'Snow': 'fas fa-snowflake',
      'Thunderstorm': 'fas fa-bolt',
      'Drizzle': 'fas fa-cloud-drizzle',
      'Mist': 'fas fa-smog',
      'Smoke': 'fas fa-smog',
      'Haze': 'fas fa-smog',
      'Dust': 'fas fa-smog',
      'Fog': 'fas fa-smog',
      'Sand': 'fas fa-smog',
      'Ash': 'fas fa-smog',
      'Squall': 'fas fa-wind',
      'Tornado': 'fas fa-wind'
    };
    return icons[condition] || 'fas fa-cloud';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  // Group forecast by day and get daily averages
  const dailyForecast = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toDateString();
    if (!acc[date]) {
      acc[date] = {
        date: item.dt * 1000,
        temp: item.main.temp,
        weather: item.weather[0],
        humidity: item.main.humidity,
        count: 1
      };
    } else {
      acc[date].temp += item.main.temp;
      acc[date].humidity += item.main.humidity;
      acc[date].count += 1;
    }
    return acc;
  }, {});

  const forecastDays = Object.values(dailyForecast).slice(1, 6); // Skip today, show next 5 days

  return (
    <div className="forecast">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-container">
        {forecastDays.map((day, index) => (
          <div key={index} className="forecast-day">
            <div className="forecast-date">{formatDate(day.date)}</div>
            <div className="forecast-icon">
              <i className={getWeatherIcon(day.weather.main)}></i>
            </div>
            <div className="forecast-temp">
              {Math.round(day.temp / day.count)}°C
            </div>
            <div className="forecast-desc">
              {day.weather.description}
            </div>
            <div className="forecast-humidity">
              {Math.round(day.humidity / day.count)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast; 