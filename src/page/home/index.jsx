import React from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'

import { MyDescription, MyImage, Social, Stats } from '../../widget/index'
import { Button } from '../../shared/ui'

import styles from './index.module.scss'

const Home = () => {
	return (
		<>
			<section className={styles.box}>
				<MyImage />
				<div>
					<MyDescription />

					<div className={styles.social}>
						<Button className={styles.sv}>
							<span>download CV</span>
							<MdOutlineFileDownload  color='#00ff99' />
						</Button>

						<Social
							containerStyles={styles.icon_container}
							iconStyles={styles.icon_style}
						/>
					</div>
				</div>
			</section>
			<Stats />
		</>
	)
}

export default Home
