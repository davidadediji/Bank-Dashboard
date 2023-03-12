import React from 'react'

export default function Navbar() {
  return (
		<nav className='pt-[36.56px] pb-[22.14px] flex justify-between border border-red-600 w-full pr-3'>
			<section className=' text-openpay-dark-black font-extrabold'>My Card</section>
			<ul className='flex gap-2'>
				<li>search</li>
				<li>notify</li>
				<li className='last:gap-0'>avatar</li>
			</ul>
		</nav>
	);
}
