import React,{useState} from 'react';
import { Debit } from '../assets';

export const Dropdown = () => {
	const [selectedOption, setSelectedOption] = useState('');

	const handleChange = (event:any) => {
		setSelectedOption(event.target.value);
	};
	return (
		<div className='flex justify-between text-[#A8B1BF] text-base items-center p-3 mb-4'>
			<label className='flex gap-2' htmlFor='dropdown'>
				<img src={Debit} alt='' />
				<span>Debit</span>
			</label>
			<select id='dropdown' value={selectedOption} onChange={handleChange}>
				<option value='option1'>Option 1</option>
				<option value='option2'>Option 2</option>
				<option value='option3'>Option 3</option>
			</select>
		</div>
	);
};
