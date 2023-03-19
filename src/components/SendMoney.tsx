import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Button from './Button';
import { Dropdown } from './Dropdown';
import Input from './Input';

export default function SendMoney() {
  return (
		<section className=' px-8'>
			<p className='text-[#141736] text-[15px] pt-2 mb-2'>Send Money</p>
			<div>
				<Dropdown />
				<Input />
			</div>
			<div className='flex justify-between items-center'>
				<p className='flex gap-4 my-6 items-center'>
					{/* <img src={Astrid} alt='' /> */}
					<span className='text-sm'>Astrid Hayes</span>
				</p>
				<AiOutlinePlusCircle className='text-xl bg-openpay-light-blue text-openpay-blue' />
			</div>
			<Button
				text='Send Money'
				style='bg-openpay-btn-blue text-[#fff] w-full border rounded-lg text-sm py-4'
			/>
		</section>
	);
}
