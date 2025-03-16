import { AnimatePresence, motion } from 'framer-motion'

import { useLocation } from 'react-router-dom'

import './PageTransition.scss'

const PageTransition = ({ children }) => {
	const location = useLocation()

	return (
		<AnimatePresence>
			<div key={location.pathname}>
				<motion.div
					initial={{ opacity: 1 }}
					animate={{
						opacity: 0,
						transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
					}}
					className='base_page'
				/>
			</div>
			{children}
		</AnimatePresence>
	)
}

export default PageTransition
