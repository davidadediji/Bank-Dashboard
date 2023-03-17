import React from 'react'
import { Pie } from 'react-chartjs-2';
//@ts-ignore
export default function PieChart({ChartData}) {
 return (
		<div className='chart-container'>
			<h2>Money Flow</h2>
			<Pie
				data={ChartData}
				options={{
					plugins: {
						title: {
							display: true,
							text: 'Users Gained between 2016-2020',
						},
                        legend:{
                            display:false
                        }
					},
				}}
			/>
		</div>
 );
}
