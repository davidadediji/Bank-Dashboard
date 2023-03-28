import React from 'react';
import { IoMdNotificationsOutline, IoIosSearch } from 'react-icons/io';
import Avatar from '../assets/images/avatar4.jpg';

export default function Navbar() {
	return (
		<section className='w-full flex items-center pt-2 pb-1 justify-end pr-7'>
			<ul className='flex items-center gap-5'>
				<li>
					<IoMdNotificationsOutline className='text-xl text-openpay-primary-gray' />
				</li>
				<li>
					<IoIosSearch className='text-xl text-openpay-primary-gray' />
				</li>
				<li className='w-7'>
					<img className='w-[100%] rounded-full' src={Avatar} alt='' />
				</li>
			</ul>
		</section>
	);
}
