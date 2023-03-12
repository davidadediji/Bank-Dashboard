import Sidebar from '../components/layouts/sidebar';
import Navbar from '../components/layouts/navbar';
export default function ContentPage() {
	return (
		<div className='font-poppins flex'>
			<Sidebar />
			<Navbar />
		</div>
	);
}
