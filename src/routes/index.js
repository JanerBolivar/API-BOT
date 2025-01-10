
import e, { Router } from "express"
import chat from "./chat.js"

const router = Router()

// Rutas de usuarios
router.use("/chat", chat)


export default router