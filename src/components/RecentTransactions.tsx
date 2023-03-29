import React from 'react';
import { recentTransactions } from '../data/recent-transactions';
import RTransactions from './RTransactions';

export default function RecentTransactions() {
	return (
		<>
			<section className='flex justify-between items-center pb-5'>
				<p className='text-[#000] text-lg font-medium'>Recent Transactions</p>
				<p className=' text-openpay-primary-gray text-xs'>View all &#62;</p>
			</section>
			<div className='w-full text-openpay-primary text-xs border-separate new flex flex-col gap-5'>
				{recentTransactions.map((item) => (
					<RTransactions
						name={item.transactionName}
						amount={item.transactionAmount}
						accountNumber={item.accountNumber}
						date={item.date}
						image={item.image}
						status={item.transactionStatus}
					/>
				))}
			</div>
		</>
	);
}
