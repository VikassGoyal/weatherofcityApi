import express from 'express';
import bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { createLogger, format, transports } from "winston";

const app= express();

import weatherRouters from "./routes/weatherRoutes";
import logger from './logger';
const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Weather Fetch Api",
        version: "1.0.0",
        description: "API documentation for Weather Fetch Api",
      },
    },
    apis: ["./src/routes/*.ts"],
  };
  
const swaggerSpec = swaggerJsdoc(swaggerOptions);
require("dotenv").config();
app.use("/api", weatherRouters);
app.use(bodyParser.json());
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.listen(3000,()=>{
   logger.info(`Server listen at port ${process.env.PORT}`);
})