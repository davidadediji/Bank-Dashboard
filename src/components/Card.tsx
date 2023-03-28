import React from 'react'
import VisaLogo from '../assets/icons/visalogo.svg'

export default function Card() {
  return (
		<section className=' flex flex-col justify-between bg-openpay-btn-blue h-[6.758rem] w-[12.843rem] text-white rounded-2xl px-8 pt-6 pb-5'>
			<div>
				<p className='text-xs'>Name</p>
				<p className='text-sm'>Carla Rosser</p>
			</div>
			<div className='flex justify-between items-center'>
				<div>
					<p className='text-sm'>1200 01452 54315</p>
					<p className='text-sm'>08/23</p>
				</div>
				<div>
					<img src={VisaLogo} className='w-14' alt='' />
				</div>
			</div>
		</section>
	);
}
