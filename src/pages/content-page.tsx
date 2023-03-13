import Sidebar from '../components/layouts/sidebar';
import Dashboard from '../components/layouts/dashboard';
export default function ContentPage() {
	return (
		<div className='font-poppins flex'>
			<Sidebar />
			<Dashboard/>
		</div>
	);
}
