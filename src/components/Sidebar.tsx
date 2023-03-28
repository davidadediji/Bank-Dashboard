import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bottomMenuItems, menuItems } from '../data/menu-items';
import OpenPayLogo from '../assets/openpay.svg';
import NavButton from './NavButton';

export default function Sidebar() {
	return (
		<div className=' font-poppins h-full flex flex-col justify-between text-[11.7px]'>
			<div className=''>
				<Link to={'/'}>
					<div className='flex gap-2 py-6 pl-5 items-center'>
						<img src={OpenPayLogo} alt='' />
						<span className=' font-bold text-openpay-dark'>OpenPay</span>
					</div>
				</Link>
				<div className='flex flex-col text-openpay-gray gap-2'>
					{menuItems.map((item) => (
						<NavButton
							iconImg={item.icon}
							navItem={item.itemName}
							navPath={item.path}
						/>
					))}
				</div>
			</div>
			<div className=' text-openpay-gray pb-7'>
				{bottomMenuItems.map((item) => (
					<NavButton
						iconImg={item.icon}
						navItem={item.itemName}
						navPath={item.path}
					/>
				))}
			</div>
		</div>
	);
}
