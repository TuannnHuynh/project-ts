import { useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";

type TWeatherData = {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
    },
  ];
  wind: {
    speed: number;
  };
};

const Weather = () => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<TWeatherData | null>(null);
  const fetchDataWeather = async (param: string) => {
    setLoading(true);
    try {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=ea49b41f62c01a27dd1accf7c6e5c43e`,
      );
      const data = res.data;
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataWeather("Ho Chi Minh City");
  }, []);
  const handleSearch = (
    e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    fetchDataWeather(search);
    setSearch("");
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="mt-10 bg-slate-200 py-10">
      <h2 className="mb-3 text-center text-4xl">Search Weather</h2>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={(e) => handleSearch(e)}
      />
      {loading ? (
        <div className="text-center text-5xl">Loading...</div>
      ) : (
        weatherData && (
          <div className="text-center">
            <h3 className="my-1 text-xl font-medium">
              {weatherData.name} - <span>{weatherData.sys.country}</span>
            </h3>
            <div className="weather-date">
              <span>{getCurrentDate()}</span>
            </div>
            <div className="temp">{weatherData.main.temp}</div>
            <p className="weather-des">
              {weatherData.weather && weatherData.weather[0]
                ? weatherData.weather[0].description
                : ""}
            </p>
            <div className="weather-info">
              <div>
                <p className="speed">{weatherData.wind.speed}</p>
                <p>Wind Speed</p>
              </div>
              <div>
                <p className="humidity">{weatherData.main.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
