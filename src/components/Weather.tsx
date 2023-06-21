import React, { useState, FormEvent } from "react";
import axios from "axios";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const Weather: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const apiKey = "0127e7948ab924a35f179620c93ab21d";

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const convertKelvinToCelsius = (kelvin: number): number => {
    const celsius = kelvin - 273.15;
    return Math.round(celsius * 100) / 100;
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a city"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <div>
          <h2>Weather for {weatherData.name}</h2>
          <p>
            Temperature: {convertKelvinToCelsius(weatherData.main.temp || 0)}°C
          </p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
