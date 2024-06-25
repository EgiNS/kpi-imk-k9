// src/components/LineChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        label: 'IKPSTV',
        data: data.map(d => d.value),
        borderColor: '#9D262A',
        backgroundColor: '#9D262A',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Line Chart',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;