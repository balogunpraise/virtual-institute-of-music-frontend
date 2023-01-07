import CustomLink from '../../components/customButton/CustomLink'
import './home.css'

const Home = () => {
	return (
		<>
			<section className='hero flex flex-col justify-center items-center gap-7'>
				<div
					className='flex flex-col gap-3 justify-center items-center'
					style={{
						zIndex: '2',
					}}
				>
					<h2
						style={{
							fontSize: '32px',
							letterSpacing: 'normal',
							fontWeight: '500',
							textAlign: 'center',
							color: '#F7BD00',
						}}
					>
						Try Virtual Institute of Music for free{' '}
					</h2>
					<h1
						className='main-hero-heading'
						style={{
							fontSize: '3rem',
							letterSpacing: 'normal',
							textAlign: 'center',
							color: 'white',
						}}
					>
						Build your music career, with practical exercises
					</h1>
					<CustomLink link='/register' title='TRY 1 MONTH FOR FREE...' />
					<h2
						style={{
							fontSize: '32px',
							letterSpacing: 'normal',
							fontWeight: '500',
							textAlign: 'center',
						}}
						className='text-slate-200'
					>
						Get started with a free trial. Cancel anytime.
					</h2>
				</div>
			</section>
		</>
	)
}

export default Home
