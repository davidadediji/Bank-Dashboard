import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { TbMathGreater } from 'react-icons/tb';
import { HiOutlinePencil } from 'react-icons/hi';
import { Jane, image2, image3, image4, image5, Dakota, Group } from '../assets';
export default function RecentContacts() {
	return (
		<section className='col-span-2 w-full px-4 pt-3'>
			<div className='flex justify-between mb-1'>
				<p className=' text-sm text-openpay-gray'>Recent Contacts</p>
				<p className='flex gap-5 text-openpay-primary-gray'>
					<span>
						<HiOutlinePencil />
					</span>
					<span>
						<IoIosSearch />
					</span>
				</p>
			</div>
			<p className=' text-xs text-openpay-primary-gray'>18 recipients</p>
			<ul className='flex gap-10 items-center my-7'>
				<li>
					<img src={Jane} className=' w-12' alt='' />
				</li>
				<li>
					<img src={image2} className=' w-12' alt='' />
				</li>
				<li>
					<img src={image3} className=' w-12' alt='' />
				</li>
				<li>
					<img src={image4} className=' w-12' alt='' />
				</li>
				<li>
					<img src={image5} className=' w-12' alt='' />
				</li>
				<li>
					<TbMathGreater className=' text-openpay-primary-gray text-xs' />
				</li>
			</ul>
			<div className=' shadow-xl py-4 px-8'>
				<p className=' text-openpay-primary-gray py-4'>
					Group <span className=' text-openpay-gray'>Party</span>
				</p>
				<ul className=' mb-4'>
					<li>
            <img src={Group} alt="" />
          </li>
				</ul>

				<div className='flex items-center justify-between'>
					<div className='flex gap-4 items-center'>
						<div className=' w-10'>
							<img src={Dakota} className='w-full' alt='' />
						</div>
						<p className='flex flex-col gap-1'>
							<span className=' text-openpay-gray text-sm'>Dakota Milk</span>
							<span className=' text-[#7D8DA6] text-xs'>$420.00</span>
						</p>
					</div>
					<TbMathGreater className=' text-openpay-primary-gray text-xs' />
				</div>
			</div>
		</section>
	);
}
