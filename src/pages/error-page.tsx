import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ErrorPage() {
    const location = useLocation();
	return (
		<div className='flex flex-col items-center h-full w-full justify-center'>
			<h1 className='text-2xl font-poppins font-extrabold'>
				404: Page Not Found
			</h1>
			<p className='text-sm'>path: {location.pathname} does not exist</p>
		</div>
	);
}
