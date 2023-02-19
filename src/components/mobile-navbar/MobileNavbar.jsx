import './mobile.-navbar.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import logo from '../../img/logo.jpg'
import { Link } from 'react-router-dom'
import { Divide as Hamburger } from 'hamburger-react'
import {
	toggleDropdown,
	setDropdownToFalse,
} from '../../features/dropdown/dropdownSlice'

function MobileNavbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const { isActive } = useSelector((store) => store.dropdown)
	const dispatch = useDispatch()
	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true)
		} else {
			setIsScrolled(false)
		}
	}
	window.addEventListener('scroll', handleScroll)
	return (
		<div className='navbar'>
			<>
				<nav
					className={`navbar flex justify-between items-center ${
						isScrolled && 'scrolled-background'
					} ${isActive && 'active-navbar'}`}
				>
					{/* <div className='flex justify-between items-center w-full'> */}
					<Link to='/'>
						<img
							onClick={() => dispatch(setDropdownToFalse())}
							src={logo}
							alt='logo'
							className='w-16 rounded-full'
						/>
					</Link>
					<span style={{ color: 'white', fontSize: '4rem', marginRight: '10px' }}>
						<Hamburger />
					</span>
					{/* </div> */}
				</nav>
			</>
		</div>
	)
}

export default MobileNavbar
