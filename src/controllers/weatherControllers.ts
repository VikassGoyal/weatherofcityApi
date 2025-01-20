import { Request, Response } from "express";
import { getWeatherByCity } from "../services/weatherService";

export const weather = async (req: Request, res: Response): Promise<void> => {
  try {
    const { city } = req.query;
   

    if (!city) {
      res.status(400).json({ error: "City name is required." });
    } else {
      const response = await getWeatherByCity(city.toString());
      res.status(200).json({
        city: response.name,
        country: response.sys.country,
        temperature: `${response.main.temp}°C`,
        weather: response.weather[0].description,
        humidity: `${response.main.humidity}%`,
        windSpeed: `${response.wind.speed} m/s`
      });
    }
  } catch (error: any) {
    if (error.isAxiosError) {
      res.status(404).json({ error: "City not found. Please check the city name" });
    } else {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
