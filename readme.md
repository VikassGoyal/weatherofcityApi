
# Project Title

A brief description of what this project does and who it's for

# WeatherOfCityApi

**WeatherOfCityApi** is a Node.js application that provides a simple **GET API** to fetch the weather of a city based on a query parameter `city`. Internally, the API uses the **OpenWeather API** to fetch weather data, and **Axios** is used to make HTTP requests to the OpenWeather API.

## Features

- **GET API** to fetch weather data for a city.
- Uses **Axios** to make HTTP requests to the OpenWeather API.
- Organized with a clean and maintainable folder structure.
- Implements **unit testing** using **Jest**.
- Custom **logging** using **Winston** for capturing logs.

## Folder Structure

```bash
src/
├── controllers/           # Contains logic for API request handling.
│   └── weatherController.ts
├── routers/               # Contains routes for the API.
│   └── weatherRouter.ts
├── services/              # Contains logic for interacting with external APIs (OpenWeather API).
│   └── weatherService.ts
├── test/                  # Contains unit tests.
│   └── weather.test.ts
├── logger.ts              # Configurations for Winston logging.
├── config.ts              # Configuration settings (e.g., API key, base URL).
└── index.ts               # Entry point of the application.
```
 ## Setup
    1. Clone the Repository
    git clone https://github.com/your-username/weatherofcityapi.git
    cd weatherofcityapi

    2. Install Dependencies
       Install all the required dependencies using npm:
       npm install

    3. Set Up Environment Variables
       Create a .env file based on the .env.example file and  configure your environment variables.
       cp .env.example .env

    4. Compile TypeScript Files
       Run the following command to compile the TypeScript f iles into JavaScript:
       npm run build

    5. Start the Application
       To start the application after building the TypeScript files:
       npm run start

      To run the application in development mode (using TypeScript directly):
      npm run dev

    6. Run Unit Tests
      The project uses Jest for unit testing. To run the tests, use the following command:
       npm run test

## Unit Tests
    In the test folder, you will find a file named weather.test.ts, which contains unit tests for the weather API. The tests cover scenarios such as:

    Should return weather data when city is provided.
    Should return weather data when city name is not provided provided.
    Should handle axios error and return 404.
    Should be internal server error


## Logging
   We use Winston for logging purposes. The logger     configuration is in logger.ts, which ensures logs are captured  for debugging and monitoring. Logs are written to the console, and additional configurations can allow logging to files.

## Technology Stack
    Node.js: JavaScript runtime used for building the API.
    Express: Web framework to handle HTTP requests and routes.
    Axios: HTTP client to interact with the OpenWeather API.
    Winston: Logging utility for capturing errors, requests, and other events.
    Jest: JavaScript testing framework to write and run unit tests.

## Contribution
Feel free to fork this project and submit pull requests. If you encounter any issues or have suggestions, please open an issue on the repository.