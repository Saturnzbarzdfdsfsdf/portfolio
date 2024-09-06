import React from 'react'

import logo from '../../assets/images/logo.svg'

import '../../scss/app.scss'

const navItem = ['About Me', 'Skills', 'Project', 'Contact me']

const Header = () => {
	const [activeItem, setActiveItem] = React.useState(0)

	const onChangeNav = index => {
		setActiveItem(index)
	}

	return (
		<>
			<header className='header'>
				<div className='header__wrapper'>
					<div className='header__logo'>
						<a href='#'>
							<img src={logo} alt='logo' className='header__logo-img' />
						</a>
						<h2>Personal</h2>
					</div>
					<nav className='nav'>
						<ul className='nav__list'>
							{navItem.map((navName, index) => (
								<li
									onClick={() => onChangeNav(index)}
									key={index}
									className={activeItem === index ? 'active' : ''}
								>
									{navName}
								</li>
							))}
						</ul>
					</nav>

					<a href='#' className='btn'>
						Resume
					</a>
				</div>
			</header>
		</>
	)
}

export default Header

// <li className={styles.item}>
// 						<a href='#' className={styles.link}>
// 							About Me
// 						</a>
// 					</li>
// <li className={styles.item}>
// 					<a href='#' className={styles.link}>
// 						Skills
// 					</a>
// 				</li>
// 				<li className={styles.item}>
// 					<a href='#' className={styles.link}>
// 						Project
// 					</a>
// 				</li>
// 				<li className={styles.item}>
// 					<a href='#' className={styles.link}>
// 						Contact me
// 					</a>
// 				</li>
