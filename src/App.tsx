import { useState } from 'react';
import Dashboard from './pages/dashboard-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ErrorPage from './pages/error-page';
export default function App() {
	return (
		<BrowserRouter>
			<div className=' max-w-screen min-h-screen border border-red-600 p-10 bg-openpay-page-bg'>
				<div className='flex w-[1053px] h-[865px] m-auto border border-teal-400 rounded-2xl bg-[#fff]'>
					<Sidebar />
					<div className='w-[84%]'>
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='*' element={<ErrorPage />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}
