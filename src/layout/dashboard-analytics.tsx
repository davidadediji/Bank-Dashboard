import MoneyFlow from '../components/MoneyFlow';
import RecentContacts from '../components/RecentContacts';
import RecentTransactions from '../components/RecentTransactions';
import Statictics from '../components/Statictics';

export default function Analytics() {
	return (
		<section className='font-gilroy-semibold border border-red-400 pt-11'>
				<div className=' flex mb-11'>
					<MoneyFlow />
					<RecentContacts />
				</div>
				<RecentTransactions />
				<Statictics />
		</section>
	);
}
