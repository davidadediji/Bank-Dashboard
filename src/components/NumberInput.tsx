const Input = () => {
  return (
		<>
			<div className=' border border-[#819CFD] rounded-lg pl-[0.567rem] pt-[0.567rem] pb-[0.496rem]'>
				<p className='text-[#A8B1BF] text-base'>Enter amount</p>
				<span>$</span>
				<input
					className=' outline-none pl-1 appearance-none'
					type='number'
					defaultValue={102.56}
				/>
			</div>
		</>
	);
}

export default Input;
