import React from 'react'
import Analytics from './analytics';
import Navbar from './navbar'
import Transaction from './transaction';

export default function Dashboard() {
  return (
    <div className='border border-red-600 w-full'>
      <Navbar/>
      <div className='flex'>
        <Transaction/>
        <Analytics/>
      </div>
    </div>

	);
}
