import React from 'react'
import LineChart from './charts/LineChart';

export default function MoneyFlow() {
  return (
		<section className='col-span-3'>
			<p>MoneyFlow</p>
			<div>
				<p className='text-xs my-3'>Savings</p>
			</div>
			<div className=' w-auto'>
				<LineChart />
			</div>
		</section>
	);
}
