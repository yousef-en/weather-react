import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import WeatherCard from './components/WeatherCard';
import './styles.css';

const API_KEY = "3045dd712ffe6e702e3245525ac7fa38";
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError('');
    
    try {
      // Fetch current weather
      const weatherResponse = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!weatherResponse.ok) {
        const errorData = await weatherResponse.json();
        if (weatherResponse.status === 401) {
          throw new Error('API key is invalid. Please check your OpenWeatherMap API key.');
        } else if (weatherResponse.status === 404) {
          throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
        } else {
          throw new Error(`Error: ${errorData.message || 'Failed to fetch weather data'}`);
        }
      }
      
      const weatherData = await weatherResponse.json();
      setCurrentWeather(weatherData);

      // Fetch forecast
      const forecastResponse = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (forecastResponse.ok) {
        const forecastData = await forecastResponse.json();
        setForecast(forecastData);
      } else {
        console.warn('Failed to fetch forecast data');
      }
    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    fetchWeatherData(city);
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <SearchBar onSearch={handleSearch} />
          
          {loading && (
            <div className="loading">
              <i className="fas fa-spinner fa-spin"></i>
              <p>Loading weather data...</p>
            </div>
          )}
          
          {error && (
            <div className="error">
              <i className="fas fa-exclamation-triangle"></i>
              <p>{error}</p>
            </div>
          )}
          
          {currentWeather && (
            <WeatherCard className="current-weather-card">
              <CurrentWeather weather={currentWeather} />
            </WeatherCard>
          )}
          
          {forecast && (
            <WeatherCard className="forecast-card">
              <Forecast forecast={forecast} />
            </WeatherCard>
          )}
          
          {!currentWeather && !loading && !error && (
            <div className="welcome">
              <i className="fas fa-search"></i>
              <h2>Search for a city to get weather information</h2>
              <p>Enter a city name above to see current weather and forecast</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App; 