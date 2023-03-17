import React from 'react';
import { Line } from 'react-chartjs-2';
//@ts-ignore
export default function LineChart({ ChartData }) {
	return (
		<div className='chart-container'>
			<Line
				data={ChartData}
				options={{
					plugins: {
						title: {
							display: true,
							text: 'Users Gained between 2016-2020',
						},
						legend: {
							display: false,
						},
					},
				}}
			/>
		</div>
	);
}
