import { describe } from "node:test";
import { getWeatherByCity } from "../services/weatherService";
import { weather } from "../controllers/weatherControllers";
import { Request, Response } from 'express';
jest.mock('../services/weatherService',()=>({
    getWeatherByCity: jest.fn(),
}));
describe("weather controller",()=>{
    let res:any;
    beforeEach(()=>{
    (getWeatherByCity as jest.Mock).mockClear();
    res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;
    });
  test("should return weather data when city is provided",async()=>{
    const mockWeatherData = {
        name: 'London',
        sys: { country: 'GB' },
        main: { temp: 15, humidity: 75 },
        weather: [{ description: 'Clear sky' }],
        wind: { speed: 5 },
      };
    (getWeatherByCity as jest.Mock).mockResolvedValue(mockWeatherData);
    const req = { query: { city: 'London' } } as unknown as Request;
    await weather(req ,res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      city: 'London',
      country: 'GB',
      temperature: '15°C',
      weather: 'Clear sky',
      humidity: '75%',
      windSpeed: '5 m/s',
    });
  });
  
  test("should return weather data when city name is not provided provided", async()=>{
   const req = { query: {} } as unknown as Request;
  await weather(req,res);
  expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "City name is required." });
  }) 
  test("should handle axios error and return 404", async()=>{
    const mockAxiosError = {
        isAxiosError: true,
        message: "Request failed with status code 404",
      };
      (getWeatherByCity as jest.Mock).mockRejectedValue(mockAxiosError);
      const req = { query: { city: 'London' } } as unknown as Request;
      await weather(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "City not found. Please check the city name" });
  });

  test("should be internal server error", async()=>{
    const mockError = new Error("Some internal error");
    (getWeatherByCity as jest.Mock).mockRejectedValue(mockError);
    const req = { query: { city: 'London' } } as unknown as Request;
    await weather(req, res);

   
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Internal Server Error" });
  })

  });
