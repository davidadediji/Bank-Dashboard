import Sidebar from '../layouts/sidebar';
import Dashboard from '../layouts/dashboard';
export default function ContentPage() {
	return (
		<div className='font-poppins flex'>
			<Sidebar />
			<Dashboard />
		</div>
	);
}
