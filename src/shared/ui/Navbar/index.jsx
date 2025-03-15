import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

const links = [
	{
		path: '/',
		title: 'home',
	},
	{
		path: '/services',
		title: 'Services',
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
	return (
		<nav>
			<ul className={styles.list}>
				{links.map(link => (
					<li key={link.path}>
						<Link to={link.path}>{link.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
