import React from 'react';
import { NavLink } from 'react-router-dom';

type NavButtonProps = {
	iconImg: string;
	navItem: string;
	navPath: string;
};

export default function NavButton({
	iconImg,
	navItem,
	navPath,
}: NavButtonProps) {
	return (
		<NavLink to={navPath} key={navItem}>
			<div
				className=' hover:border-l hover:border-openpay-btn-blue hover:text-openpay-blue flex'
				style={{}}
			>
				<div className='hover:bg-openpay-light-blue flex items-center mx-3 w-40 gap-2 px-3 py-[8.50px] rounded-md'>
					<img
						src={`/menuIcons/${iconImg}.svg`}
						className=' hover:text-openpay-blue'
						alt=''
					/>
					<p>{navItem}</p>
				</div>
			</div>
		</NavLink>
	);
}
