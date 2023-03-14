import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';

export default function MainLayout() {
	return (
		<div className='font-poppins flex'>
			<Sidebar />
			<Outlet/>
		</div>
	);
}
