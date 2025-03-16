import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { RoutesPath } from '../config/Routes'

// components
import Layout from '../layout'
import { Services, Contact, Resume, Work } from '../../page'

const AppRouter = () => {
	return (
		<Routes>
			<Route path={RoutesPath.HOME} element={<Layout />}>
				<Route path={RoutesPath.SERVICES} element={<Services />}></Route>
				<Route path={RoutesPath.CONTACT} element={<Contact />}></Route>
				<Route path={RoutesPath.RESUME} element={<Resume />}></Route>
				<Route path={RoutesPath.WORK} element={<Work />}></Route>
			</Route>
		</Routes>
	)
}

export default AppRouter
