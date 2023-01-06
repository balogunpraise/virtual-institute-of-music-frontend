import './App.css'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import About from './pages/about/About'
import Register from './pages/register/Register'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/shop' element={<About />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
