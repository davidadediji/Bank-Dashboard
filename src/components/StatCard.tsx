import React from 'react';

type StatCardProps = {
	type: string;
	icon: string;
	subscriberCount: string;
};
export default function StatCard({
	type,
	icon,
	subscriberCount,
}: StatCardProps) {
	return (
		<div className='flex items-center'>
			<div
				className={`w-12 h-12 rounded-full flex justify-center items-center mr-5
                ${
                    type === 'Customers'
                        ? ' bg-openpay-stats-customers'
                        : type === 'Remittance'
                        ? 'bg-openpay-stats-remittances'
                        : type === 'Donation'
                        ? 'bg-openpay-stats-donations'
                        : type === 'WatchTime'
                        ? 'bg-openpay-stats-watchtime'
                        : ''
                }`}
			>
				<img className=' w-6' src={icon} alt='' />
			</div>
			<ul>
				<li className='text-[#333333] text-sm'>{subscriberCount}</li>
				<li className='text-[#798BA3] text-xs'>{type}</li>
			</ul>
		</div>
	);
}
