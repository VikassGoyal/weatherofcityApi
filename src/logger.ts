import { createLogger, format, transports } from "winston";
 const customLevel={
    colors: {
        fatal: "red",
        error: "yellow",
        warn: "magenta",
        info: "green",
        debug: "blue",
      },
 }
const logger= createLogger({
    level: "info",
    format: format.combine(
     format.timestamp(({ format: "YYYY-MM-DD HH:mm:ss" })) ,
    format.colorize(),
    format.errors({ stack: true }),
     format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`) ,
     
    ),
    transports: [
        new transports.Console(), 
        new transports.File({ filename: "app.log" }), 
      ],
})
export default logger;