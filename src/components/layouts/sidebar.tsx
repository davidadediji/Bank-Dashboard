import React from 'react';
import OpenPayLogo from '../../assets/openpay.svg';
import { menuItems } from '../../data/menu-items';
import { AiOutlineExclamationCircle, AiOutlineSetting } from 'react-icons/ai';

export default function Sidebar() {
	return (
		<div className=' w-44 border-r border-[#E8ECF5] h-screen flex flex-col gap-5'>
			<div className='flex gap-4 mb-5 mt-6 text-openpay-dark font-semibold items-center pl-5'>
				<div>
					<img src={OpenPayLogo} alt='' />
				</div>
				<p className='text-xs'>OpenPay</p>
			</div>

			<ul className=' text-openpay-gray font-normal text-xs'>
				{menuItems.map((item) => {
					return (
						<li className='mb-5 last:m-0'>
							<p className='ml-5 flex gap-2 h-full py-[8px]'>
								<img src={item.icon} />
								<span className=''>{item.itemName}</span>
							</p>
						</li>
					);
				})}
			</ul>

			<ul className='text-openpay-gray font-normal text-xs pt-[300px]'>
				<li className='mb-5'>
					<p className='ml-5 flex gap-2 h-full py-[8px]'>
						<AiOutlineExclamationCircle />
						<span>Get Help</span>
					</p>
				</li>
				<li className=''>
					<p className='ml-5 flex gap-2 h-full py-[8px]'>
						<AiOutlineSetting />
						<span>Settings</span>
					</p>
				</li>
			</ul>
		</div>
	);
}
