import { useNavigate } from 'react-router';
import { useScreenBreakpoint } from '../customHooks/useScreenBreakpoint'
import defaultUser from '../assets/img/defaultUser.png';


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

export function SideNav() {
    const breakpoint = useScreenBreakpoint()
    const navigate = useNavigate()


    return (
        <section className={`side-nav breakpoint-${breakpoint}`}>
            <div className={`logo-text`} onClick={() => navigate('/')}>Instagram</div>
            
            <div className={`logo-icon`} onClick={() => navigate('/')}>
                <FontAwesomeIcon icon={faInstagram} />
            </div>
               
            <div className="nav-section" onClick={() => navigate('/')}>
                <div className="nav-item">
                    <Home />
                    <span className="nav-label">Home</span>
                </div>

                <div className="nav-item" onClick={() => navigate('/search')}>
                    <Search />
                    <span className="nav-label">Search</span>
                </div>

                <div className="nav-item" onClick={() => navigate('/explore')}>
                    <Compass />
                    <span className="nav-label">Explore</span>
                </div>

                <div className="nav-item" onClick={() => navigate('/reels')}>
                    <Clapperboard />
                    <span className="nav-label">Reels</span>
                </div>

                <div className="nav-item" onClick={() => navigate('/messages')}>
                    <MessageCircle />
                    <span className="nav-label">Messages</span>
                </div>

                <div className="nav-item">
                    <div className="notif-icon" onClick={() => navigate('/Notifications')}>
                        <Heart />
                        <span className="notif-dot" />
                    </div>
                    <span className="nav-label">Notifications</span>
                </div>

                <div className="nav-item" onClick={() => navigate('/create')}>
                    <PlusSquare />
                    <span className="nav-label">Create</span>
                </div>

                <div className="nav-item" onClick={() => navigate('/profile')}>
                    <img src={defaultUser} alt="Profile" className="profile-img" />
                    <span className="nav-label">Profile</span>
                </div>
            </div>

            <div className="nav-item more">
                <Menu />
                <span className="nav-label">More</span>
            </div>
        </section>
    )
}
