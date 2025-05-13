import express from "express";
import {
	login,
	logout,
	signup,
	verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { requireDB } from "../middleware/requireDB.js";

const router = express.Router();

router.get("/check-auth", verifyToken, requireDB, checkAuth);

router.post("/signup", requireDB, signup);
router.post("/login", requireDB, login);
router.post("/logout", logout);

router.post("/verify-email", requireDB, verifyEmail);
router.post("/forgot-password", requireDB, forgotPassword);

router.post("/reset-password/:token", requireDB, resetPassword);

export default router;
