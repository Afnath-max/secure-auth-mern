import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";

import LoadingSpinner from "./components/LoadingSpinner";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const EmailVerificationPage = lazy(() => import("./pages/EmailVerificationPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, isCheckingAuth, user } = useAuthStore();

	if (isCheckingAuth) {
		return <LoadingSpinner />;
	}

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user?.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user?.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};

const VerificationRoute = ({ children }) => {
	const { isAuthenticated, isCheckingAuth, user } = useAuthStore();

	if (isCheckingAuth) {
		return <LoadingSpinner />;
	}

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (user?.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};

function App() {
	const { checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	return (
		<div
			className='min-h-screen bg-gradient-to-br
    from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center relative overflow-hidden'
		>
			<FloatingShape color='bg-blue-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-cyan-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-sky-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />

			<div className='relative z-10 flex w-full items-center justify-center px-4'>
				<Suspense fallback={<LoadingSpinner />}>
					<Routes>
						<Route
							path='/'
							element={
								<ProtectedRoute>
									<DashboardPage />
								</ProtectedRoute>
							}
						/>
						<Route
							path='/signup'
							element={
								<RedirectAuthenticatedUser>
									<SignUpPage />
								</RedirectAuthenticatedUser>
							}
						/>
						<Route
							path='/login'
							element={
								<RedirectAuthenticatedUser>
									<LoginPage />
								</RedirectAuthenticatedUser>
							}
						/>
						<Route
							path='/verify-email'
							element={
								<VerificationRoute>
									<EmailVerificationPage />
								</VerificationRoute>
							}
						/>
						<Route
							path='/forgot-password'
							element={
								<RedirectAuthenticatedUser>
									<ForgotPasswordPage />
								</RedirectAuthenticatedUser>
							}
						/>

						<Route
							path='/reset-password/:token'
							element={
								<RedirectAuthenticatedUser>
									<ResetPasswordPage />
								</RedirectAuthenticatedUser>
							}
						/>
						{/* catch all routes */}
						<Route path='*' element={<Navigate to='/' replace />} />
					</Routes>
				</Suspense>
			</div>
			<Toaster />
		</div>
	);
}

export default App;
