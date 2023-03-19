import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Button from './Button';
import { Dropdown } from './Dropdown';
import Input from './Input';
import { Astrid } from '../assets';

export default function SendMoney() {
  return (
		<section className=' px-8 my-4'>
			<p className='text-[#141736] text-[15px] pt-2 mb-2'>Send Money</p>
			<div>
				<Dropdown />
				<Input type='number' defaultValue={102.65} />
			</div>
			<div className='flex justify-between items-center'>
				<p className='flex gap-4 my-3 items-center'>
					<img src={Astrid} alt='' />
					<span className='text-xs'>Astrid Hayes</span>
				</p>
				<AiOutlinePlusCircle className='text-xl bg-openpay-light-blue text-openpay-blue' />
			</div>
			<Button
				text='Send Money'
				style='bg-openpay-btn-blue text-[#fff] w-full border rounded-lg text-xs py-2'
			/>
		</section>
	);
}
