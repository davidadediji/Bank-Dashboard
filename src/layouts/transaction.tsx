import Visa from '../assets/icons/visalogo.svg';
import { actions } from '../data/actions';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Transaction() {
	return (
		<section className='font-gilroy-semibold ml-16'>
			<section className=' flex flex-col justify-between bg-openpay-image bg-cover bg-no-repeat w-full h-[180px] text-white rounded-sm'>
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
						<img src={Visa} alt="" />
					</div>
				</div>
			</section>
			<section className='border border-blue-700 w-full h-[272.6px] '>
				<p className='text-[#141736] text-base'>Send Money</p>
				<Button
					text='Send Money'
					style='bg-openpay-btn-blue text-[#fff] w-full border rounded-lg text-xs py-3.5'
				/>
			</section>
			<section className='border border-teal-700 w-full h-[253.74px] px-[16px]'>
				<p className='text-xs text-[#141736]'>Quick Transfer</p>
				<div>
					<Input />
				</div>
				<ul className='flex text-[#798BA3] text-[0.594rem] gap-2'>
					{actions.map((action, index) => (
						<li className='flex flex-col items-center' key={index}>
							<div className=' p-3 border border-openpay-card-outline'>
								<img src={action.img} alt='' />
							</div>
							<p>{action.name}</p>
						</li>
					))}
				</ul>
			</section>
		</section>
	);
}
