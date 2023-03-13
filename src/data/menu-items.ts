import Home from '../assets/icons/home.svg'
import Invoice from '../assets/icons/invoice.svg'
import Message from '../assets/icons/messages.svg'
import Wallet from '../assets/icons/wallets.svg'
import Activity from '../assets/icons/activity.svg'
import Analytics from '../assets/icons/analytics.svg'

export interface IMenuItems {
    icon?: any
    itemName: string
}
export const menuItems: IMenuItems[] = [
	{
		icon: Home,
		itemName: 'Dashboard',
	},

	{
		icon: Invoice,
		itemName: 'Invoices',
	},

	{
		icon: Message,
		itemName: 'Messages',
	},

	{
		icon: Wallet,
		itemName: 'My Wallets',
	},

	{
		icon: Activity,
		itemName: 'Activity',
	},

	{
		icon: Analytics,
		itemName: 'Analytics',
	},
];