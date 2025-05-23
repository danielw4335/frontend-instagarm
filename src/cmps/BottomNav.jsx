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
import { ReelsOutline } from '../assets/SVG/icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function BottomNav() {
        const user = useSelector(storeState => storeState.userModule.loggedInUser)
    const breakpoint = useScreenBreakpoint()
    const navigate = useNavigate()
const { open } = useModal()

    return (
        <section className={`bottom-nav breakpoint-${breakpoint}`}>

                <NavLink className="nav-item" to="/">
                    <Home />
                </NavLink>

                <NavLink className="nav-item" to="/search">
                    <Search />
                </NavLink>

                <div className="nav-item" onClick={() => open( null, 'upload' )}>
                    <PlusSquare />
                </div>

                <NavLink className="nav-item" to="/reels">
                    <ReelsOutline />
                </NavLink>

                <NavLink className="nav-item" to={`/u/${user?._id}`}>
                    <img src={user?.imgUrl || defaultUser} alt="Profile" className="profile-img" />
                </NavLink>
        </section>
    )
}
