import React from 'react'
import VisaLogo from '../assets/icons/visalogo.svg'

type CardProps ={
	name:string
	cardNo:string
	expiryDate:string
}
export default function Card({name, cardNo, expiryDate}:CardProps) {
  return (
		<section className='flex flex-col justify-between bg-cover bg-openpay-image w-[205.48px] h-[108.13px] pl-3 text-[#fff] py-2'>
			<div>
				<p className='text-[8.77px]'>Name</p>
				<p className='text-[13.16px]'>{name}</p>
			</div>
			<div className='flex justify-between pr-3'>
				<div>
					<p className='text-[10.24px]'>{cardNo}</p>
					<p className='text-[8.04px]'>{expiryDate}</p>
				</div>
				<div>
					<img src={VisaLogo} alt="" />
				</div>
			</div>
		</section>
	);
}
