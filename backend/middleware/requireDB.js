import { connectDB } from "../db/connectDB.js";

export const requireDB = async (req, res, next) => {
	try {
		await connectDB();
		next();
	} catch (error) {
		res.status(500).json({ success: false, message: "Database connection failed" });
	}
};
