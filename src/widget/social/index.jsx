import { Link } from 'react-router-dom'
import { FaGithub, FaVk, FaInstagram, FaTelegramPlane } from 'react-icons/fa'

const social = [
	{ icon: <FaGithub />, path: '' },
	{ icon: <FaVk />, path: '' },
	{ icon: <FaInstagram />, path: '' },
	{ icon: <FaTelegramPlane />, path: '' },
]

const index = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{social.map((item, index) => {
				return (
					<Link key={index} to={item.path} className={iconStyles}>
						{item.icon}
					</Link>
				)
			})}
		</div>
	)
}

export default index
