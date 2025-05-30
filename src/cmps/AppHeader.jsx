import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import {
	MessengerOutline,
	NotificationsOutline,
	LogoInstagramWordmark,
	InstaBuild,
} from '../assets/SVG/icons'

export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()

	// async function onLogout() {
	// 	try {
	// 		await logout()
	// 		navigate('/')
	// 		showSuccessMsg(`Bye now`)
	// 	} catch (err) {
	// 		showErrorMsg('Cannot logout')
	// 	}
	// }

	return (
		<>
			<div className="app-header-placeholder full"></div>
			<header className="app-header full">
				<div className="logo-text">
					<InstaBuild className="nav-label logo-wordmark" />
				</div>

				<section className='nav-section'>
					<NavLink to="/notifications" className="nav-item">
						<NotificationsOutline className="nav-icon" />
					</NavLink>

					<NavLink to="/messenger" className="nav-item">
						<MessengerOutline className="nav-icon" />
					</NavLink>
				</section>

			</header>
		</>
	)
}
