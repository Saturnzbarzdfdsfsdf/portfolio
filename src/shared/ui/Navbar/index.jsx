import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './index.module.scss'

const links = [
	{
		path: '/',
		title: 'home',
	},
	{
		path: '/services',
		title: 'services',
	},
	{
		path: '/resume',
		title: 'resume',
	},
	{
		path: '/work',
		title: 'work',
	},
	{
		path: '/contact',
		title: 'contact',
	},
]

const Nav = () => {
	const location = useLocation()

	return (
		<nav>
			<ul className={styles.list}>
				{links.map(link => (
					<li
						key={link.path}
						className={location.pathname === link.path ? styles.active : ''}
					>
						<Link to={link.path}>{link.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
