import React from 'react';
import { recentTransactions } from '../data/recent-transactions';
import RTransactions from './RTransactions';


export default function RecentTransactions() {
	return (
		<section>
			<section className='flex justify-between items-center'>
				<p className='text-[#000] text-lg'>Recent Transactions</p>
				<p className=' text-openpay-primary-gray text-xs'>View all &#62;</p>
			</section>
			<table className='w-full text-openpay-primary text-xs border-separate new '>
				<RTransactions />
				<tbody>
					{recentTransactions.map((item) => (
						<tr className='' key={item.transactionName}>
							<td className='flex items-center gap-3 pr-[3px]'>
								<img className=' w-6' src={item.image} alt='' />
								<p>{item.transactionName}</p>
							</td>
							<td className='px-[10px]'>{item.date}</td>
							<td className='px-[10px]'>{item.accountNumber}</td>
							<td className='px-[10px]'>{item.transactionAmount}</td>
							<td
								className={
									item.transactionStatus === 'success'
										? ' text-openpay-transaction-text-success bg-openpay-transaction-success text-center'
										: 'text-openpay-transaction-text-pending bg-openpay-transaction-pending text-center'
								}
							>
								{item.transactionStatus}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}
