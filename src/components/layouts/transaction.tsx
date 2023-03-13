import React from 'react';

export default function Transaction() {
	return (
		<section className='flex flex-col w-56 pl-[21.94px] gap-6'>
			<section className='bg-openpay-image w-[205.48px] h-[108.13px] border-red-500 border rounded-xl'>
				<div>
					<p>Name</p>
					<p>Carla Rosser</p>
				</div>
				<div>
					<p>1200 01452 54315</p>
					<p>08/23</p>
				</div>
			</section>
			<section className='border border-blue-700 w-[206.88px] h-[272.6px]'></section>
			<section className='border border-blue-700 w-[205.48px] h-[253.74px]'></section>
		</section>
	);
}
