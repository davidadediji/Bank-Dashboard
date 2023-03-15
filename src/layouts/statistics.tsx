import React from 'react';
import { stats } from '../data/stats';

export default function Statistics() {
	return (
		<section className='w-full py-[41.68px] shadow-xl shadow-x-0 shadow-y-2'>
			<section className='w-[520px] m-auto '>
				<p className='pb-[30.46px] text-[1.006rem] text-openpay-primary'>
					Statistics
				</p>
				<div className='flex justify-between'>
					{stats.map((item, index) => {
						return (
							<div className='flex items-center' key={index}>
								<div
									className={
										item.type === 'Customers'
											? ' w-12 h-12 rounded-full flex justify-center items-center mr-[5.85px] bg-openpay-stats-customers'
											: item.type === 'Remittance'
											? ' w-12 h-12 rounded-full flex justify-center items-center mr-[5.85px] bg-openpay-stats-remittances'
											: item.type === 'Donation'
											? ' w-12 h-12 rounded-full flex justify-center items-center mr-[5.85px] bg-openpay-stats-donations'
											: item.type === 'WatchTime'
											?' w-12 h-12 rounded-full flex justify-center items-center mr-[5.85px] bg-openpay-stats-watchtime'
											:''
									}
								>
									<img src={item.icon} alt='' />
								</div>
								<ul>
									<li className='text-[#333333] text-[0.868rem]'>
										{item.subscriberCount}
									</li>
									<li className='text-[#798BA3] text-[0.64rem]'>{item.type}</li>
								</ul>
							</div>
						);
					})}
				</div>
			</section>
		</section>
	);
}
