import React from 'react'

import logo from '../../assets/images/logo.svg'

import styles from './Header.module.scss'

// import '../../scss/app.scss'

const navItem = ['About Me', 'Skills', 'Project', 'Contact me']

const Header = () => {
	const [activeItem, setActiveItem] = React.useState(0)

	const onChangeNav = index => {
		setActiveItem(index)
	}

	return (
		<>
			<header className={styles.header}>
				<div className={styles.wrapper}>
					<div className={styles.logo}>
						<a href='#'>
							<img src={logo} alt='logo'/>
						</a>
						<h2>Personal</h2>
					</div>
					<nav>
						<ul className={styles.nav}>
							{navItem.map((navName, index) => (
								<li
									onClick={() => onChangeNav(index)}
									key={index}
									className={activeItem === index ? styles.active : ''}
								>
									{navName}
								</li>
							))}
						</ul>
					</nav>
					<a href='#' className={styles.btn}>
						Resume
					</a>
				</div>
			</header>
		</>
	)
}

export default Header

{
	/* <header className='header'>
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
			</header> */
}
