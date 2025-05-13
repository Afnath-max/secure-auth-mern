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

Secure Auth MERN is a complete authentication application built with React, Express, MongoDB, and Node.js. It handles the essential account flows used in real products: signup, login, email verification, protected routes, forgot password, reset password, logout, and session checking with HTTP-only JWT cookies.

The project is deployed as a full-stack Vercel app. The React frontend, Express API, MongoDB Atlas database, and SMTP mail delivery all work together from a single production domain.

## Highlights

**Secure account lifecycle**

Signup, login, email verification, forgot password, reset password, logout, and session validation are included as complete flows.

**Production-minded auth**

Passwords are hashed with bcrypt, JWT sessions are stored in HTTP-only cookies, and sensitive fields are removed from API responses.

**Real email delivery**

Verification and password reset messages are sent through SMTP using Nodemailer.

**Deployed full stack**

The app is configured for Vercel with a serverless Express entry point, production routing, and MongoDB Atlas connectivity.

## Features

- Account signup and login
- 6-digit email verification
- Forgot password and reset password flow
- JWT authentication with HTTP-only cookies
- Protected routes for verified users
- MongoDB Atlas persistence with Mongoose
- SMTP transactional email through Nodemailer
- Password visibility controls
- Fast public page loading with route-level code splitting
- Responsive blue UI with Tailwind CSS and Framer Motion

## Tech Stack

- **Frontend:** React 18, Vite, React Router, Zustand
- **UI:** Tailwind CSS, Framer Motion, Lucide React
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas, Mongoose
- **Authentication:** JWT, HTTP-only cookies, bcrypt
- **Email:** Nodemailer, SMTP
- **Deployment:** Vercel

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

## Core User Flows

**Signup:** Creates a user, hashes the password, stores the account, sends a verification code, and starts a cookie session.

**Verify Email:** Confirms the 6-digit code and unlocks protected access.

**Login:** Validates credentials and issues a JWT cookie.

**Check Auth:** Validates the current session and returns a safe user profile.

**Forgot Password:** Creates a reset token and sends a reset link by email.

**Reset Password:** Validates the reset token and stores a new hashed password.

**Logout:** Clears the authentication cookie.

## API Reference

```text
GET    /api/health
POST   /api/auth/signup
POST   /api/auth/verify-email
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/check-auth
POST   /api/auth/forgot-password
POST   /api/auth/reset-password/:token
```

## Environment Variables

Create a `.env` file in the project root. Keep this file private and never commit real credentials.

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

Start the frontend:

```powershell
cd frontend
npm run dev
```

Open the app:

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

- Frontend output: `frontend/dist`
- API entry: `api/index.js`
- Runtime: Node.js 22.x
- Production URL: `https://secure-auth-mern.vercel.app`

Add the environment variables from `.env` to the Vercel project before deploying.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Express backend with Nodemon |
| `npm start` | Start the Express backend with Node |
| `npm run build` | Install dependencies and build the frontend |
| `npm run dev --prefix frontend` | Start the Vite frontend |
| `npm run lint --prefix frontend` | Run frontend ESLint |

## Security

- `.env` is ignored by Git and must stay private.
- Passwords are hashed with bcrypt before storage.
- JWT sessions are stored in HTTP-only cookies.
- API responses remove passwords, verification tokens, and reset tokens.
- MongoDB Atlas Network Access must allow the deployment environment.
- Production credentials should be rotated if they are ever exposed.

## Verification

The production deployment has been tested for frontend loading, backend health checks, MongoDB-backed signup, SMTP email delivery, auth session checks, and Vercel routing.

---

<div align="center">

Built for secure, portfolio-ready MERN authentication workflows.

</div>
