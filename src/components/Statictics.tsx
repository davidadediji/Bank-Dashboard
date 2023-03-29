import React from 'react';
import { stats } from '../data/stats';
import StatCard from './StatCard';

export default function Statictics() {
	return (
		<div className='px-8 py-10 shadow-lg'>
			<p className='pb-6 text-openpay-primary-dark text-lg'>Statistics</p>
			<div className='flex justify-between'>
				{stats.map((item, index) => {
					return (
						<div className='flex items-center' key={index}>
							<StatCard
								icon={item.icon}
								subscriberCount={item.subscriberCount}
								type={item.type}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
