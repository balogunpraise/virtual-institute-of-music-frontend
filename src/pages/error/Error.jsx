import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
	return (
		<div
			className='grid place-content-center'
			style={{ width: '100%', height: '100vh' }}
		>
			<h1>The page you requested cannot be found</h1>
			<Link to='/'>Go Back Home</Link>
		</div>
	)
}

export default Error
