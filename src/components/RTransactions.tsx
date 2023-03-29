import React from 'react';

type RTransactionProps = {
	name: string;
	image: string;
	date: string;
	accountNumber: string;
	amount: string;
	status: string;
};
export default function RTransactions({
	name,
	image,
	date,
	accountNumber,
	amount,
	status,
}: RTransactionProps) {
	return (
		<div className='flex items-center justify-between' key={name}>
			<div className='flex items-center gap-2 w-40'>
				<img src={image} alt={name} />
				<p>{name}</p>
			</div>
			<p className='px-[10px] w-30'>{date}</p>
			<p className='px-[10px] w-20'>{accountNumber}</p>
			<p className='px-[10px] w-20'>{amount}</p>
			<p
				className={
					status === 'success'
						? ' text-openpay-transaction-text-success bg-openpay-transaction-success text-center py-1 px-2'
						: 'text-openpay-transaction-text-pending bg-openpay-transaction-pending text-center px-2 py-1'
				}
			>
				{status}
			</p>
		</div>
	);
}
