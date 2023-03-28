import { useState } from 'react';
import Dashboard from './pages/dashboard-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ErrorPage from './pages/error-page';
export default function App() {
	return (
		<BrowserRouter>
			<div className='h-full w-full p-10 bg-openpay-page-bg'>
				<div className='flex w-[1053px] h-[865px] m-auto rounded-2xl bg-[#fff]'>
					<div className='w-[16%] border-r border-openpay-sidebar'>
						<Sidebar />
					</div>

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
