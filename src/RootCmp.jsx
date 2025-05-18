import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { useModal } from './customHooks/ModalContext.jsx'
import { BasicModal } from './cmps/BasicModal.jsx'

// import { HomePage } from './pages/HomePage'
import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { StoryIndex } from './pages/StoryIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
// import { AdminIndex } from './pages/AdminIndex.jsx'

import { UserDetails } from './pages/UserDetails'

import { AppHeader } from './cmps/AppHeader'
// import { AppFooter } from './cmps/AppFooter'

import { StoryDetails } from './cmps/StoryDetails.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { SideNav } from './cmps/SideNav.jsx'
import { BottomNav } from './cmps/BottomNav.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'
import { loadUsers, login } from './store/actions/user.actions.js'
import { loadStories } from './store/actions/story.actions.js'

export function RootCmp() {
	const { modalState, close } = useModal()
	const loggedinUser = {
		_id: 'u101',
		username: 'danielwallache',
		password: 'pass1',
	}

	useEffect(() => {
		onLoad()
	}, [])

	async function onLoad() {
		await loadUsers()
		await loadStories()
		await login(loggedinUser)
	}

	return (
		<div className="main-container">
			<AppHeader />
			<UserMsg />
			<SideNav />
			<BottomNav />
			{modalState.isOpen && (
				<BasicModal
					type={modalState.modalType}
					storyId={modalState.storyId}
					onClose={close}
				/>
			)}
			<main>
				<Routes>
					{/* <Route path="" element={<HomePage />} /> */}
					<Route path="about" element={<AboutUs />}>
						<Route path="team" element={<AboutTeam />} />
						<Route path="vision" element={<AboutVision />} />
					</Route>
					<Route path="/" element={<StoryIndex />} />
					{/* <Route path="story/:storyId" element={<StoryIndex />} /> */}
					<Route path="/:storyId" element={<StoryDetails />} />
					<Route
						path="/u/:userId/:storyId"
						element={<StoryDetails />}
					/>
					{/* <Route path="story" element={<StoryIndex />} /> */}
					<Route path="/u/:userId" element={<UserDetails />} />
					{/* <Route path="u/d/:id" element={<UserDetails />} /> */}
					<Route path="review" element={<ReviewIndex />} />
					{/* <Route path="admin" element={<AdminIndex />} /> */}
					{/* <Route path="/search" element={<AdminIndex />} /> */}
					{/* <Route path="/explore" element={<AdminIndex />} /> */}
					{/* <Route path="/reels" element={<AdminIndex />} /> */}
					{/* <Route path="/messages" element={<AdminIndex />} /> */}
					{/* <Route path="/Notifications" element={<AdminIndex />} /> */}
					{/* <Route path="/create" element={<UploadImg />} /> */}
					{/* <Route path="/profile" element={<AdminIndex />} /> */}
					<Route path="login" element={<LoginSignup />}>
						<Route index element={<Login />} />
						<Route path="signup" element={<Signup />} />
					</Route>
				</Routes>
			</main>
			{/* <AppFooter /> */}
		</div>
	)
}
