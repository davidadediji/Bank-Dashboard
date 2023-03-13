import React from 'react'
import RecentTransactions from './recent-transactions';
import Statistics from './statistics'

export default function Analytics() {
  return (
		<div className='w-[590px] font-gilroy-semibold pl-11'>
      <RecentTransactions/>
			<Statistics />
		</div>
	);
}
