import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

const backendDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(backendDir, "..");

dotenv.config({ path: path.join(rootDir, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

const isAllowedOrigin = (origin) => {
	if (!origin) return true;
	if (origin === "http://localhost:5173") return true;
	if (process.env.CLIENT_URL && origin === process.env.CLIENT_URL) return true;

	try {
		const { hostname } = new URL(origin);
		return hostname === "vercel.app" || hostname.endsWith(".vercel.app");
	} catch {
		return false;
	}
};

app.set("trust proxy", 1);

app.use(
	cors({
		origin: (origin, callback) => {
			if (isAllowedOrigin(origin)) {
				return callback(null, true);
			}

			return callback(new Error("Not allowed by CORS"));
		},
		credentials: true,
	})
);

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use(async (req, res, next) => {
	try {
		await connectDB();
		next();
	} catch (error) {
		res.status(500).json({ success: false, message: "Database connection failed" });
	}
});

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production" && !process.env.VERCEL) {
	app.use(express.static(path.join(rootDir, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(rootDir, "frontend", "dist", "index.html"));
	});
}

if (!process.env.VERCEL) {
	app.listen(PORT, () => {
		console.log("Server is running on port: ", PORT);
	});
}

export default app;
