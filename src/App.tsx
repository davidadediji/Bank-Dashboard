import Dashboard from './pages/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import ErrorPage from './pages/error';
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='*' element={<ErrorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
