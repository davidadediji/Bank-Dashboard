import React from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { useState } from 'react';
import { Data } from '../data/chart-data';
import PieChart from '../charts/PieChart';
import LineChart from '../charts/LineChart';

Chart.register(CategoryScale);

export default function ChartComponent() {
	const [chartData, setChartData] = useState({
		labels: Data.map((data) => data.year),
		datasets: [
			{
				label: 'Users Gained ',
				data: Data.map((data) => data.userGain),
				backgroundColor: [
					'rgba(75,192,192,1)',
					'#ecf0f1',
					'#50AF95',
					'#f3ba2f',
					'#2a71d0',
				],
				borderColor: 'black',
				borderWidth: 2,
			},
		],
	});

	return (
		<div className=' w-[50%]'>
			<p>Money Flow</p>
			{/* <PieChart ChartData={chartData} /> */}
			<LineChart ChartData={chartData} />
		</div>
	);
}
