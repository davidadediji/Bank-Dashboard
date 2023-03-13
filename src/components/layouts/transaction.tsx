import Visa from '../../assets/icons/visalogo.svg'

export default function Transaction() {
	return (
		<section className='flex flex-col w-75 pl-[21.94px] gap-6 font-gilroy-semibold border border-green-500'>
			<section className='flex gap-8 flex-col pl-4 pt-3 bg-openpay-image w-[205.48px] h-[108.13px] text-white border-red-500 border rounded-xl'>
				<div>
					<p className='text-[8.77px]'>Name</p>
					<p className='text-[13.66px]'>Carla Rosser</p>
				</div>
				<div className='flex gap-14'>
					<div>
						<p className='text-[10.24px]'>1200 01452 54315</p>
						<p className='text-[8.04px]'>08/23</p>
					</div>
					<div>
						<img src={Visa} alt='' />
					</div>
				</div>
			</section>
			<section className='border border-blue-700 w-[206.88px] h-[272.6px]'></section>
			<section className='border border-teal-700 w-[205.48px] h-[253.74px]'>
				<div>
					<p className='text-[8.77px]'>Name</p>
					<p className='text-[13.66px]'>Carla Rosser</p>
				</div>
			</section>
		</section>
	);
}
