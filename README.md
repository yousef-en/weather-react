# Weather App

A beautiful and modern weather application built with React that provides real-time weather information and 5-day forecasts.

## Features

- 🌤️ **Current Weather**: Display current temperature, weather conditions, humidity, wind speed, and pressure
- 📅 **5-Day Forecast**: View weather predictions for the next 5 days
- 🔍 **City Search**: Search for any city worldwide
- 📱 **Responsive Design**: Works perfectly on mobile and desktop
- 🎨 **Modern UI**: Beautiful gradient design with glassmorphism effects
- ⚡ **Fast & Lightweight**: Optimized for performance

## Setup Instructions

### 1. Get OpenWeatherMap API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Go to your profile and get your API key
4. The API key will be sent to your email

### 2. Configure API Key

1. Open `src/App.jsx`
2. Replace the demo API key with your actual API key:

```javascript
const API_KEY = 'YOUR_ACTUAL_API_KEY_HERE';
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

```bash
npm start
```

The app will open at `http://localhost:3000`

## Usage

1. Enter a city name in the search bar
2. Press Enter or click the search button
3. View current weather and 5-day forecast
4. The app will show temperature, humidity, wind speed, and weather conditions

## Troubleshooting

### "City not found" Error
- Check the spelling of the city name
- Try using the English name of the city
- Make sure the city exists in the OpenWeatherMap database

### "API key is invalid" Error
- Verify your API key is correct
- Make sure you've replaced the demo API key with your actual key
- Check if your API key is active in your OpenWeatherMap account


## API Information

This app uses the OpenWeatherMap API:
- **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
- **5-Day Forecast**: `https://api.openweathermap.org/data/2.5/forecast`




