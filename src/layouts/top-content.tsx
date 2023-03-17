import React from 'react'
import ChartComponent from './chart';
import Contacts from './contacts'

export default function TopContent() {
  return (
		<section className='flex gap-4'>
			<div className='border border-orange-400 w-[40%] h-[25%]'>
				<ChartComponent />
			</div>
			<div>
				<Contacts />
			</div>
		</section>
	);
}
