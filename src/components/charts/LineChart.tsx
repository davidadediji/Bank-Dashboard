import { useState } from 'react';
import Chart from 'react-apexcharts';

export default function LineChart() {
	const [data, setData] = useState({
		options: {
			chart: {
				id: 'basic-bar',
			},
			xaxis: {
				categories: [
					'Dec 2',
					'Dec 3',
					'Dec 4',
					'Dec 5',
					'Dec 6',
					'Dec 7',
					'Dec 8',
					'Dec 9',
				],
				labels: {
					style: {
						fontFamily: 'Gilroy-SemiBold',
						fontSize: '9px',
						lineHeight: '9px',
						color: '#fff',
					},
				},
				axisTicks: {
					show: false,
				},
			},
			yaxis: {
				min: 0,
				range: 10000,
				tickAmount: 5,
			},
		},
		series: [
			{
				name: 'income',
				data: [5000, 10000, 5000, 30000, 25000, 40000, 50000, 10000],
			},
		],
	});
	return (
		<div>
			<Chart options={data.options} series={data.series} type='area' width={350}></Chart>
		</div>);
}
