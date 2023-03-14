import React from 'react';
import OpenPayLogo from '../assets/openpay.svg';
import { menuItems } from '../data/menu-items';
import { AiOutlineExclamationCircle, AiOutlineSetting } from 'react-icons/ai';

export default function Sidebar() {
	return (
		<section className=' w-56 border-r border-[#E8ECF5] h-screen flex flex-col'>
			<section className='flex mb-8 mt-6 text-openpay-dark font-semibold items-center pl-8 gap-2 cursor-pointer'>
				<section>
					<img src={OpenPayLogo} alt='' />
				</section>
				<p className='text-base'>OpenPay</p>
			</section>

			<ul className=' text-openpay-gray font-normal text-sm'>
				{menuItems.map((item) => {
					return (
						<li className='flex cursor-pointer hover:border-l-[2.98px] hover:border-l-openpay-blue '>
							<p className='flex hover:bg-openpay-light-blue hover:text-openpay-btn-blue ml-7 gap-2 w-[137.8px] pl-3 py-2 items-center'>
								<img src={item.icon} className='w-4' />
								<span className=''>{item.itemName}</span>
							</p>
						</li>
					);
				})}
			</ul>

			<ul className='text-openpay-gray font-normal text-sm mt-[430px]'>
				<li className='flex items-center cursor-pointer '>
					<p className='flex ml-9 gap-2 w-[137.8px] pl-3 py-2 items-center'>
						<AiOutlineExclamationCircle className='text-lg'/>
						<span>Get Help</span>
					</p>
				</li>
				<li className='flex items-center cursor-pointer '>
					<p className='flex ml-9 gap-2 w-[137.8px] pl-3 py-2 items-center'>
						<AiOutlineSetting className='text-lg' />
						<span>Settings</span>
					</p>
				</li>
			</ul>
		</section>
	);
}
