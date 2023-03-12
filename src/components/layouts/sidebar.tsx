import React from 'react'
import OpenPayLogo from '../../assets/openpay.svg'
import { menuItems } from '../../data/menu-items';

export default function Sidebar() {
  return (
		<div className='w-44 border-r border-[#E8ECF5] h-screen flex flex-col items-center pt-6'>
			<div className='flex gap-4 mb-5'>
				<div>
					<img src={OpenPayLogo} alt='' />
				</div>
				<p>OpenPay</p>
			</div>
			<div>
				<ul>
					{menuItems.map((item) => {
						return (
							<li className=' py-2 mb-3 pl-2 border-red-400 border' key={item.itemName}>
								<img src={item.icon} alt='' />
								<p>{item.itemName}</p>
							</li>
						);
					})}
				</ul>
			</div>
            <div>
                <p>Get Help</p>
                <p>Settings</p>
            </div>
		</div>
	);
}
