import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { bottomMenuItems, menuItems } from '../data/menu-items';
import OpenPayLogo from '../assets/openpay.svg';

export default function Sidebar() {
	const activeLink =
		'flex pl-10 pr-20 gap-3 py-4 items-center bg-openpay-light-blue border-l border-openpay-blue text-openpay-blue text-sm';
	const normalLink =
		'flex pl-10 pr-20 gap-3 py-4 items-center hover:bg-openpay-light-blue border-l hover:border-openpay-blue text-openpay-gray hover:text-openpay-blue text-sm';
	return (
		<div className='h-full md:overflow-hidden overflow-auto md:hover:overflow-auto border-r font-poppins'>
			<div className='pl-12 pr-20 flex my-6'>
				<Link
					to={'/'}
					className='gap-3 flex items-center text-[11.7px] font-semibold'
				>
					<img className=' w-6' src={OpenPayLogo} alt='Openpay Logo' />
					<span>OpenPay</span>
				</Link>
			</div>
			<div className='text-lg flex flex-col mt-6'>
				{menuItems.map((item) => (
					<NavLink
						to={item.path}
						key={item.itemName}
						className={({ isActive }) => (isActive ? activeLink : normalLink)}
					>
						<item.icon className='text-2xl' />{' '}
						<span>{item.itemName}</span>
					</NavLink>
				))}
			</div>
			<div className='text-lg flex flex-col mt-[460px]'>
				{bottomMenuItems.map((item) => (
					<NavLink
						to={item.path}
						key={item.itemName}
						className={({ isActive }) => (isActive ? activeLink : normalLink)}
					>
						<item.icon className='text-2xl' /> <span>{item.itemName}</span>
					</NavLink>
				))}
			</div>
		</div>
	);
}
