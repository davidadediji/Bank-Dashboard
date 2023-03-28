import React from 'react'
import LineChart from './charts/LineChart';

export default function MoneyFlow() {
  return (
		<section className=''>
			<p className=' text-base text-[#141736]'>MoneyFlow</p>
			<div>
				<p className='text-xs my-3'>Savings</p>
			</div>
			<div className=' w-auto'>
				<LineChart />
			</div>
		</section>
	);
}
