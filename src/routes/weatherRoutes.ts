 import  express   from "express";
 import {weather} from "../controllers/weatherControllers";
 const router = express.Router();
/**
 * @swagger
 * /api/weather:
 *   get:
 *     summary: Fetch the weather of a given city
 *     parameters:
 *       - name: city
 *         in: query
 *         description: Name of the city for which to fetch weather data
 *        
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with weather data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 city:
 *                   type: string
 *                   example: London
 *                 country:
 *                   type: string
 *                   example: GB
 *                 temperature:
 *                   type: string
 *                   example: "15°C"
 *                 weather:
 *                   type: string
 *                   example: Clear sky
 *                 humidity:
 *                   type: string
 *                   example: "75%"
 *                 windSpeed:
 *                   type: string
 *                   example: "5 m/s"
 *       400:
 *         description: Bad Request, city name not provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "City name is required."
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal Server Error"
 *       404:
 *         description: Bad Request, city name not correct
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "City not found. Please check the city name"
 */
       

 router.get("/weather", weather);

 export default router;