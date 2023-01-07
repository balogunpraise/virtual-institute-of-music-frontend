import './navbar.css'
import logo from '../../img/logo.jpg'
import { FaArrowDown, FaCaretSquareDown } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'
import MainDropdown from '../mainDropdown/MainDropdown'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {
	toggleDropdown,
	setDropdownToFalse,
} from '../../features/dropdown/dropdownSlice'

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const { isActive } = useSelector((store) => store.dropdown)
	const dispatch = useDispatch()
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
		<>
			<nav
				className={`navbar flex justify-between items-center ${
					isScrolled && 'scrolled-background'
				} ${isActive && 'active-navbar'}`}
			>
				<div className='flex items-center gap-10'>
					<Link to='/'>
						<img
							onClick={() => dispatch(setDropdownToFalse())}
							src={logo}
							alt='logo'
							className='w-24 rounded-full'
						/>
					</Link>
					<ul className='flex items-center gap-10'>
						<Link to='/about'>
							<li
								onClick={() => dispatch(setDropdownToFalse())}
								className='list-child'
							>
								Explore
							</li>
						</Link>
						<li className='flex items-center gap-1 list-child'>Curriculum</li>
						<Link to='/shop'>
							<li
								onClick={() => dispatch(setDropdownToFalse())}
								className='list-child'
							>
								Shop
							</li>
						</Link>
						<li
							onClick={() => dispatch(toggleDropdown())}
							//onClick={()=> dispatch(setDropdownToFalse())}
							className={`flex items-center gap-1 list-child drop-child ${
								isActive && 'drop-child-selected'
							}`}
						>
							Courses
							<BiDownArrow />
						</li>
					</ul>
				</div>

				<div className='other-buttons flex items-center gap-5'>
					<Link to='/login'>
						<p
							onClick={() => dispatch(setDropdownToFalse())}
							className='list-child'
						>
							Login
						</p>
					</Link>
					<Link to='register'>
						<p
							onClick={() => dispatch(setDropdownToFalse())}
							className='register-button list-child'
						>
							Register
						</p>
					</Link>
				</div>
			</nav>
			<MainDropdown />
		</>
	)
}

export default Navbar
