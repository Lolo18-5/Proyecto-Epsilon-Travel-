// backend/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Endpoint para obtener claves seguras
app.get('/api/keys', (req, res) => {
    res.json({ mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN });
});

// --- INICIO: ENDPOINT DE CLIMA ACTUALIZADO PARA WEATHERAPI.COM ---
app.get('/api/weather', async (req, res) => {
    const { lat, lon } = req.query;
    // Usamos la nueva clave de API del archivo .env
    const apiKey = process.env.WEATHERAPI_API_KEY;

    if (!lat || !lon) {
        return res.status(400).json({ error: 'Latitud y longitud son requeridas.' });
    }
    if (!apiKey) {
        return res.status(500).json({ error: 'La clave de API del clima no está configurada en el servidor.' });
    }

    // Nueva URL para el API de pronóstico de WeatherAPI.com
    // Pide el clima actual y un pronóstico de 5 días en una sola llamada.
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=5&aqi=no&alerts=no&lang=es`;

    try {
        const weatherResponse = await fetch(url);
        const weatherData = await weatherResponse.json();

        if (!weatherResponse.ok || weatherData.error) {
            throw new Error(weatherData.error ? weatherData.error.message : 'Error en la API de WeatherAPI.com');
        }

        res.json(weatherData);
    } catch (error) {
        console.error("Error al contactar la API de WeatherAPI.com:", error);
        res.status(500).json({ error: 'Hubo un problema al obtener los datos del clima.' });
    }
});
// --- FIN: ENDPOINT DE CLIMA ACTUALIZADO ---

// Endpoint para el Chatbot
app.post('/api/chat', async (req, res) => {
    const { message, context } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'El mensaje es requerido.' });
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const prompt = `Eres "Epsi-Chat", un asistente de turismo experto en Uruguay. Eres amigable, conciso y útil. El contexto actual es sobre: ${context || 'turismo general en Uruguay'}. El usuario pregunta: "${message}"`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ reply: text });

    } catch (error) {
        console.error("Error al contactar la API de Google Gemini:", error);
        res.status(500).json({ error: 'Hubo un problema al procesar tu solicitud con Gemini.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});