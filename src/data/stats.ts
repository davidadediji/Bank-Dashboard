import {StatsForCustomers, StatsForDonations, StatsForRemittance, StatsForWatchtime} from '../assets'
export interface IMenuItems {
	icon?: any;
	color: string;
	subscriberCount: string;
	type: string;
}
export const stats: IMenuItems[] = [
	{
		icon: StatsForCustomers,
    color: "string",
		subscriberCount: '220k',
		type: 'Customers',
	},

	{
		icon: StatsForRemittance,
    color: "string",
		subscriberCount: '230k',
		type: 'Remittance',
	},

	{
		icon: StatsForDonations,
    color: "string",
		subscriberCount: '270k',
		type: 'Donation',
	},

	{
		icon: StatsForWatchtime,
    color: "string",
		subscriberCount: '130k',
		type: 'WatchTime',
	},
];
