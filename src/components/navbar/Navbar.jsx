import './navbar.css'
import logo from '../../img/logo.jpg'
import { FaArrowDown, FaCaretSquareDown } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true)
		} else {
			setIsScrolled(false)
		}
		//window.pageYOffset = null;
	}
	window.addEventListener('scroll', handleScroll)
	return (
		<nav
			className={`navbar flex justify-between items-center ${
				isScrolled && 'scrolled-background'
			}`}
		>
			<div className='flex items-center gap-10'>
				<Link to='/'>
					<img src={logo} alt='logo' className='w-24 rounded-full' />
				</Link>
				<ul className='flex items-center gap-10'>
					<Link to='/about'>
						<li className='list-child'>Explore</li>
					</Link>
					<li className='flex items-center gap-1 list-child'>
						Course
						<BiDownArrow />
					</li>
					<Link to='/shop'>
						<li className='list-child'>Shop</li>
					</Link>
					<li className='flex items-center gap-1 list-child'>
						Curriculum
						<BiDownArrow />
					</li>
				</ul>
			</div>

			<div className='other-buttons flex items-center gap-5'>
				<Link to='/login'>
					<p className='list-child'>Login</p>
				</Link>
				<Link to='register'>
					<p className='register-button list-child'>Register</p>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
