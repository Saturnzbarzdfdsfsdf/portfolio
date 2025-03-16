import React from 'react'

import { Footer, Header } from '../../widget/index'

import styles from './index.module.scss'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className={styles.container}>
			<Header />

			<Outlet/>

			<Footer/>
		</div>
	)
}

export default Layout
