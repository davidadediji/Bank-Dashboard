import React from 'react';
import { stats } from '../data/stats';

export default function Statictics() {
	return (
		<section className=' shadow-lg'>
			<div className=' px-8 py-12'>
				<p className=' mb-6 text-openpay-primary-dark text-lg'>Statistics</p>
				<div className='flex justify-between'>
					{stats.map((item, index) => {
						return (
							<div className='flex items-center' key={index}>
								<div
									className={`w-12 h-12 rounded-full flex justify-center items-center mr-5
										${
											item.type === 'Customers'
												? ' bg-openpay-stats-customers'
												: item.type === 'Remittance'
												? 'bg-openpay-stats-remittances'
												: item.type === 'Donation'
												? 'bg-openpay-stats-donations'
												: item.type === 'WatchTime'
												? 'bg-openpay-stats-watchtime'
												: ''
										}`}
								>
									<img src={item.icon} alt='' />
								</div>
								<ul>
									<li className='text-[#333333] text-sm'>
										{item.subscriberCount}
									</li>
									<li className='text-[#798BA3] text-xs'>{item.type}</li>
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
