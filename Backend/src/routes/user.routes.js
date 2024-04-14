import { Router } from "express";
import { loginController, registerController } from "../controllers/user.controller.js";
import { recordAudio, transcribeAudio } from "../controllers/speech.controller.js";

// Router object
const router = Router();

// Routers
// POST || LOGIN USER
router.post("/login", loginController);

// POST || REGISTER USER
router.post("/register", registerController);

// POST || RECORD AUDIO AND TRANSCRIBE
router.post('/record-audio', async (req, res, next) => {
    try {
        await recordAudio();
        res.status(200).send('Audio Recorded Successfully');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/transcribe-audio', async (req, res, next) => {
    try {
        const transcribedText = await transcribeAudio("output.wav");
        res.status(200).json({ transcribedText });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;