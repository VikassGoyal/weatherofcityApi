require("dotenv").config();
interface config{
    OPENWEATHER_API_URL: string;
    OPENWEATHER_API_KEY: string;
}

const getEnvVariable = (key: string): string => {
    const value = process.env[key]; // Access the value from process.env using the key
    if (!value) {
      throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
  };
  
const config :config={
    OPENWEATHER_API_URL: getEnvVariable("OPENWEATHER_API_URL"),
    OPENWEATHER_API_KEY: getEnvVariable("OPENWEATHER_API_KEY"),
}
export default config;