import { useState } from 'react'
import { useNavigate } from 'react-router'
import { signup } from '../store/actions/user.actions'
import { userService } from '../services/user'

import { NavLink } from 'react-router-dom'

export function Signup() {
    const [credentials, setCredentials] = useState(userService.getEmptyUser())
    const navigate = useNavigate()

    function clearState() {
        setCredentials({ username: '', password: '', fullname: '' })
    }

    function handleChange(ev) {
        const type = ev.target.type

        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    async function onSignup(ev = null) {
        if (ev) ev.preventDefault()

        if (!credentials.username || !credentials.password || !credentials.fullname) return
        await signup(credentials)
        clearState()
        navigate('/')
    }

    return (

        <div className="signup-main-container">
            <div className="signup-container">
                <h1 className="icon-logo">Instagram</h1>
                <p className="signup-title">
                    Sign up to see photos and videos<br />from your friends.
                </p>
                <button className="facebook-signup-btn">
                    <span className="fb-icon">🎞️</span> Log in with Facebook
                </button>
                <div className="or-container">
                    <div className="line"></div>
                    <span className="or-text">OR</span>
                    <div className="line"></div>
                </div>
                <form className="signup-form">
                    <input type="text" name="email"
                        required placeholder="Mobile Number or Email" className="signup-input" />
                    <input type="password" name="password" onChange={handleChange}
                        required placeholder="Password" className="signup-input" />
                    <input type="text" name="fullname" onChange={handleChange}
                        required placeholder="Full Name" className="signup-input" />
                    <input type="text" name="username" onChange={handleChange}
                        required placeholder="Username" className="signup-input" />
                    <p className="signup-info">
                        People who use our service may have uploaded your contact information to Instagram.
                        <a href="" className="signup-link">Learn More</a>
                    </p>
                    <p className="signup-terms">
                        By signing up, you agree to our
                        <a href="" className="signup-link">Terms</a>,&nbsp;
                        <a href="" className="signup-link">Privacy Policy</a> and&nbsp;
                        <a href="" className="signup-link">Cookies Policy</a>.
                    </p>
                    <button className="signup-btn" type="submit">Sign up</button>
                </form>
            </div>
            <div className="login-box">
                Have an account?
                <NavLink to="/login" className="login-link">Log in</NavLink>
            </div>
        </div>
    )
}