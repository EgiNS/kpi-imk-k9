// src/components/HorizontalBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler, annotationPlugin);

const HorizontalBarChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'Value',
        data: data.map(d => d.value),
        backgroundColor: '#e0cccc',
        borderColor: '#e0cccc',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // This makes the bar chart horizontal
    responsive: true,
    scales: {
      x: {
        min: 0,
        max: 4,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Horizontal Bar Chart',
      },
      tooltip: {
        enabled: false,
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            xMin: 3,
            xMax: 3,
            borderColor: '#9D262A',
            borderWidth: 1,
            label: {
              content: 'x=3',
              enabled: true,
              position: 'top',
            },
          },
        },
      },
    },
  };

  const plugins = [
    {
      id: 'custom-datalabels',
      afterDatasetsDraw: (chart) => {
        const ctx = chart.ctx;
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        chart.data.datasets.forEach((dataset, i) => {
          const meta = chart.getDatasetMeta(i);
          meta.data.forEach((bar, index) => {
            const data = dataset.data[index];
            ctx.fillStyle = 'rgb(0, 0, 0)';
            const position = bar.tooltipPosition();
            ctx.fillText(data, position.x + 5, position.y);
          });
        });
      },
    },
  ];

  return <Bar data={chartData} options={options} plugins={plugins} />;
};

export default HorizontalBarChart;
