import React from 'react'
import Navbar from '../components/Navbar'
import Analytics from '../layout/dashboard-analytics';
import Transactions from '../layout/dashboard-transactions';

export default function Dashboard() {
  return (
		<div className='font-gilroy-semibold'>
			<Navbar />
			<div className='flex'>
				<p className='shrink border border-yellow-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ipsum, aspernatur quo nobis dolore, quas numquam assumenda porro earum cumque distinctio harum ullam saepe non voluptatem vero cupiditate dignissimos! Dolor aspernatur nisi dolores accusantium totam ab quia rem repellendus esse molestias officiis iusto, praesentium repudiandae ipsa! Quibusdam inventore aperiam possimus.</p>
				<p className='grow border border-b-red-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis impedit corporis quae vel dolor, magnam eos laboriosam, praesentium unde eaque porro dolores illum? Amet sequi at, tenetur accusamus quia expedita eligendi sit ratione iusto exercitationem vero non et perspiciatis ullam, eos animi, sint rem. Fugiat quas aliquam corporis assumenda reprehenderit.</p>
			</div>
		</div>
	);
}
