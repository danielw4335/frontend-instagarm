import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useScreenBreakpoint } from '../customHooks/useScreenBreakpoint'
import { useModal } from '../customHooks/ModalContext'

import defaultUser from '../assets/img/defaultUser.png'

import {
    HomeActive, HomeOutline,
    SearchActive, SearchOutline,
    ExploreActive, ExploreOutline,
    ReelsActive, ReelsOutline,
    MessengerActive, MessengerOutline,
    NotificationsActive, NotificationsOutline,
    CreateOutline, LogoInstagramWordmark,
    LogoInstagram,
    MoreOptionsOutline,
    MoreOptionsActive,
} from '../assets/SVG/icons'

export function SideNav() {
    const breakpoint = useScreenBreakpoint()
    const navigate = useNavigate()
    const { open } = useModal()
    const loggedInUser = useSelector(storeState => storeState.userModule.user)



    return (
        <section className={`side-nav breakpoint-${breakpoint}`}>
            <div className="logo-text" onClick={() => navigate('/')}>
                <LogoInstagramWordmark className="nav-label logo-wordmark" />
            </div>
            <div className="logo-icon" onClick={() => navigate('/')}>
                <LogoInstagram className="logo-icon-svg" />
            </div>

            <div className="nav-section">
                <NavLink to="/" className="nav-item">
                    <HomeOutline className="icon-outline" />
                    <HomeActive className="icon-active" />
                    <span className="nav-label">Home</span>
                </NavLink>

                <NavLink to="/search" className="nav-item">
                    <SearchOutline className="icon-outline" />
                    <SearchActive className="icon-active" />
                    <span className="nav-label">Search</span>
                </NavLink>

                <NavLink to="/explore" className="nav-item">
                    <ExploreOutline className="icon-outline" />
                    <ExploreActive className="icon-active" />
                    <span className="nav-label">Explore</span>
                </NavLink>

                <NavLink to="/reels" className="nav-item">
                    <ReelsOutline className="icon-outline" />
                    <ReelsActive className="icon-active" />
                    <span className="nav-label">Reels</span>
                </NavLink>

                <NavLink to="/messages" className="nav-item">
                    <MessengerOutline className="icon-outline" />
                    <MessengerActive className="icon-active" />
                    <span className="nav-label">Messages</span>
                </NavLink>

                <NavLink to="/notifications" className="nav-item">
                    <NotificationsOutline className="icon-outline" />
                    <NotificationsActive className="icon-active" />
                    {/* <span className="notif-dot" /> */}
                    <span className="nav-label">Notifications</span>
                </NavLink>

                <div className="nav-item" onClick={() => open(null, 'upload')}>
                {/* <div className="nav-item" onClick={() => open(null, 'createStory')}> */}
                    <CreateOutline className="icon-outline"/>
                    <span className="nav-label">Create</span>
                </div>

                <NavLink to={`/u/${loggedInUser?._id}`} className="nav-item">
                    <img
                        src={loggedInUser?.imgUrl || defaultUser}
                        alt="Profile"
                        className="profile-img"
                    />
                    <span className="nav-label">Profile</span>
                </NavLink>

            </div>

            <NavLink to="/more" className="nav-item more">
                <MoreOptionsOutline className="icon-outline" />
                <MoreOptionsActive className="icon-active" />
                <span className="nav-label">More</span>
            </NavLink>
        </section>
    )
}
