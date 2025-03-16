import { AnimatePresence } from 'framer-motion'

import { useLocation } from 'react-router-dom'

import Stairs from './Stairs'

import './StairTransition.scss'

const StairTransition = () => {
	const location = useLocation()

	return (
		<>
			<AnimatePresence mode='wait'>
				<div key={location.pathname}>
					<div className='base_stair'>
						<Stairs />
					</div>
				</div>
			</AnimatePresence>
		</>
	)
}

export default StairTransition


		// <AnimatePresence mode='wait'>
		// 		<div key={location.pathname}>
		// 			<div className='animate'>
		// 				<Stairs />
		// 			</div>
		// 		</div>
		// 	</AnimatePresence>