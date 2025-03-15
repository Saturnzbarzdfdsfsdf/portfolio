import styles from './index.module.scss'

const Burger = ({ handleToggleBurger, isActive }) => {
	return (
		<div
			className={`${styles.burger} ${isActive ? styles.open : ''}`}
			onClick={handleToggleBurger}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default Burger
