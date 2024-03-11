import { Router } from "express";
import { loginController,registerController } from "../controllers/user.controller.js";

//router object
const router = Router();

//routers
// POST || LOGIN USER
router.post("/login", loginController);

//POST || REGISTER USER
router.post("/register", registerController);

export default router;