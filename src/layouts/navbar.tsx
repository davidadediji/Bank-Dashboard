import React from 'react';
import { GrNotification, GrSearch } from 'react-icons/gr';
import ProfileAvatar from '../assets/images/avatar.png';

export default function Navbar() {
	return (
		<nav className='w-full'>
			<section className='flex justify-between pt-[36.56px] pb-[22.14px] px-[21.94px]'>
				<h2 className=' text-openpay-dark-black font-gilroy-semibold font-bold text-[17.55px]'>
					My Card
				</h2>
				<ul className='flex gap-4 items-center '>
					<li>
						<GrSearch />
					</li>
					<li>
						<GrNotification />
					</li>
					<li className='last:gap-0'>
						<img src={ProfileAvatar} alt='' />
					</li>
				</ul>
			</section>
		</nav>
	);
}
