import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { assertSmtpConfigured, sender, transporter } from "./smtp.config.js";

const getFromAddress = () => {
	if (sender.email && sender.name) {
		return `"${sender.name}" <${sender.email}>`;
	}

	return sender.email;
};

const sendSmtpEmail = async ({ to, subject, html }) => {
	assertSmtpConfigured();

	const response = await transporter.sendMail({
		from: getFromAddress(),
		to,
		subject,
		html,
	});

	console.log("Email sent successfully", response.messageId);
	return response;
};

export const sendVerificationEmail = async (email, verificationToken) => {
	try {
		await sendSmtpEmail({
			to: email,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
		});
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};

export const sendWelcomeEmail = async (email, name) => {
	try {
		await sendSmtpEmail({
			to: email,
			subject: "Welcome to Auth App",
			html: `
				<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
					<h1 style="color: #2563EB;">Welcome, ${name}!</h1>
					<p>Your email has been verified successfully.</p>
					<p>You can now use your account.</p>
				</div>
			`,
		});
	} catch (error) {
		console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
	}
};

export const sendPasswordResetEmail = async (email, resetURL) => {
	try {
		await sendSmtpEmail({
			to: email,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
		});
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};

export const sendResetSuccessEmail = async (email) => {
	try {
		await sendSmtpEmail({
			to: email,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
		});
	} catch (error) {
		console.error(`Error sending password reset success email`, error);

		throw new Error(`Error sending password reset success email: ${error}`);
	}
};
