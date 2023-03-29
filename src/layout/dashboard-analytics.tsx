import MoneyFlow from '../components/MoneyFlow';
import RecentContacts from '../components/RecentContacts';
import RecentTransactions from '../components/RecentTransactions';
import Statictics from '../components/Statictics';

export default function Analytics() {
	return (
		<section className='font-gilroy-semibold mt-11'>
			<div className='flex w-full'>
				<MoneyFlow />
				<RecentContacts />
			</div>
			<div className='mt-[2.772rem] mb-[2.468rem]'>
				<RecentTransactions />
			</div>
			<div>
				<Statictics />
			</div>
		</section>
	);
}
