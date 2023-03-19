import React from 'react'
import { actions } from '../data/actions';
import { Dropdown } from './Dropdown';
import Input from './Input';

export default function QuickTransfer() {
  return (
		<section className='w-full h-[253.74px] px-20'>
			<p className='text-sm text-[#141736] mb-3'>Quick Transfer</p>
			<div>
				<Dropdown />
				<Input type='number' defaultValue={102.65}/>
			</div>
			<ul className='flex justify-between text-[#798BA3] text-[0.594rem] gap-2 pt-4'>
				{actions.map((action, index) => (
					<li className='flex flex-col items-center' key={index}>
						<div className='mb-1 p-2 border border-openpay-card-outline'>
							<img className=' w-4' src={action.img} alt='' />
						</div>
						<p>{action.name}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
