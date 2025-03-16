import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { RoutesPath } from '../config/Routes'

import Layout from '../layout'

import {
	ServicesPage,
	ContactPage,
	ResumePage,
	WorkPage,
	HomePage,
} from '../../page'

const AppRouter = () => {
	return (
		<Routes>
			<Route path={RoutesPath.HOME} element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path={RoutesPath.SERVICES} element={<ServicesPage />}></Route>
				<Route path={RoutesPath.CONTACT} element={<ContactPage />}></Route>
				<Route path={RoutesPath.RESUME} element={<ResumePage />}></Route>
				<Route path={RoutesPath.WORK} element={<WorkPage />}></Route>
			</Route>
		</Routes>
	)
}

export default AppRouter
