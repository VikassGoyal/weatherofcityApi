import { Request, Response } from "express";
import { getWeatherByCity } from "../services/weatherService";
import logger from "../logger";
import  axios ,{ AxiosError } from "axios";

export const weather = async (req: Request, res: Response): Promise<void> => {
  try {
    const { city } = req.query;

    if (!city || typeof city !== "string") {
        logger.error("Invalid city name provided or city name missing in the request");
      res.status(400).json({ error: "City name is required." });
      
    } else {
      const response = await getWeatherByCity(city.trim());
      res.status(200).json({
        city: response.name,
        country: response.sys.country,
        temperature: `${response.main.temp}°C`,
        weather: response.weather[0].description,
        humidity: `${response.main.humidity}%`,
        windSpeed: `${response.wind.speed} m/s`
      });
    }
  } catch (error:any) {
    if (axios.isAxiosError(error)) {
      logger.error(
        `Axios Error: ${error.message} | ` +
          `Stack Trace: ${error.stack || "No stack trace available"} | ` 
         
      );

      res
        .status(404)
        .json({ error: "City not found. Please check the city name" });
    } else {
      logger.error(
        `Unexpected error: ${error.message} | ` +
          `Stack Trace: ${error.stack || "No stack trace available"}`
      );

      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
