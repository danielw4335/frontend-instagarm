import React from 'react'
import { Routes, Route } from 'react-router'

// import { HomePage } from './pages/HomePage'
import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { FidIndex } from './pages/FidIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { AdminIndex } from './pages/AdminIndex.jsx'

// import { StoryDetails } from './pages/StoryDetails'
import { UserDetails } from './pages/UserDetails'

// import { AppHeader } from './cmps/AppHeader'
// import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { SideNav } from './cmps/SideNav.jsx'
import { BottomNav } from './cmps/BottomNav.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'

export function RootCmp() {
    return (
        <div className="main-container">
            <UserMsg />
            <SideNav />
            <BottomNav />
            <main>
                <Routes>
                    {/* <Route path="" element={<HomePage />} /> */}
                    <Route path="about" element={<AboutUs />}>
                        <Route path="team" element={<AboutTeam />} />
                        <Route path="vision" element={<AboutVision />} />
                    </Route>
                    <Route path="/" element={<FidIndex />} />
                    <Route path="story" element={<FidIndex />} />
                    {/* <Route path="story/:storyId" element={<StoryDetails />} /> */}
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="review" element={<ReviewIndex />} />
                    <Route path="admin" element={<AdminIndex />} />
                    {/* <Route path="/search" element={<AdminIndex />} /> */}
                    {/* <Route path="/explore" element={<AdminIndex />} /> */}
                    {/* <Route path="/reels" element={<AdminIndex />} /> */}
                    {/* <Route path="/messages" element={<AdminIndex />} /> */}
                    {/* <Route path="/Notifications" element={<AdminIndex />} /> */}
                    {/* <Route path="/create" element={<AdminIndex />} /> */}
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


