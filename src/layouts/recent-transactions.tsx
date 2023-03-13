import React from 'react';
import { recentTransactions } from '../data/recent-transactions';

export default function RecentTransactions() {
	return (
		<section>
			<section className='flex justify-between items-center'>
				<p className='text-[1.006rem] text-[#000]'>Recent Transactions</p>
				<p className=' text-openpay-primary-gray text-xs'>View all &#62;</p>
			</section>
			<table className='w-full text-openpay-primary text-xs mt-5 border-separate new '>
				<tbody>
					{recentTransactions.map((item) => (
						<tr className=''>
							<td className='flex items-center gap-3 pr-[3px]'>
								<img src={item.image} alt='' />
								<p>{item.transactionName}</p>
							</td>
							<td className='px-[10px]'>{item.date}</td>
							<td className='px-[10px]'>{item.accountNumber}</td>
							<td className='px-[10px]'>{item.transactionAmount}</td>
							<td className='px-[10px]'>{item.transactionStatus}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}
