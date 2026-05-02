import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  LineController,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  LineController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const GrowthChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#1a1a1a', font: { size: 11 } }
      },
      title: {
        display: true,
        text: 'Projected Turnover & PAT Growth (₹ Cr)',
        color: '#FF6B00',
        font: { size: 14, family: 'Outfit' }
      },
    },
    scales: {
      y: {
        ticks: { color: '#555555', font: { size: 10 } },
        grid: { color: 'rgba(0, 0, 0, 0.05)' }
      },
      x: {
        ticks: { color: '#555555', font: { size: 10 } },
        grid: { display: false }
      }
    }
  };

  const labels = ['2025-26', '2026-27', '2027-28', '2028-29', '2029-30'];
  
  const data = {
    labels,
    datasets: [
      {
      label: 'Annual Turnover (₹ Cr)',
      data: [18.25, 120.40, 145.50, 175.20, 210.50],
      backgroundColor: 'rgba(255, 107, 0, 0.7)',
      borderColor: '#FF6B00',
      borderWidth: 1,
      borderRadius: 8,
    },  {
        label: 'Profit After Tax (₹ Cr)',
        data: [2.10, 23.24, 26.85, 31.08, 36.12],
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: '#1a1a1a',
        borderWidth: 1,
        type: 'line',
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '280px', position: 'relative' }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export const UseOfFundsChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#1a1a1a', font: { size: 11 } }
      },
      title: {
        display: true,
        text: 'Strategic Capital Allocation',
        color: '#FF6B00',
        font: { size: 14, family: 'Outfit' }
      },
    },
  };

  const data = {
    labels: ['Inventory Acquisition', 'Store Expansion', 'Tech & Marketing', 'Working Capital'],
    datasets: [
      {
        label: 'Allocation %',
        data: [65, 20, 10, 5],
        backgroundColor: [
          'rgba(255, 107, 0, 0.8)',
          'rgba(255, 158, 102, 0.8)',
          'rgba(26, 26, 26, 0.8)',
          'rgba(102, 102, 102, 0.8)',
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '280px', position: 'relative' }}>
      <Bar options={options} data={data} />
    </div>
  );
};
