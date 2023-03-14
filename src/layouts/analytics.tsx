import React from 'react';
import RecentTransactions from './recent-transactions';
import Statistics from './statistics';

export default function Analytics() {
	return (
		<div className='w-full font-gilroy-semibold'>
			<RecentTransactions />
			<Statistics />
		</div>
	);
}
