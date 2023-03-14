import React from 'react'

const Input = () => {
  return (
		<div className=' border border-[#819CFD] rounded-lg pl-[0.567rem] pt-[0.567rem] pb-[0.496rem]'>
			<p className=''>Enter amount</p>
			<span>$</span>
			<input className=' outline-none pl-1 appearance-none w-full' type='number' defaultValue={102.56} />
		</div>
	);
}

export default Input;
