import styles from './index.module.scss'

const index = () => {
	return (
		<div className={styles.box}>
			<h3>software developer</h3>

			<h1 className={styles.title}>
				Hello I`m <br />
				<span>Timur Tsvetkov</span>
			</h1>
			
      <p className={styles.text}>
				I'm a passionate and creative frontend developer with a strong focus on
				crafting engaging and user-friendly web experiences.
			</p>
		</div>
	)
}

export default index



