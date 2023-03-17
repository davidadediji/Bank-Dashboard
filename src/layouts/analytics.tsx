import RecentTransactions from './recent-transactions';
import Statistics from './statistics';
import TopContent from './top-content';

export default function Analytics() {
	return (
		<div className='w-full font-gilroy-semibold'>
			<TopContent/>
			<RecentTransactions />
			<Statistics />
		</div>
	);
}
