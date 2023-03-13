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
					{stats.map((item) => {
						return (
							<div className='flex items-center'>
								<div className=' w-10 h-10 border-orange-600 border rounded-full flex justify-center items-center mr-[5.85px]'>
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
		// <div className='border border-red-300 w-96'>Statistics</div>
	);
}
