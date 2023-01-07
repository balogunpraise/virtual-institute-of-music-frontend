import { Link } from 'react-router-dom'
import './custom-link.css'

function CustomLink({ link, title }) {
	return (
		<Link to={link}>
			<p className='custom-link link-child'>{title}</p>
		</Link>
	)
}

export default CustomLink
