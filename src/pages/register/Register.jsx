import './register.css'
import { FaArrowRight, FaEye, FaUser } from 'react-icons/fa'
import logo from '../../img/logo.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Register() {
	const [showPassword, setShowPassword] = useState('password')
	const [showPassword2, setShowPassword2] = useState('password')
	const [cred, setCred] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const { name, email, password, password2 } = cred
	const revealPassword = (e) => {
		e.preventDefault()
		if (showPassword === 'password') {
			setShowPassword('test')
		} else {
			setShowPassword('password')
		}
	}
	const revealPassword2 = (e) => {
		e.preventDefault()
		if (showPassword2 === 'password') {
			setShowPassword2('test')
		} else {
			setShowPassword2('password')
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(cred)
	}

	const handleInputs = (e) => {
		setCred((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
	return (
		<div className='grid place-content-center min-h-screen max-w-full register-page'>
			<div className='register p-5'>
				<div className='heading-section'>
					<img
						src={logo}
						style={{ width: '80px', borderRadius: '50%' }}
						alt='logo'
					/>
					<div className='titel'>
						<div className='heading'>
							<h1 className='text-white heading'>Register Here</h1>
						</div>
					</div>
				</div>

				<form onSubmit={handleSubmit} className='mt-6'>
					<div className='form-control flex flex-col mt-6'>
						<label className='input-label' htmlFor='name'>
							Full Name
						</label>
						<input
							className='input-field'
							type='text'
							name='name'
							id='name'
							value={name}
							placeholder='Enter your full name'
							onChange={handleInputs}
						></input>
					</div>
					<div className='form-control flex flex-col mt-6'>
						<label className='input-label' htmlFor='email'>
							Email
						</label>
						<input
							className='input-field'
							type='text'
							name='email'
							id='email'
							value={email}
							placeholder='Enter your email'
							onChange={handleInputs}
						></input>
					</div>
					<div className='form-control password flex flex-col mt-4'>
						<label className='input-label' htmlFor='password'>
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
					<div className='form-control password flex flex-col mt-4'>
						<label className='input-label' htmlFor='password2'>
							Confirm Password
						</label>
						<div className='flex password-input-cover'>
							<input
								className='input-field password-field'
								type={showPassword2}
								name='password2'
								value={password2}
								id='password2'
								onChange={handleInputs}
							></input>
							<div className='reveal-div place-content-center grid'>
								<button onClick={revealPassword2}>
									<FaEye />
								</button>
							</div>
						</div>
					</div>
					<button type='submit' className='signin-button mt-6'>
						<FaUser />
						Apply
					</button>
				</form>
				<div className='other-options w-full flex justify-center gap-2 mt-4'>
					<p className='text-zinc-200'>
						<Link to='/'>Home?</Link>
					</p>
					<div
						style={{ width: '2px', height: '30px', backgroundColor: '#007cc0' }}
					></div>
					<p className='text-zinc-200 flex gap-1'>
						Have an account?{' '}
						<Link to='/login'>
							<p className='text-orange-600'>Sign in</p>
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Register
