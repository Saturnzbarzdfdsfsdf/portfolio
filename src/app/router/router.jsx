import React from 'react'

import { Routes, Route } from 'react-router-dom'

// components
import Layout from '../layout'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}></Route>
		</Routes>
	)
}

export default AppRouter
