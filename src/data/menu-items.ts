import {Home} from 'react-feather'

interface IMenuItems {
    icon?: any
    itemName: string
}
export const menuItems: IMenuItems[] = [
	{
		icon: Home,
		itemName: 'Dashboard',
	},

	{
		icon: '',
		itemName: 'Invoices',
	},

	{
		icon: '',
		itemName: 'Messages',
	},

	{
		icon: '',
		itemName: 'My Wallets',
	},

	{
		icon: '',
		itemName: 'Activity',
	},

	{
		icon: '',
		itemName: 'Analytics',
	},
];