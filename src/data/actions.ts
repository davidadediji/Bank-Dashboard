import {Send, Receive, Invoicing, More} from '../assets'
export interface IActions{
    img:string;
    name:string;
}
export const actions:IActions[] = [
	{
		img: Send,
		name: 'Send',
	},
	{
		img: Receive,
		name: 'Receive',
	},
	{
		img: Invoicing,
		name: 'Invoicing',
	},
	{
		img: More,
		name: 'More',
	},
];