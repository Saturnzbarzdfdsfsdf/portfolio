import React from 'react'

import man from '../../assets/images/man.png'

import vk from '../../assets/icon-social/vk.svg'
import discord from '../../assets/icon-social/discord.svg'
import github from '../../assets/icon-social/github.svg'
import telegram from '../../assets/icon-social/telegram.svg'

import '../../scss/app.scss'

const Article = () => {
	return (
		<section className='about'>
			<div className='container'>
				<article className='article'>
					<div className='title-wrapper'>
						<h1 className='article__title'>
							Hello I’am<span>Timur Tsvetkov</span>
						</h1>
						<h2 className='article__title-two'>
							Frontend <span>Developer</span>
						</h2>
						<h3>
							Based In <span>Ivanovo.</span>
						</h3>
						<p className='description'>
							I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
							and typesetting industry. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s, when an unknown printer
							took a galley of type and scrambled it to specimen book.
						</p>
					</div>
					<div className='seated-man'>
						<img className='man' src={man} alt='seated-man' />
					</div>
					<div className='social'>
						<ul>
							<li className='social__list'>
								<a href='#' className='social__link'>
									<img src={vk} alt='' />
								</a>
							</li>
							<li className='social__list'>
								<a href='#' className='social__link'>
									<img src={discord} alt='' />
								</a>
							</li>
							<li className='social__list'>
								<a href='#' className='social__link'>
									<img src={github} alt='' />
								</a>
							</li>
							<li className='social__list'>
								<a href='#' className='social__link'>
									<img src={telegram} alt='' />
								</a>
							</li>
						</ul>
					</div>
				</article>
			</div>
		</section>
	)
}

export default Article
