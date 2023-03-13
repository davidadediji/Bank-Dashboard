import {Bitcoin, Jane, Paypal} from '../assets'

type status = 'success' | 'pending' | 'declined';

export interface IRecentTransactions {
	image?: any;
	transactionName: string;
	date: string;
	accountNumber: string;
	transactionAmount: string;
	transactionStatus: status;
}

export const recentTransactions: IRecentTransactions[] = [
	{
		image: Bitcoin,
		transactionName: 'Bitcoin Transactions',
		date: 'Jan 16, 2020',
		accountNumber: '*****45242',
		transactionAmount: '-$853.00',
		transactionStatus: 'success',
	},
	{
		image: Jane,
		transactionName: 'Sent to anitonia',
		date: 'Jan 16, 2020',
		accountNumber: '*****87212',
		transactionAmount: '-$153.00',
		transactionStatus: 'pending',
	},
	{
		image: Paypal,
		transactionName: 'Withdraw Paypal',
		date: 'Jan 16, 2020',
		accountNumber: '*****36275',
		transactionAmount: '+$223.00',
		transactionStatus: 'success',
	},
];
