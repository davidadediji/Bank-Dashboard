import { type } from "os";

type InputProps = {
	type:string
	defaultValue?:number
}

const Input = ({ type, defaultValue }: InputProps) => {
	return (
		<>
			<div className=' border border-[#819CFD] rounded-lg pl-[0.567rem] pt-[0.45rem] pb-[0.40rem]'>
				<p className='text-[#A8B1BF] text-xs'>Enter amount</p>
				<span>$</span>
				<input
					className=' outline-none pl-1 appearance-none text-sm'
					type={type}
					defaultValue={defaultValue}
				/>
			</div>
		</>
	);
};

export default Input;
