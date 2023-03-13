import React from 'react';
import { recentTransactions } from '../../data/recent-transactions';

export default function RecentTransactions() {
	return (
		<section className=' border-red-300 border'>
			<section className='flex justify-between'>
				<p>Recent Transactions</p>
				<p>View all &#62;</p>
			</section>
			<table className='w-full'>
				<tbody>
					{recentTransactions.map((item) => (
						<tr>
							<td>{item.transactionName}</td>
							<td>{item.date}</td>
							<td>{item.accountNumber}</td>
							<td>{item.transactionAmount}</td>
							<td>{item.transactionStatus}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}
