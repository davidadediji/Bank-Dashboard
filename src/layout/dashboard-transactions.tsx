import Card from '../components/Card';
import SendMoney from '../components/SendMoney';
import QuickTransfer from '../components/QuickTransfer';
export default function Transactions() {
	return (
		<section>
			<h1 className='text-[17.55px] text-[#000] mb-5'>My Card</h1>
			<Card name='Carla Rosser' expiryDate='08/23' cardNo='1200 01452 54215' />
			{/* <SendMoney/> */}
			{/* <QuickTransfer/> */}
		</section>
	);
}
