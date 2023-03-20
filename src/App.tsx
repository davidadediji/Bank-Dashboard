import { useState } from 'react';
import Dashboard from './pages/dashboard-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ErrorPage from './pages/error-page';
export default function App() {
	return (
		<BrowserRouter>
			<div className='flex'>
				<Sidebar />
				<div className=' w-5/6'>
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='*' element={<ErrorPage/>} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}
