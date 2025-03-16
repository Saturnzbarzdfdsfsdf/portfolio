import { motion } from 'framer-motion'

import styles from './index.module.scss'

import ME from '../../shared/assets/work/me-photo.png'

const index = () => {
	return (
		<div className={styles.box}>
			{/* image */}
			<div className={styles.image_box}>
				<motion.div
					className={styles.motion_div}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' },
					}}
				>
					<img className={styles.image} loading='lazy' src={ME} alt='Author' />
				</motion.div>
			</div>
			{/* circle */}

			<motion.svg
				className={styles.svg}
				fill='transparent'
				viewBox='0 0 506 506'
				xmlns='http://www.w3.org/2000.svg'
			>
				<motion.circle
					cx='253'
					cy='253'
					r='250'
					stroke='#00ff99'
					strokeWidth='4'
					strokeLinecap='round'
					strokeLinejoin='round'
					initial={{ strokeDasharray: '24 10 0 0 ' }}
					animate={{
						strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
						rotate: [120, 360],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				/>
			</motion.svg>
		</div>
	)
}

export default index
