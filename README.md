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

<h2 align="center">Overview</h2>

<p align="center">
Secure Auth MERN is a complete authentication application built with React, Express, MongoDB, and Node.js. It covers the account flows used in real products: signup, login, email verification, protected routes, forgot password, reset password, logout, and session checking with HTTP-only JWT cookies.
</p>

<p align="center">
The app is deployed as a full-stack Vercel project. The React frontend, Express API, MongoDB Atlas database, and SMTP mail delivery are configured to work together from a single production domain.
</p>

<h2 align="center">Key Features</h2>

<div align="center">

| Authentication | Security | Platform |
| --- | --- | --- |
| Signup and login | HTTP-only JWT cookies | Vercel full-stack deployment |
| Email verification code | bcrypt password hashing | MongoDB Atlas persistence |
| Forgot password flow | Safe user API responses | SMTP email delivery |
| Reset password flow | Protected verified routes | Fast public page loading |
| Session check route | Private environment config | Blue responsive UI |

</div>

<h2 align="center">Tech Stack</h2>

<div align="center">

| Area | Tools |
| --- | --- |
| Frontend | React 18, Vite, React Router, Zustand |
| UI | Tailwind CSS, Framer Motion, Lucide React |
| Backend | Node.js, Express |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, HTTP-only cookies, bcrypt |
| Email | Nodemailer, SMTP |
| Deployment | Vercel |

</div>

<h2 align="center">Architecture</h2>

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

<h2 align="center">Core Flows</h2>

<div align="center">

| Flow | Description |
| --- | --- |
| Signup | Creates a user, hashes the password, stores the account, sends a verification code, and starts a cookie session. |
| Verify Email | Confirms the 6-digit code and unlocks protected access. |
| Login | Validates credentials and issues a JWT cookie. |
| Check Auth | Validates the current session and returns the safe user profile. |
| Forgot Password | Creates a reset token and sends a reset link by email. |
| Reset Password | Validates the reset token and stores a new hashed password. |
| Logout | Clears the authentication cookie. |

</div>

<h2 align="center">API Reference</h2>

<div align="center">

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

</div>

<h2 align="center">Environment Variables</h2>

<p align="center">
Create a <code>.env</code> file in the project root. Keep this file private and never commit real credentials.
</p>

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

<p align="center">
For Gmail SMTP, use a Google App Password for <code>MAIL_PASSWORD</code>. Do not use your normal Gmail password.
</p>

<h2 align="center">Local Setup</h2>

<div align="center">

| Step | Command |
| --- | --- |
| Install root dependencies | `npm install` |
| Install frontend dependencies | `npm install --prefix frontend` |
| Start backend | `npm run dev` |
| Start frontend | `cd frontend` then `npm run dev` |
| Open app | `http://localhost:5173/login` |

</div>

<h2 align="center">Production Build</h2>

```powershell
npm run build
```

<p align="center">
The build command installs dependencies and generates the Vite production output in <code>frontend/dist</code>.
</p>

<h2 align="center">Vercel Deployment</h2>

<div align="center">

| Setting | Value |
| --- | --- |
| Frontend output | `frontend/dist` |
| API entry | `api/index.js` |
| Runtime | Node.js 22.x |
| Production URL | `https://secure-auth-mern.vercel.app` |

</div>

<p align="center">
Add the environment variables from <code>.env</code> to the Vercel project before deploying.
</p>

<h2 align="center">Scripts</h2>

<div align="center">

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Express backend with Nodemon |
| `npm start` | Start the Express backend with Node |
| `npm run build` | Install dependencies and build the frontend |
| `npm run dev --prefix frontend` | Start the Vite frontend |
| `npm run lint --prefix frontend` | Run frontend ESLint |

</div>

<h2 align="center">Security</h2>

<div align="center">

| Practice | Implementation |
| --- | --- |
| Private configuration | `.env` is ignored by Git |
| Password storage | Passwords are hashed with bcrypt |
| Session storage | JWT sessions use HTTP-only cookies |
| Safe API responses | Passwords, verification tokens, and reset tokens are removed |
| Production access | MongoDB Atlas Network Access must allow the deployment environment |
| Credential hygiene | Rotate production secrets if they are ever exposed |

</div>

<h2 align="center">Verification</h2>

<div align="center">

| Check | Status |
| --- | --- |
| Frontend page load | Verified |
| Backend health endpoint | Verified |
| MongoDB-backed signup | Verified |
| SMTP verification email delivery | Verified |
| Auth session check | Verified |
| Vercel production routing | Verified |

</div>

---

<div align="center">

Built for secure, portfolio-ready MERN authentication workflows.

</div>
