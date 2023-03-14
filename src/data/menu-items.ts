import Home from '../assets/icons/home.svg'
import Invoice from '../assets/icons/invoice.svg'
import Message from '../assets/icons/messages.svg'
import Wallet from '../assets/icons/wallets.svg'
import Activity from '../assets/icons/activity.svg'
import Analytics from '../assets/icons/analytics.svg'

export interface IMenuItems {
    icon?: any
	path:string
    itemName: string
}
export const menuItems: IMenuItems[] = [
	{
		icon: Home,
		path:"/",
		itemName: 'Dashboard',
	},

	{
		icon: Invoice,
		path:"/invoice",
		itemName: 'Invoices',
	},

	{
		icon: Message,
		path:"/message",
		itemName: 'Messages',
	},

	{
		icon: Wallet,
		path:'wallet',
		itemName: 'My Wallets',
	},

	{
		icon: Activity,
		path: '/activity',
		itemName: 'Activity',
	},

	{
		icon: Analytics,
		path:'/analytics',
		itemName: 'Analytics',
	},
];