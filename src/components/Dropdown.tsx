import React, { useState } from 'react';
import { Debit } from '../assets';

export const Dropdown = () => {
	const [selectedOption, setSelectedOption] = useState('');

	const handleChange = (event: any) => {
		setSelectedOption(event.target.value);
	};
	return (
		<div className='flex justify-between text-[#A8B1BF] text-sm items-center p-3 mb-2'>
			<label className='flex gap-2' htmlFor='dropdown'>
				<img src={Debit} alt='' />
				<span>Debit</span>
			</label>
			<select
				id='dropdown'
				value={selectedOption}
				onChange={handleChange}
				className='outline-none'
			>
				<option value='trans-1'>10.680</option>
				<option value='trans-1'>10.681</option>
				<option value='trans-1'>10.682</option>
			</select>
		</div>
	);
};
