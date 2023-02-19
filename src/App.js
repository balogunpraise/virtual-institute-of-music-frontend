import './App.css'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import About from './pages/about/About'
import Register from './pages/register/Register'
import Shared from './Shared'
import Dashboard from './pages/dashboard/Dashboard'
import Overview from './pages/overview/Overview'
import DashboardShard from './DashboardShard'
import Account from './pages/account/Account.Jsx'
import Error from './pages/error/Error'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Shared />}>
						<Route index element={<Home />} />
						<Route path='/shop' element={<Shop />} />
						<Route path='/shop' element={<About />} />
					</Route>
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='dashboard' element={<DashboardShard />}>
						<Route index element={<Dashboard />} />
						<Route path='/dashboard/overview' element={<Overview />} />
						{/* <Route path='/dashboard/account' element={<Account />} /> */}
					</Route>
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
