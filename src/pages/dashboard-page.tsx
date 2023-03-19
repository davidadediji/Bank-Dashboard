import React from 'react'
import Navbar from '../components/Navbar'
import Analytics from '../layout/dashboard-analytics';
import Transactions from '../layout/dashboard-transactions';

export default function Dashboard() {
  return (
		<div className='h-screen px-3 font-gilroy-semibold'>
			<Navbar />
			<div className=' grid-cols-12 grid gap-16'>
				<Transactions />
				<Analytics />
			</div>
		</div>
	);
}
