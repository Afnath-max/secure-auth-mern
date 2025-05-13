import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const mailDir = path.dirname(fileURLToPath(import.meta.url));
const rootEnvPath = path.resolve(mailDir, "..", "..", ".env");

dotenv.config({ path: rootEnvPath });

const parseBoolean = (value) => {
	if (!value) return false;
	return ["true", "1", "yes"].includes(value.toLowerCase());
};

const smtpConfig = {
	host: process.env.SMTP_HOST || process.env.MAIL_HOST,
	port: Number(process.env.SMTP_PORT || process.env.MAIL_PORT || 587),
	secure: parseBoolean(process.env.SMTP_SECURE),
	requireTLS: parseBoolean(process.env.SMTP_STARTTLS || process.env.MAIL_SMTP_STARTTLS),
	user: process.env.SMTP_USER || process.env.MAIL_USERNAME,
	pass: process.env.SMTP_PASS || process.env.MAIL_PASSWORD,
	from: process.env.SMTP_FROM || process.env.AUTH_MAIL_FROM_ADDRESS,
	fromName: process.env.SMTP_FROM_NAME || process.env.MAIL_FROM_NAME || "Auth App",
};

export const assertSmtpConfigured = () => {
	const missingVars = [
		["SMTP_HOST", smtpConfig.host],
		["SMTP_PORT", smtpConfig.port],
		["SMTP_USER", smtpConfig.user],
		["SMTP_PASS", smtpConfig.pass],
	]
		.filter(([, value]) => !value)
		.map(([key]) => key);

	if (missingVars.length > 0) {
		throw new Error(`SMTP is not configured. Missing: ${missingVars.join(", ")}`);
	}
};

export const transporter = nodemailer.createTransport({
	host: smtpConfig.host,
	port: smtpConfig.port,
	secure: smtpConfig.secure,
	requireTLS: smtpConfig.requireTLS,
	auth: {
		user: smtpConfig.user,
		pass: smtpConfig.pass,
	},
});

export const sender = {
	email: smtpConfig.from || smtpConfig.user,
	name: smtpConfig.fromName,
};
