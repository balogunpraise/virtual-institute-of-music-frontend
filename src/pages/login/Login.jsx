import './login.css'
import { FaArrowRight, FaEye } from 'react-icons/fa'
import logo from '../../img/logo.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Login() {
	const navigate = useNavigate()
	const [showPassword, setShowPassword] = useState('password')
	const [cred, setCred] = useState({
		email: '',
		password: '',
		rememberMe: false,
	})

	const { email, password, rememberMe } = cred
	const revealPassword = (e) => {
		e.preventDefault()
		if (showPassword === 'password') {
			setShowPassword('test')
		} else {
			setShowPassword('password')
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!email || !password) {
			return
		} else {
			navigate('/dashboard')
		}
	}

	const handleInputs = (e) => {
		setCred((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
	return (
		<div className='grid place-content-center min-h-screen max-w-full login-page'>
			<div className='login p-5'>
				<div className='heading-section'>
					<img
						src={logo}
						style={{ width: '80px', borderRadius: '50%' }}
						alt='logo'
					/>
					<div className='titel'>
						<div className='heading'>
							<h1 className='text-white heading'>Login Here</h1>
						</div>
					</div>
				</div>

				<form onSubmit={handleSubmit} className='mt-6'>
					<div className='form-control flex flex-col mt-6'>
						<label className='input-label' htmlFor='email'>
							Email or Username
						</label>
						<input
							className='input-field'
							type='text'
							name='email'
							id='email'
							value={email}
							placeholder='Enter your email or username'
							onChange={handleInputs}
						></input>
					</div>
					<div className='form-control password flex flex-col mt-4'>
						<label className='input-label' htmlFor='email'>
							Password
						</label>
						<div className='flex password-input-cover'>
							<input
								className='input-field password-field'
								type={showPassword}
								name='password'
								value={password}
								id='password'
								onChange={handleInputs}
							></input>
							<div className='reveal-div place-content-center grid'>
								<button onClick={revealPassword}>
									<FaEye />
								</button>
							</div>
						</div>
					</div>
					<div className='form-control flex gap-1 mt-4'>
						<input
							className='input-check'
							type='checkbox'
							name='check'
							id='check'
							value={rememberMe}
							onChange={handleInputs}
						></input>
						<label className='input-label' htmlFor='check'>
							Keep Me Logged In
						</label>
					</div>
					<button type='submit' className='signin-button mt-6'>
						<FaArrowRight />
						Signin
					</button>
				</form>
				<div className='other-options w-full flex justify-around mt-4'>
					<a href='#' className='text-zinc-200'>
						Forgot Password?
					</a>
					<div
						style={{ width: '2px', height: '30px', backgroundColor: '#007cc0' }}
					></div>
					<p className='text-zinc-200'>
						New User?{' '}
						<span className='text-orange-600'>
							<Link to='/register'>Register</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Login
