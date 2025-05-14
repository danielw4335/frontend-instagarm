import { useNavigate } from 'react-router';
import { useScreenBreakpoint } from '../customHooks/useScreenBreakpoint'
import defaultUser from '../assets/img/defaultUser.png';
// import { ReactComponent as HomeActive } from '../assets/SVG/icon-home-active.svg';



import {
    Home,
    Search,
    Compass,
    Clapperboard,
    MessageCircle,
    Heart,
    PlusSquare,
    Menu
} from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useModal } from '../customHooks/ModalContext';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function SideNav() {
    const breakpoint = useScreenBreakpoint()
    const navigate = useNavigate()
    const { open } = useModal()
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    console.log(' loggedInUser:', loggedInUser._id)

    //todo    <NavLink to="/" className="nav-item">
    //todo        2 svg</ svg>
    //todo     </NavLink>

    return (
        <section className={`side-nav breakpoint-${breakpoint}`}>
            <div className="logo-text" onClick={() => navigate('/')}>Instagram</div>
            <div className="logo-icon" onClick={() => navigate('/')}>
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            {/* <HomeActive style={{ color: 'black', width: 24, height: 24 }} /> */}
            <div className="nav-section" >
                <NavLink to={'/'} className="nav-item">
                    <Home />
                    <span className="nav-label">Home</span>
                </NavLink>

                <NavLink to={'/search'} className="nav-item">
                    <Search />
                    <span className="nav-label">Search</span>
                </NavLink>

                <NavLink to={'/explore'} className="nav-item">
                    <Compass />
                    <span className="nav-label">Explore</span>
                </NavLink>

                <NavLink to={'/reels'} className="nav-item">
                    <Clapperboard />
                    <span className="nav-label">Reels</span>
                </NavLink>

                <NavLink to={'/messages'} className="nav-item">
                    <MessageCircle />
                    <span className="nav-label">Messages</span>
                </NavLink>

                <NavLink to={'/notifications'} className="nav-item">
                    <Heart />
                    <span className="notif-dot" />
                    <span className="nav-label">Notifications</span>
                </NavLink>
             

                <div className="nav-item" onClick={() => open(null, 'upload')}>
                    <PlusSquare />
                    <span className="nav-label">Create</span>
                </div>

                {console.log('loggedInUser:', loggedInUser)}
                <NavLink to={'/u/lbc5U'} className="nav-item">
                    <img src={defaultUser} alt="Profile" className="profile-img" />
                    <span className="nav-label">Profile</span>
                </NavLink>

            </div>

            <NavLink className="nav-item more">
                <Menu />
                <span className="nav-label">More</span>
            </NavLink>
        </section>
    )
}
