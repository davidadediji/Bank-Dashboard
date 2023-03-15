import Visa from '../assets/icons/visalogo.svg';
import { actions } from '../data/actions';
import Button from '../components/Button';
import Input from '../components/NumberInput';
import { Dropdown } from '../components/Dropdown';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Astrid } from '../assets';

export default function Transaction() {
	return (
		<section className=' flex flex-col gap-5 font-gilroy-semibold ml-16'>
			<section className=' flex flex-col justify-between bg-openpay-image bg-cover bg-no-repeat w-full h-[180px] text-white rounded-sm px-8 pt-6 pb-5'>
				<div>
					<p className='text-[8.77px]'>Name</p>
					<p className='text-[13.66px]'>Carla Rosser</p>
				</div>
				<div className='flex justify-between'>
					<div>
						<p className='text-[10.24px]'>1200 01452 54315</p>
						<p className='text-[8.04px]'>08/23</p>
					</div>
					<div>
						<img src={Visa} className=' w-16' alt='' />
					</div>
				</div>
			</section>
			<section className='w-full h-[272.6px] '>
				<p className='text-[#141736] text-base pt-2 mb-5'>Send Money</p>
				<div>
					<Dropdown />
					<Input />
				</div>
				<div className='flex justify-between items-center'>
					<p className='flex gap-4 my-6'>
						<img src={Astrid} alt="" />
						<span>Astrid Hayes</span>
					</p>
					<AiOutlinePlusCircle className='text-xl bg-openpay-light-blue text-openpay-blue'/>
				</div>
				<Button
					text='Send Money'
					style='bg-openpay-btn-blue text-[#fff] w-full border rounded-lg text-sm py-6'
				/>
			</section>
			<section className='w-full h-[253.74px] px-16'>
				<p className='text-base text-[#141736] mb-3'>Quick Transfer</p>
				<div>
					<Dropdown />
					<Input />
				</div>
				<ul className='flex justify-between text-[#798BA3] text-[0.594rem] gap-2 pt-4'>
					{actions.map((action, index) => (
						<li className='flex flex-col items-center' key={index}>
							<div className=' h-16 mb-1 p-3 border border-openpay-card-outline'>
								<img className=' w-8' src={action.img} alt='' />
							</div>
							<p>{action.name}</p>
						</li>
					))}
				</ul>
			</section>
		</section>
	);
}
