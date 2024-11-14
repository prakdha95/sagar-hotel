import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import { assets } from '../../assets/images'

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
            <nav className='main_nav'>
                <div onClick={() => navigate('/')} className="logo">
                    <h2>Dristi<span>Hotel</span></h2>
                </div>
                <div className="nav_links">
                    <ul>
                        <NavLink to={'/'}><li>Home</li></NavLink>
                        <NavLink to={'/menu'}><li>Browse Menu</li></NavLink>
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
                                            <NavLink to={'/menu'}><li>Browse Menu</li></NavLink>
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
