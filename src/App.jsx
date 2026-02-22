import { useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";


function Weather() {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  async function Apidata(e) {
    e.preventDefault();
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f041db7d674e560cdb6355f8bba86954&units=metric`);
    setWeatherData(response.data);
    console.log(response.data);
  }
  catch (error) {
    console.error("Error fetching weather data:", error);
  }
  }

  return (
    <div>
      <Navbar />
      <h1>Weather App</h1>
      <form onSubmit={Apidata}>
      <input type="text" placeholder="Enter your City" onChange={(e) => setCity(e.target.value)}/>
      <br/>
      <br/>
      <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>Temperature: {weatherData.main.feels_like} °C</h2>
          <p>Feels Like : {weatherData.main.temp}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Country: {weatherData.sys.country}</p>
         
        </div>
      )}

    </div>
  );
}

export default Weather;