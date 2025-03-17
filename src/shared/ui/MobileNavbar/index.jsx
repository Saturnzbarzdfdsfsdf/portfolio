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

const index = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__list}>
				{links.map((link) => (
					<Link to={link.path} key={links.path} className={styles.nav__link}>
						{link.title}
					</Link>
				))}
			</ul>
		</nav>
	)
}

export default index
