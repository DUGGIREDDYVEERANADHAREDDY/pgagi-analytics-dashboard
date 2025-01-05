import React, { useState, useEffect } from "react";
import axios from "axios";
import { Commet } from 'react-loading-indicators';
import { Helmet } from "react-helmet";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Your Weather API Key
const WeatherAPIKey = "23ef82d0f9d6110288f6acbad8c659df"; // Replace with a valid API key

// Weather Component
const Weather = ({ city, coordinates }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    } else if (coordinates) {
      fetchWeatherDataByCoordinates(coordinates);
    }
  }, [city, coordinates]);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherAPIKey}&units=metric`
      );
      if (response.status === 200) {
        fetchForecastData(response.data.coord.lat, response.data.coord.lon);
        setWeatherData(response.data);
      } else {
        setError("");
      }
    } catch (err) {
      setError("");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherDataByCoordinates = async ({ lat, lon }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WeatherAPIKey}&units=metric`
      );
      if (response.status === 200) {
        fetchForecastData(lat, lon);
        setWeatherData(response.data);
      } else {
        setError();
      }
    } catch (err) {
      setError();
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchForecastData = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${WeatherAPIKey}&units=metric`
      );
      const forecast = response.data.daily.map((day) => ({
        date: new Date(day.dt * 1000).toLocaleDateString(),
        temperature: day.temp.day.toFixed(9),
        humidity: day.humidity,
        pressure: day.pressure,
      }));
      setForecastData(forecast);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="weather-container bg-white rounded-xl shadow-lg p-6 max-w-full sm:max-w-sm mx-auto text-center overflow-y-auto max-h-[600px]">
      <h2 className="text-lg font-semibold text-blue-600 mb-4">Weather App</h2>

      {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <Commet color="#0bb5c9" size="medium" text="PGAGI" textColor="#7bc8d1" />
          </div>
        )}
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <>
          <div className="weather-icon mb-4">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
              alt="Weather Icon"
              className="mx-auto"
            />
          </div>

          <div className="temperature text-5xl font-bold text-gray-800 mb-2">
            {weatherData.main.temp}°C
          </div>
          <div className="description text-lg text-gray-600 capitalize mb-2">
            {weatherData.weather[0].description}
          </div>

          <div className="location text-sm text-gray-500">
            📍 {weatherData.name}, {weatherData.sys.country}
          </div>

          <h3 className="text-lg font-semibold mb-4">7-Day Forecast</h3>
          <div className="forecast-charts mb-6 overflow-x-auto">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={forecastData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="temperature" fill="#8884d8" name="Temperature (°C)" />
                <Bar dataKey="humidity" fill="#82ca9d" name="Humidity (%)" />
                <Bar dataKey="pressure" fill="#ff7300" name="Pressure (hPa)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

// Dashboard Component (Main Page)
const Dashboard = () => {
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city) {
      fetchCitySuggestions(city);
    } else {
      setSuggestions([]);
    }
  }, [city]);

  const fetchCitySuggestions = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${WeatherAPIKey}&units=metric`
      );
      setSuggestions(response.data.list || []);
    } catch (err) {
      console.error("Error fetching city suggestions", err);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      () => alert("Failed to get your location.")
    );
  };

  return (
    <>
      <Helmet>
        <title>User Dashboard - Sygnus Techlabs</title>
        <meta
          name="description"
          content="Access the Sygnus Admin Dashboard to manage restaurant listings, view statistics, and perform administrative tasks efficiently."
        />
        <link rel="icon" href="images/PGAGI.jpeg" />
      </Helmet>
      <div className="dashboard-sections flex flex-col gap-6 p-6">
        <div className="weather-section p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold mb-4">Weather App</h2>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-full mb-4"
          />
          {loading && <p>Loading city suggestions...</p>}
          {suggestions.length > 0 && (
            <ul className="suggestions-list border border-gray-300 rounded-lg max-h-40 overflow-y-scroll">
              {suggestions.map((suggestion) => {
                const regex = new RegExp(`(${city})`, "i");
                const parts = suggestion.name.split(regex);

                return (
                  <li
                    key={suggestion.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setCity(suggestion.name);
                      setSuggestions([]);
                    }}
                  >
                    {parts.map((part, index) =>
                      regex.test(part) ? (
                        <span key={index} className="font-bold text-blue-500">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}, {suggestion.sys.country}
                  </li>
                );
              })}
            </ul>
          )}
          {suggestions.length === 0 && city && !loading && (
            <p className="text-gray-500 text-sm mt-2">No cities found.</p>
          )}
          <button
            onClick={getCurrentLocation}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Use Current Location
          </button>
          {city && <Weather city={city} />}
          {coordinates && <Weather coordinates={coordinates} />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
