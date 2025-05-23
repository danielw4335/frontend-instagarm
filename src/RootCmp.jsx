import React, { useRef, useEffect } from 'react'
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router'
import { useModal } from './customHooks/ModalContext.jsx'
import { BasicModal } from './cmps/BasicModal.jsx'
import { Explore } from './pages/Explore.jsx'
import { Messenger } from './pages/Messenger'
import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { StoryIndex } from './pages/StoryIndex.jsx'
// import { ChatIndex } from './pages/ChatIndex.jsx'
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
import { loadUsers, login, signup } from './store/actions/user.actions.js'
import { loadStories } from './store/actions/story.actions.js'
import { StoriesBar } from './cmps/StoriesBar.jsx'
import { useSelector } from 'react-redux'
import LoadingBar from 'react-top-loading-bar'
import { LoaderInstagram } from './cmps/LoaderInstagram.jsx'
import { loadChats } from './store/actions/chat.actions.js'


export function RootCmp() {
	const location = useLocation()
	const path = location.pathname
	const loadingBar = useRef(null);
	const isLoading = useSelector(storeState => storeState.storyModule.isLoading)
	const { modalState, close } = useModal()
	const stories = useSelector(storeState => storeState.storyModule.stories)
	const user = useSelector(storeState => storeState.userModule.loggedInUser)

	const navigate = useNavigate()
	const loggedInUser = {
		username: 'daniel_335',
		fullname: 'daniel wallach',
		password: 'e%0YFxtl',
	}

	// useEffect(() => {

	// 	console.log(' useEffect user:', user)
	//     if (!user && path !== '/login' && path !== '/signup') {
	//         navigate('/login')
	//     }
	// }, [user, path])

	useEffect(() => {
		if (!loadingBar.current) return
		if (isLoading) loadingBar.current.continuousStart()
		else loadingBar.current.complete()
	}, [isLoading])

	// useEffect(() => {
	//     if (user && user._id) {
	//         loadUsers()
	//         loadStories()
	//         loadChats(user._id)
	//     }
	// }, [user])

	useEffect(() => {
		if (user && user._id) {
			loadChats(user._id)
		}
	}, [user])

	useEffect(() => {
		onLoad()
	}, [])

	async function onLoad() {
		const loggedUser = await login(loggedInUser)
		await Promise.all([
			loadUsers(),
			loadStories()
		])
		await loadChats(loggedUser._id)
	}

	return (
		<section className="section-layout">
			<LoadingBar ref={loadingBar} style={{ background: 'linear-gradient(90deg,#fdc468,#fa7e1e,#e1306c,#c13584,#833ab4)' }} className="ig-top-bar" height={2.5} />
			{isLoading && <LoaderInstagram />}
			{(!['/login', '/messenger'].includes(path)) && <AppHeader />}
			<UserMsg />
			{/* <StoriesBar items={stories} /> */}
			{path !== '/login' && <SideNav />}
			{/* <main> */}
			{modalState.isOpen && (
				<BasicModal
					type={modalState.modalType}
					storyId={modalState.storyId}
					onClose={close}
				/>
			)}
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
				{/* <Route path="chat" element={<ChatIndex />} /> */}
				{/* <Route path="admin" element={<AdminIndex />} /> */}
				{/* <Route path="/search" element={<AdminIndex />} /> */}
				<Route path="/explore" element={<Explore />} />
				{/* <Route path="/reels" element={<AdminIndex />} /> */}
				<Route path="/messenger" element={<Messenger />} />
				{/* <Route path="/Notifications" element={<AdminIndex />} /> */}
				{/* <Route path="/create" element={<UploadImg />} /> */}
				{/* <Route path="/profile" element={<AdminIndex />} /> */}
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
			{/* </main> */}

			{(!['/login', '/messenger'].includes(path)) && <BottomNav />}

		</section>
	)
}
