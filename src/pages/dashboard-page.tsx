import React from 'react'
import Navbar from '../components/Navbar'
import Analytics from '../layout/dashboard-analytics';
import Transactions from '../layout/dashboard-transactions';

export default function Dashboard() {
  return (
		<div className='font-gilroy-semibold w-full h-full border border-orange-500'>
			<div>
				<Navbar />
			</div>
			<div
				style={{
					display: 'flex',
					width: '100%',
					gap: 12,
					paddingRight: '28px',
					paddingLeft: '9.41px',
				}}
			>
				<div style={{ flex: 0.6 }}>
					<Transactions />
				</div>
				<div
					className='border border-b-red-600 h-full font-gilroy-semibold'
					style={{ flex: 2 }}
				>
					<Analytics />
				</div>
			</div>
		</div>
	);
}
