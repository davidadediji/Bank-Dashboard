import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  LineElement, 
  Tooltip, 
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from 'chart.js';

ChartJS.register({
	LineElement,
	Tooltip,
	CategoryScale,
	LinearScale,
	PointElement,
  Filler
});
export default function LineChart() {


  const data = {
		labels: ['Dec 2', 'Dec 3', 'Dec 4', 'Dec 5', 'Dec 6', 'Dec 7', 'Dec 8'],
		datasets: [
			{
				data: [0.5, 0.7, 0.4, 1.6, 2.6, 2.3, 3.5],
				pointBorderColor: 'blue',
				fill: true,
				backgroundColor:
					'#E0ECFC',
				pointBackgroundColor:'#fff',
				borderColor: 'blue',
				lineTension: 0.5,
				borderWidth: 2,
				pointRadius: 3,
			},
		],
	};

  const options = {
		scales: {
			y: {
				min: 0,
				max: 4,
				grid: {
					display: false,
				},
			},
			x: {
				min: 'Dec 2',
				max: 'Dec 8',
				grid: {
					display: false,
				},
			},
		},
	};
	return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
}
