import { useState } from 'react'

import { Nav, Burger, MobileHeader, Button } from '../../shared/ui/index'

import styles from './index.module.scss'

const Header = () => {

	const [isActive, setIsActive] = useState(false)

	const handleToggleBurger = () => {
		setIsActive(!isActive)
	}

	return (
		<header className={styles.header}>
			<h2 className={styles.logo}>
				Tim <span>.</span>
			</h2>
			<Nav />

			<Burger handleToggleBurger={handleToggleBurger} isActive={isActive} />
			<MobileHeader isActive={isActive} />
			<Button className={styles.button} children={'Hire me'}/>
		</header>
	)
}

export default Header
