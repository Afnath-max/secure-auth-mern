import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Input = ({ icon: Icon, type, className = "", ...props }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const isPasswordInput = type === "password";
	const inputType = isPasswordInput && isPasswordVisible ? "text" : type;

	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='size-5 text-sky-200' />
			</div>
			<input
				{...props}
				type={inputType}
				className={`w-full pl-10 ${isPasswordInput ? "pr-11" : "pr-3"} py-2 bg-slate-900/85 rounded-lg border border-blue-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400 transition duration-200 ${className}`}
			/>
			{isPasswordInput && (
				<button
					type='button'
					aria-label={isPasswordVisible ? "Hide password" : "Show password"}
					title={isPasswordVisible ? "Hide password" : "Show password"}
					onClick={() => setIsPasswordVisible((value) => !value)}
					className='absolute inset-y-0 right-0 flex w-11 items-center justify-center text-slate-300 transition hover:text-cyan-100 focus:outline-none focus:text-cyan-100'
				>
					{isPasswordVisible ? <EyeOff className='size-5' /> : <Eye className='size-5' />}
				</button>
			)}
		</div>
	);
};
export default Input;
