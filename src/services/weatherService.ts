


import config from "../config";
import axios,{AxiosError} from "axios";
import logger from "../logger";
export const getWeatherByCity = async function getWeatherByCity(cityName: string): Promise<any> {
    try {
        logger.info(`Fetching weather data for city: ${cityName}`);
      const response = await axios.get(config.OPENWEATHER_API_URL, {
        params: {
          q: cityName,
          appid: config.OPENWEATHER_API_KEY,
          units: "metric"
        }
      });
      logger.info(`Successfully fetched weather data for city: ${cityName}`);
      const data = response.data;
      return data;
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            logger.error(`Axios Error: ${error.message} Stack Trace: ${error.stack || 'No stack trace available'}`);
            throw new AxiosError(
                `Axios Error: ${error.message} | ` 
               
              );
              
          } else {
            logger.error(`Unexpected Error for city: ${error.message} ${error.stack}`);
            throw new Error('An unexpected error occurred.');
          }
    }
  }
  