# Secure Auth MERN

A production-ready MERN authentication application with secure account creation, email verification, password recovery, JWT cookie sessions, MongoDB Atlas persistence, and SMTP email delivery.

[Live Demo](https://secure-auth-mern.vercel.app) | [Repository](https://github.com/Afnath-max/secure-auth-mern)

![Secure Auth MERN application preview](frontend/public/screenshot-for-readme.png)

## Overview

Secure Auth MERN is a full-stack authentication system built with React, Express, MongoDB, and Node.js. It includes the core flows expected in a modern auth product: signup, login, email verification, protected routes, forgot password, reset password, logout, and persistent session checks through HTTP-only JWT cookies.

The project is configured for local development and Vercel production deployment, with the frontend and backend served from the same deployed domain for simpler routing and cleaner API requests.

## Features

- Account signup and login
- Email verification with a 6-digit code
- Forgot password and reset password workflow
- JWT authentication stored in HTTP-only cookies
- Protected frontend routes
- MongoDB Atlas user persistence with Mongoose
- SMTP email delivery through Nodemailer
- Password visibility toggles on password fields
- Blue responsive UI built with Tailwind CSS and Framer Motion
- Vercel-ready full-stack deployment
- Fast public page loading with route-level frontend code splitting

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 18, Vite, React Router, Zustand |
| Styling | Tailwind CSS, Framer Motion, Lucide React |
| Backend | Node.js, Express |
| Database | MongoDB Atlas, Mongoose |
| Auth | JWT, HTTP-only cookies, bcrypt |
| Email | Nodemailer with SMTP |
| Deployment | Vercel |

## Project Structure

```text
secure-auth-mern/
|-- api/                    # Vercel serverless API entry
|-- backend/                # Express API, auth routes, DB, mail, models
|-- frontend/               # React + Vite client
|-- vercel.json             # Vercel full-stack deployment config
|-- package.json            # Backend/root scripts and dependencies
`-- README.md
```

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

For Gmail SMTP, create a Google App Password and use that value for `MAIL_PASSWORD`. Do not use your normal Gmail account password.

## Installation

Install backend/root dependencies:

```powershell
npm install
```

Install frontend dependencies:

```powershell
npm install --prefix frontend
```

## Local Development

Start the backend from the project root:

```powershell
npm run dev
```

Start the frontend in another terminal:

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

The production build installs dependencies and generates the Vite frontend output in `frontend/dist`.

## API Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | API health check |
| `POST` | `/api/auth/signup` | Create a new user and send verification email |
| `POST` | `/api/auth/verify-email` | Verify a user's email code |
| `POST` | `/api/auth/login` | Authenticate a user |
| `POST` | `/api/auth/logout` | Clear the auth cookie |
| `GET` | `/api/auth/check-auth` | Validate the current session |
| `POST` | `/api/auth/forgot-password` | Send a password reset link |
| `POST` | `/api/auth/reset-password/:token` | Reset a user's password |

## Deployment

This project is configured for Vercel using `vercel.json`.

- Frontend output directory: `frontend/dist`
- API entry: `api/index.js`
- Production URL: `https://secure-auth-mern.vercel.app`
- Runtime: Node.js 22.x

Required production environment variables should be added in the Vercel project settings before deployment.

## Security Notes

- Keep `.env` private. It is ignored by Git.
- Use a long, random `JWT_SECRET` in production.
- Use Google App Passwords or equivalent SMTP app credentials.
- Do not expose verification tokens, reset tokens, or hashed passwords in API responses.
- Keep MongoDB Atlas Network Access configured for the deployment environment.
- Rotate credentials immediately if they are ever committed or shared publicly.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the backend with Nodemon |
| `npm start` | Start the backend with Node |
| `npm run build` | Install dependencies and build the frontend |
| `npm run dev --prefix frontend` | Start the Vite frontend dev server |
| `npm run lint --prefix frontend` | Run frontend ESLint |

## Status

The latest production deployment has been verified with:

- Frontend page load
- Backend health endpoint
- MongoDB-backed signup flow
- SMTP verification email delivery
- Protected auth session check
