import { useNavigate } from 'react-router';
import { useScreenBreakpoint } from '../customHooks/useScreenBreakpoint'
import defaultUser from '../assets/img/defaultUser.png';
import { useModal } from '../customHooks/ModalContext';
import {
    Home,
    Search,
    Clapperboard,
    PlusSquare,
} from 'lucide-react'

export function BottomNav() {
    const breakpoint = useScreenBreakpoint()
    const navigate = useNavigate()
const { open } = useModal()

    return (
        <section className={`bottom-nav breakpoint-${breakpoint}`}>

                <div className="nav-item" onClick={() => navigate('/')}>
                    <Home />
                </div>

                <div className="nav-item" onClick={() => navigate('/search')}>
                    <Search />
                </div>

                <div className="nav-item" onClick={() => open( null, 'upload' )}>
                    <PlusSquare />
                </div>

                <div className="nav-item" onClick={() => navigate('/reels')}>
                    <Clapperboard />
                </div>

                <div className="nav-item" onClick={() => navigate('/profile')}>
                    <img src={defaultUser} alt="Profile" className="profile-img" />
                </div>
        </section>
    )
}
