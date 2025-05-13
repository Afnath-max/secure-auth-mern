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

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(rootDir, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(rootDir, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});
