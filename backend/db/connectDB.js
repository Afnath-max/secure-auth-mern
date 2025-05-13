import mongoose from "mongoose";

let connectionPromise;

export const connectDB = async () => {
	if (mongoose.connection.readyState === 1) {
		return mongoose.connection;
	}

	if (connectionPromise) {
		return connectionPromise;
	}

	try {
		if (!process.env.MONGO_URI) {
			throw new Error("MONGO_URI is not configured");
		}

		connectionPromise = mongoose
			.connect(process.env.MONGO_URI, {
				serverSelectionTimeoutMS: 5000,
			})
			.then((conn) => {
				console.log(`MongoDB Connected: ${conn.connection.host}`);
				return conn.connection;
			});

		return await connectionPromise;
	} catch (error) {
		connectionPromise = null;
		console.log("Error connection to MongoDB: ", error.message);
		throw error;
	}
};
