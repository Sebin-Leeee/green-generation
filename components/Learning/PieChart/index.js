import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { styles } from './PieChart.module.css'
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Transportation', 'Oil and gas', 'Buildings', 'Electricity', 'Agriculture', 'Waste and others'],
  datasets: [
    {
      label: '(%)',
      data: [28, 26, 17, 11, 10, 8],
      backgroundColor: [
        'rgba(150, 190, 140, 0.2)',
        'rgba(62, 12, 17, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(150, 190, 140, 1)',
        'rgba(62, 12, 17, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
    },
  ], 
};

export const chartOptions = {
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: "Canada's Greenhouse Gas Emissions by Sector, 2019"
        }
    },
    maintainAspectRatio: false,
    responsive: true
}

export function PieChart() {
  return <div className={styles}><Pie data={data} options={chartOptions} /></div>;
}

//https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/greenhouse-gas-emissions.html