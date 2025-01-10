import express from 'express';

const chat = express.Router();

// Ruta para obtener una pregunta aleatoria
chat.post('/new-chat', async (req, res) => {

    const { avatar, message } = req.body;

    try {
        // Enviar la pregunta como respuesta
        res.status(200).json({
            message: 'Se recio el siguiente mensaje:',
            avatar: avatar,
            mensaje: message
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

export default chat;
