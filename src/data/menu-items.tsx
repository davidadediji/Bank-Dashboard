import { IconType } from 'react-icons';
import { FiHome, FiSettings } from 'react-icons/fi';
import {TbCreditCard} from 'react-icons/tb'
import { HiOutlineChat} from 'react-icons/hi';
import {HiOutlineChartBarSquare} from 'react-icons/hi2'
import {CgNotes} from 'react-icons/cg';
import { AiOutlinePieChart, AiOutlineExclamationCircle} from 'react-icons/ai';


export const menuItems = [
	{
		icon: FiHome,
		path:"/",
		itemName: 'Dashboard',
	},

	{
		icon: CgNotes,
		path:"/invoice",
		itemName: 'Invoices',
	},

	{
		icon: HiOutlineChat,
		path:"/message",
		itemName: 'Messages',
	},

	{
		icon: TbCreditCard,
		path:'wallet',
		itemName: 'My Wallets',
	},

	{
		icon: AiOutlinePieChart,
		path: '/activity',
		itemName: 'Activity',
	},

	{
		icon: HiOutlineChartBarSquare,
		path:'/analytics',
		itemName: 'Analytics',
	},
];

export const bottomMenuItems = [
	{
		icon: AiOutlineExclamationCircle,
		path: '/help',
		itemName: 'Get Help',
	},
	{
		icon: FiSettings,
		path: '/settings',
		itemName: 'Settings',
	},
];