import React from 'react'
import Navbar from '../components/Navbar'
import Analytics from '../layout/dashboard-analytics';
import Transactions from '../layout/dashboard-transactions';

export default function Dashboard() {
  return (
		<div className='font-gilroy-semibold w-full'>
			<Navbar />
			<div style={{display:'flex', width:'100%', gap:12}}>
				<p className='border border-yellow-600' style={{flex:0.6 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ipsum, aspernatur quo nobis dolore, quas numquam assumenda porro earum cumque distinctio harum ullam saepe non voluptatem vero cupiditate dignissimos! Dolor aspernatur nisi dolores accusantium totam ab quia rem repellendus esse molestias officiis iusto, praesentium repudiandae ipsa! Quibusdam inventore aperiam possimus.</p>
				<p className='border border-b-red-600' style={{flex:2}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis impedit corporis quae vel dolor, magnam eos laboriosam, praesentium unde eaque porro dolores illum? Amet sequi at, tenetur accusamus quia expedita eligendi sit ratione iusto exercitationem vero non et perspiciatis ullam, eos animi, sint rem. Fugiat quas aliquam corporis assumenda reprehenderit.</p>
			</div>
		</div>
	);
}
