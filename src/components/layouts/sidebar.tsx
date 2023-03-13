import React from 'react';
import OpenPayLogo from '../../assets/openpay.svg';
import { menuItems } from '../../data/menu-items';
import { AiOutlineExclamationCircle, AiOutlineSetting } from 'react-icons/ai';

export default function Sidebar() {
	return (
		<section className=' w-44 border-r border-[#E8ECF5] h-screen flex flex-col gap-5'>
			<section className='flex gap-4 mb-5 mt-6 text-openpay-dark font-semibold items-center pl-5 cursor-pointer'>
				<section>
					<img src={OpenPayLogo} alt='' />
				</section>
				<p className='text-xs'>OpenPay</p>
			</section>

			<ul className=' text-openpay-gray font-normal text-xs'>
				{menuItems.map((item) => {
					return (
						<li className='last:m-0 mb-1 cursor-pointer'>
							<p className='ml-5 flex gap-2 h-full pl-3 py-[8px] hover:bg-openpay-light-blue items-center'>
								<img src={item.icon} />
								<span className=''>{item.itemName}</span>
							</p>
						</li>
					);
				})}
			</ul>

			<ul className='text-openpay-gray font-normal text-xs pt-[430.99px]'>
				<li className='mb-1 cursor-pointer'>
					<p className='ml-5 flex gap-2 h-full py-[8px] items-center'>
						<AiOutlineExclamationCircle />
						<span>Get Help</span>
					</p>
				</li>
				<li className='cursor-pointer'>
					<p className='ml-5 flex gap-2 h-full py-[8px] items-center'>
						<AiOutlineSetting />
						<span>Settings</span>
					</p>
				</li>
			</ul>
		</section>
	);
}
