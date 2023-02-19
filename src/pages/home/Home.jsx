import CustomLink from '../../components/customButton/CustomLink'
import './home.css'

const Home = () => {
	return (
		<main>
			<section className='presentation'>
				<div className='introduction'>
					<div className='intro-text'>
						<h1>Virtual Institute of Music</h1>
						<p>Take a shot at VIM and grow your carrier in music.</p>
					</div>
					<div className='cta'>
						<button className='cta-select'>Get Started</button>
						<button className='cta-tour'>Take a Tour</button>
					</div>
				</div>
				<div className='cover'>
					<img
						src='https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1e1e415f736514e2/62b3a71b03b23c505f842ba1/mi-20220624-bar-fg-digital-pianos-vs-keyboards-xs.png?width=150p&quality=80&auto=webp'
						alt=''
					/>
				</div>
			</section>
			<div className='my-pattern'></div>
		</main>
	)
}

export default Home
