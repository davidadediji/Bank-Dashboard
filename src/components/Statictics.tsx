import React from 'react';
import { stats } from '../data/stats';
import StatCard from './StatCard';

export default function Statictics() {
	return (
		<section className=' shadow-lg border border-blue-600 mt-10'>
			<div className=' mx-8 my-12 border border-lime-400'>
				<p className=' mb-6 text-openpay-primary-dark text-lg'>Statistics</p>
				<div className='flex justify-between'>
					{stats.map((item, index) => {
						return (
							<div className='flex items-center' key={index}>
								<StatCard icon={item.icon} subscriberCount={item.subscriberCount} type={item.type}/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
