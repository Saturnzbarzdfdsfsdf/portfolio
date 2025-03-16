import React from 'react'

import { Outlet } from 'react-router-dom'
import { Header } from '../../widget/index'

import PageTransition from '../../shared/libs/PageTransition'
import StairTransition from '../../shared/libs/StairTransition'

import styles from './index.module.scss'

const Layout = () => {
	return (
		<div className={styles.container}>
			<StairTransition />
			<Header />
			<PageTransition>
				<Outlet />
			</PageTransition>
		</div>
	)
}

export default Layout
