import CountUp from 'react-countup'

import styles from './index.module.scss'

const stats = [
	{
		num: 1.5,
		text: 'Years of experience',
	},
	{
		num: 20,
		text: 'Projects completed',
	},
	{
		num: 8,
		text: 'Technologies mastered',
	},
	{
		num: 200,
		text: 'Code commits',
	},
]

const index = () => {
	return (
		<section>
			<div className={styles.stats}>
				{stats.map((item, index) => {
					return (
						<div key={index}>
							<CountUp
								end={item.num}
								duration={5}
								delay={2}
								className={styles.count_up}
							/>
							<p className={styles.stats_text}>{item.text}</p>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default index
