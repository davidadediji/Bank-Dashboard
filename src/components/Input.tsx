const Input = () => {
	return (
		<>
			<div className=' border border-[#819CFD] rounded-lg pl-[0.567rem] pt-[0.45rem] pb-[0.40rem]'>
				<p className='text-[#A8B1BF] text-xs'>Enter amount</p>
				<span>$</span>
				<input
					className=' outline-none pl-1 appearance-none text-sm'
					type='number'
					defaultValue={102.56}
				/>
			</div>
		</>
	);
};

export default Input;
