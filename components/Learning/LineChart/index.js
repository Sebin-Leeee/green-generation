import { useState, useEffect } from "react";
import styles from './LineChart.module.css'
import React from 'react';

import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function LineChart(){

    const [chartData, setChartData] = useState({
        datasets:[]
    })

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["1980", "1990", "2000", "2010", "2022"],
            datasets: [
                {
                    label: 'Gt CO2',
                    data: [18, 21.3, 24.6, 32.6 , 36.8],
                    borderColor: 'rgb(47, 47, 47)',
                    backgroundColor: 'rgba(47, 47, 47, 0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Global CO2 emissions from energy combustion and industrial processes"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])

    return(
        <>
            <div className={styles.container}> 
                <Line data={chartData} options={chartOptions} />
            </div>
        </>
    )
}