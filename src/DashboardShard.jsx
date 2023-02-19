import React from 'react'
import { Outlet } from 'react-router-dom'
import DashBoardNavbar from './components/dashboardNavbar/DashBoardNavbar'
import DashboardSidebar from './components/dashboardSidebar/DashboardSidebar'

function DashboardShard() {
	return (
		<section className='dashboard-shared'>
			<DashboardSidebar />
			<section className='main-dashboard-section'>
				<DashBoardNavbar />
				<section>
					<Outlet />
				</section>
			</section>
		</section>
	)
}

export default DashboardShard
