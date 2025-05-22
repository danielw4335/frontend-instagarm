import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { userService } from '../services/user'
import { login } from '../store/actions/user.actions'
import homeImg from '../assets/img/login-image.png'
import { NavLink } from 'react-router-dom'

export function Login() {
	const navigate = useNavigate()
	const users = useSelector((storeState) => storeState.userModule.users)
	const [credentials, setCredentials] = useState({})
	
	async function onLogin(ev = null) {
		// if (ev) ev.preventDefault()
		
		console.log(' Login credentials:', credentials)
		if (!credentials.username) return
		await login(credentials)
		navigate('/')
	}

	// function handleChange(ev) {
	// 	const field = ev.target.name
	// 	const value = ev.target.value
	// 	setCredentials({ ...credentials, [field]: value })
	// }

	 function handleChange({ target }) {
        let { value, name: field, type, checked } = target
        switch (type) {
            case 'number':
            case 'range':
                value = +value
                break
            case 'checkbox':
                value = checked

            default: break
        }
        setCredentials((prevCred) => ({ ...prevCred, [field]: value }))
    }

	return (
		<section className='login-page full'>
			<div className="login-left">
				<img src={homeImg} alt="home" className="home-img" />
			</div>
			{/* <form className="login-form" onSubmit={onLogin}> */}
			{/* <select
				name="username"
				value={credentials.username}
				onChange={handleChange}
				>
				<option value="">Select User</option>
				{users.map((user) => (
					<option key={user._id} value={user.username}>
					{user.fullname}
					</option>
					))}
					</select> */}
			<div className="login-right">
				<form className="login-form" onSubmit={onLogin}>
					<input
						type="text"
						placeholder="Phone number, username, or email"
						className="login-input"
						autoComplete="username"
						value={credentials.username}
						onChange={handleChange}
					/>
					<input
						type="password"
						placeholder="Password"
						className="login-input"
						value={credentials.password}
						onChange={handleChange}
					/>
					<button className="login-btn" type="submit">Log in</button>
					<div className="or-container">
						<div className="line"></div>
						<span className="or-text">OR</span>
						<div className="line"></div>
					</div>
					<button className="facebook-btn" type="button">
						<span className="fb-icon">🎞️</span>
						Log in with Facebook
					</button>
					<a className="forgot-link" href="#">Forgot password?</a>
				</form>
				<div className="signup-container">
					<span>Don't have an account?</span>
					<NavLink to="/signup" className="signup-link">Sign up</NavLink>
				</div>
			</div>
		</section >
	)
}
