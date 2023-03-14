import React from 'react';
import Analytics from '../layouts/analytics';
import Navbar from '../layouts/navbar';
import Transaction from '../layouts/transaction';

export default function Dashboard() {
	return (
		<div className='w-full'>
			<div className='h-[8%]'>
				<Navbar/>
			</div>
			<div className='grid grid-cols-6 gap-12 h-[92%]'>
				<div className='col-span-2'>
					<Transaction />
				</div>
				<div className='border border-orange-500 col-span-4'>
					<Analytics />
				</div>
			</div>
		</div>
	);
}
