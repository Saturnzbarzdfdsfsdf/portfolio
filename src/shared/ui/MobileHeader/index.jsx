import React from 'react'

import { Button, MobileNavbar } from '../index'


import styles from './index.module.scss'

const index = ({ isActive }) => {
	console.log(isActive)

	return (
		<header className={`${styles.drawer} ${isActive ? styles.active : ''}`}>
			<MobileNavbar />
			<Button className={styles.button} children={'Hire me'}/>
		</header>
	)
}

export default index
