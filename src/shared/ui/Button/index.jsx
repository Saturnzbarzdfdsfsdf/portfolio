import React from 'react'

// import styles from './index.module.scss'

const index = ({ children, className, onClick }) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	)
}

export default index
