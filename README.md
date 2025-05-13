<div align="center">

# Secure Auth MERN

Full-stack authentication platform with email verification, password recovery, JWT cookie sessions, MongoDB Atlas, and SMTP email delivery.

<img src="frontend/public/screenshot-for-readme.png" alt="Secure Auth MERN application preview" width="100%" />

**Production-ready MERN authentication system for secure account workflows.**

[Live Frontend](https://secure-auth-mern.vercel.app) | [Backend API](https://secure-auth-mern.vercel.app/api/health) | [Health Check](https://secure-auth-mern.vercel.app/api/health)

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111827)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-API-111827?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Cookies-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## Overview

Secure Auth MERN is a complete authentication application built with React, Express, MongoDB, and Node.js. It covers the core account flows used in real products: signup, login, email verification, protected routes, forgot password, reset password, logout, and session checking with HTTP-only JWT cookies.

The app is deployed as a full-stack Vercel project. The React frontend, Express API, MongoDB Atlas database, and SMTP mail delivery are configured to work together from a single production domain.

## Key Features

- Secure account signup and login
- Email verification with a 6-digit code
- Forgot password and reset password flow
- JWT sessions stored in HTTP-only cookies
- Protected React routes for verified users
- MongoDB Atlas persistence through Mongoose
- SMTP transactional email through Nodemailer
- Password visibility toggles on password fields
- Fast public page loading with route-level code splitting
- Blue responsive UI with Tailwind CSS and Framer Motion
- Vercel-ready frontend and backend deployment

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | React 18, Vite, React Router, Zustand |
| UI | Tailwind CSS, Framer Motion, Lucide React |
| Backend | Node.js, Express |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, HTTP-only cookies, bcrypt |
| Email | Nodemailer, SMTP |
| Deployment | Vercel |

## Architecture

```text
secure-auth-mern/
|-- api/                    # Vercel serverless entry point
|-- backend/
|   |-- controllers/         # Auth business logic
|   |-- db/                  # MongoDB connection
|   |-- mail/                # SMTP config and email templates
|   |-- middleware/          # Token and database middleware
|   |-- models/              # Mongoose schemas
|   `-- routes/              # Express auth routes
|-- frontend/
|   |-- public/              # README preview image
|   `-- src/                 # React pages, components, store
|-- vercel.json              # Full-stack Vercel routing config
|-- package.json             # Backend/root scripts
`-- README.md
```

## Core Flows

| Flow | Description |
| --- | --- |
| Signup | Creates a user, hashes the password, stores the account, sends a verification code, and starts a cookie session. |
| Verify Email | Confirms the 6-digit code and unlocks protected access. |
| Login | Validates credentials and issues a JWT cookie. |
| Check Auth | Validates the current session and returns the safe user profile. |
| Forgot Password | Creates a reset token and sends a reset link by email. |
| Reset Password | Validates the reset token and stores a new hashed password. |
| Logout | Clears the authentication cookie. |

## API Reference

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | API health check |
| `POST` | `/api/auth/signup` | Create account and send verification code |
| `POST` | `/api/auth/verify-email` | Verify email code |
| `POST` | `/api/auth/login` | Login with email and password |
| `POST` | `/api/auth/logout` | Clear the auth cookie |
| `GET` | `/api/auth/check-auth` | Check the current JWT session |
| `POST` | `/api/auth/forgot-password` | Send password reset email |
| `POST` | `/api/auth/reset-password/:token` | Reset password with token |

## Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_long_random_jwt_secret
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Auth Mail
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_google_app_password
MAIL_SMTP_AUTH=true
MAIL_SMTP_STARTTLS=true
AUTH_MAIL_FROM_ADDRESS=your_email@gmail.com
```

For Gmail SMTP, use a Google App Password for `MAIL_PASSWORD`. Do not use your normal Gmail password.

## Local Setup

Install root dependencies:

```powershell
npm install
```

Install frontend dependencies:

```powershell
npm install --prefix frontend
```

Start the backend:

```powershell
npm run dev
```

Start the frontend in another terminal:

```powershell
cd frontend
npm run dev
```

Open:

```text
http://localhost:5173/login
```

## Production Build

```powershell
npm run build
```

The build command installs dependencies and generates the Vite production output in `frontend/dist`.

## Vercel Deployment

This repository is configured for Vercel with `vercel.json`.

| Setting | Value |
| --- | --- |
| Frontend output | `frontend/dist` |
| API entry | `api/index.js` |
| Runtime | Node.js 22.x |
| Production URL | `https://secure-auth-mern.vercel.app` |

Add the environment variables from `.env` to the Vercel project before deploying.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Express backend with Nodemon |
| `npm start` | Start the Express backend with Node |
| `npm run build` | Install dependencies and build the frontend |
| `npm run dev --prefix frontend` | Start the Vite frontend |
| `npm run lint --prefix frontend` | Run frontend ESLint |

## Security

- `.env` is ignored by Git and must stay private.
- API responses remove passwords, verification tokens, and reset tokens.
- Passwords are hashed with bcrypt before storage.
- JWT sessions are stored in HTTP-only cookies.
- Production credentials should be rotated if they are ever exposed.
- MongoDB Atlas Network Access must allow the deployment environment.

## Verification

The production deployment has been tested for:

- Frontend page load
- Backend health endpoint
- MongoDB-backed signup
- SMTP verification email delivery
- Auth session checks
- Vercel production routing

---

<div align="center">

Built for secure, portfolio-ready MERN authentication workflows.

</div>
