import { Customers, Donate, Remittance, Watchtime } from '../assets';
export interface IMenuItems {
	icon?: any;
	color: string;
	subscriberCount: string;
	type: string;
}
export const stats: IMenuItems[] = [
	{
		icon: Donate,
		color: 'string',
		subscriberCount: '220k',
		type: 'Customers',
	},

	{
		icon: Customers,
		color: 'string',
		subscriberCount: '230k',
		type: 'Remittance',
	},

	{
		icon: Remittance,
		color: 'string',
		subscriberCount: '270k',
		type: 'Donation',
	},

	{
		icon: Watchtime,
		color: 'string',
		subscriberCount: '130k',
		type: 'WatchTime',
	},
];
