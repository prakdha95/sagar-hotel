import { NavLink, useNavigate} from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import { assets } from '../../assets/images'
import { FaFacebook, FaFacebookMessenger, FaPhone } from 'react-icons/fa';


const Navbar = () => {

    const [search, setSearch] = useState('')
    const [showMenu, setShowMenu] = useState(false)

    const navigate = useNavigate()

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleMobileMenu = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <>
            <nav>
                <div className="nav_top_contact">
                    <p><FaPhone size={15} color="#0084FF"/> <span>9823445336</span></p>
                    <a href="https://m.me/61569243950281"><p> <FaFacebookMessenger size={15} color="#0084FF" /> <span>Message</span></p></a>
                    <a href="https://www.facebook.com/profile.php?id=61569243950281"><p> <FaFacebook size={15} color="#0084FF" /> <span>Facebook</span></p></a>
                </div>
            </nav>
            <nav className='main_nav'>
                <div onClick={() => navigate('/')} className="logo">
                    <h2>Dristi<span>Hotel</span></h2>
                </div>
                <div className="nav_links">
                    <ul>
                        <NavLink to={'/'}><li>Home</li></NavLink>
                        <NavLink to={'/menu'}><li>Menu Items</li></NavLink>
                        <NavLink to={'/lodge'}><li>Lodge Service</li></NavLink>
                        <NavLink to={'/contact'}><li>Contact Us</li></NavLink>
                    </ul>
                </div>
                <div className="nav_btn">
                    <button onClick={() => navigate('/menu')} className='btn'>Menu</button>
                </div>

                <div onClick={handleMobileMenu} className='mobile_menu'>
                    {
                        !showMenu ? (
                            <div className='open_icon'>
                                <button className='menu_btn'>Menu</button>
                                {/* <img src={assets.hamburger_Icon} alt="" /> */}
                            </div>
                        ) : (
                            <div className='mobile_container'>
                                <div className='menu_section'>
                                    <div className='mobile_image'>
                                        <img src={assets.close_icon} alt="" />
                                    </div>
                                    <div className="mobile_nav_links">
                                        <ul>
                                            <NavLink to={'/'}><li>Home</li></NavLink>
                                            <NavLink to={'/menu'}><li>Menu Items</li></NavLink>
                                            <NavLink to={'/lodge'}><li>Lodge Service</li></NavLink>
                                            <NavLink to={'/contact'}><li>Contact Us</li></NavLink>
                                        </ul>
                                    </div>
                                </div>

                                <div className="overlay"></div>
                            </div>

                        )
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
