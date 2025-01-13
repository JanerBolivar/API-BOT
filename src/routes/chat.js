import express from 'express';
import axios from 'axios';
import { token, account_id } from '../config/envs.js';

const chat = express.Router();

// Ruta para obtener una pregunta aleatoria
chat.post('/new-chat', async (req, res) => {
    const { avatar_id, avatar, message } = req.body;

    try {
        const response = await axios.post(
            `https://api.cloudflare.com/client/v4/accounts/${account_id}/ai/run/@cf/meta/llama-3.1-8b-instruct`,
            {
                prompt: `Responde la siguiente pregunta como si estuvieras hablando directamente con ${avatar}. Pregunta: ${message}`
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );

        const aiResponse = response.data.result.response;

        // Enviar la respuesta de la IA como respuesta
        res.status(200).json({
            avatar: avatar,
            mensaje: message,
            avatar_id: avatar_id,
            aiResponse: aiResponse
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

export default chat;
