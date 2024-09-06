// import React from 'react'

// import git from '../../assets/icon/icon-git.svg'
 
import styles from './Skills.module.scss';

import { SkillsSvgSelector } from './SkillsSvgSelector'

const Skills = () => {
  return (
		<div className={styles.wrapper}>
			<h2 className={styles.subtitle}>
				My <span>Skills</span>
			</h2>
			<div className={styles.card}>

				<div className={styles.item}>
					<SkillsSvgSelector id='git' />
					<h3>Git</h3>
				</div>
				<div className={styles.item}>
					<SkillsSvgSelector id='JS' />
					<h3>JavaScript</h3>
				</div>
				<div className={styles.item}>
					<SkillsSvgSelector id='sass' />
					<h3>sass</h3>
				</div>
				<div className={styles.item}>
					<SkillsSvgSelector id='css' />
					<h3>css</h3>
				</div>
				<div className={styles.item}>
					<SkillsSvgSelector id='figma' />
					<h3>figma</h3>
				</div>
				<div className={styles.item}>
					<SkillsSvgSelector id='html' />
					<h3>html</h3>
				</div>
				<div className={styles.item}>
					<SkillsSvgSelector id='react' />
					<h3>react</h3>
				</div>
				<div className={styles.item}>
					<SkillsSvgSelector id='JS' />
					<h3>JavaScript</h3>
				</div>
				<div className={styles.item}>
					<SkillsSvgSelector id='git' />
					<h3>Git</h3>
				</div>
				<div className={styles.item}>
					<SkillsSvgSelector id='JS' />
					<h3>JavaScript</h3>
				</div>

			</div>
		</div>
	)
}

export default Skills