


import config from "../config";
import axios,{AxiosError} from "axios";
export const getWeatherByCity = async function getWeatherByCity(cityName: string): Promise<any> {
    try {
      const response = await axios.get(config.OPENWEATHER_API_URL, {
        params: {
          q: cityName,
          appid: config.OPENWEATHER_API_KEY,
          units: "metric"
        }
      });
      const data = response.data;
      return data;
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            throw new AxiosError(`Axios Error: ${error.message}`);
          } else {
            throw new Error('An unexpected error occurred.');
          }
    }
  }
  