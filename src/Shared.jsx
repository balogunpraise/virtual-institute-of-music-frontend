import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import MobileNavbar from './components/mobile-navbar/MobileNavbar'

import './shared.css'

function Shared() {
	return (
		<>
			<section className='desktop-navbar'>
				<Navbar />
			</section>
			<section className='mobile-navbar'>
				<MobileNavbar />
			</section>
			<Outlet />
		</>
	)
}

export default Shared
