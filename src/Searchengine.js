import React, { useState } from "react";
import "./Searchengine.js";

function WeatherSearchEngine() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    // Simulate fetching temperature data from an API
    setTimeout(() => {
      const fakeTemperature = Math.floor(Math.random() * 40) + 10;
      setTemperature(fakeTemperature);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="weather-search-engine">
      <h2>Weather Search Engine</h2>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Type a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch} disabled={!city || loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {temperature !== null && (
        <div className="result">
          <p>
            The temperature in {city} is: {temperature}°C
          </p>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <WeatherSearchEngine />
    </div>
  );
}
