import './main-dropdown.css'
import { useSelector } from 'react-redux'
import {
	FaArrowCircleRight,
	FaBook,
	FaCartArrowDown,
	FaCertificate,
	FaDrum,
	FaGuitar,
	FaMicroscope,
	FaMusic,
	FaPeopleArrows,
	FaShoppingBag,
	FaThumbsUp,
} from 'react-icons/fa'

function MainDropdown() {
	const { isActive } = useSelector((store) => store.dropdown)
	if (isActive) {
		return (
			<section className='main-dropdown'>
				<div className='individual-child child-1'>
					<p className='dropdown-heading'>Ways to upskill</p>
					<div className='horizontal-line'></div>
					<ul className='dropdown-list'>
						<li>
							<span className='sp'>
								<FaBook /> Courses
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li>
							<span className='sp'>
								<FaMicroscope /> Skill Accessment
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li>
							<span className='sp'>
								<FaThumbsUp /> Hands-on Learning
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li>
							<span className='sp'>
								<FaCertificate /> Certificate prep
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li>
							<span className='sp'>
								<FaMusic /> Music Theory
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
					</ul>
				</div>
				<div className='individual-child child-2'>
					<p className='dropdown-heading'>Instruments</p>
					<div className='horizontal-line'></div>
					<ul className='dropdown-list'>
						<li>
							<span className='sp'>
								<FaMusic /> Voice
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li>
							<span className='sp'>
								<FaMicroscope /> Piano
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li>
							<span className='sp'>
								<FaGuitar /> Guitar
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li>
							<span className='sp'>
								<FaDrum /> Drums
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li>
							<span className='sp'>
								<FaDrum /> Saxophone
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li>
							<span className='sp'>
								<FaDrum /> Trumpet
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li>
							<span className='sp'>
								<FaDrum /> Violin
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
					</ul>
				</div>
				<div className='individual-child child-3'>
					<p className='dropdown-heading'>Frequently Checked</p>
					<div className='horizontal-line'></div>
					<ul className='dropdown-list'>
						<li id='frequents'>
							<span className='sp'>
								<FaMusic /> VIM Curricullum
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li id='frequents'>
							<span className='sp'>
								<FaPeopleArrows /> Staff
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li id='frequents'>
							<span className='sp'>
								<FaCartArrowDown />
								Buy Music Scores
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
						<li id='frequents'>
							<span className='sp'>
								<FaDrum /> Drums
							</span>
							<span class='ar'>
								<FaArrowCircleRight />
							</span>
						</li>
					</ul>
				</div>
			</section>
		)
	}
}

export default MainDropdown
