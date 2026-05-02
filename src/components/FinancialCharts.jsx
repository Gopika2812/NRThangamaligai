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

/* ─── Scroll wrapper: allows horizontal scroll on mobile ─── */
const ChartScrollWrapper = ({ children, minWidth = 420 }) => (
  <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
    <div style={{ minWidth, height: '280px', position: 'relative' }}>
      {children}
    </div>
  </div>
);

export const GrowthChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#1a1a1a', font: { size: 11 }, boxWidth: 14 }
      },
      title: {
        display: true,
        text: 'Projected Turnover & PAT Growth (₹ Cr)',
        color: '#FF6B00',
        font: { size: 13, family: 'Outfit' },
        padding: { bottom: 10 }
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
      },
      {
        label: 'PAT (₹ Cr)',
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
    <ChartScrollWrapper minWidth={420}>
      <Bar options={options} data={data} />
    </ChartScrollWrapper>
  );
};

export const UseOfFundsChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#1a1a1a', font: { size: 10 }, boxWidth: 12 }
      },
      title: {
        display: true,
        text: 'Capital Allocation Breakdown',
        color: '#FF6B00',
        font: { size: 13, family: 'Outfit' },
        padding: { bottom: 10 }
      },
    },
    scales: {
      y: {
        ticks: { color: '#555555', font: { size: 10 } },
        grid: { color: 'rgba(0,0,0,0.05)' }
      },
      x: {
        ticks: {
          color: '#555555',
          font: { size: 9 },
          maxRotation: 30,
          minRotation: 0
        },
        grid: { display: false }
      }
    }
  };

  const data = {
    labels: ['Inventory', 'Store Expansion', 'Tech & Mktg', 'Working Capital'],
    datasets: [
      {
        label: 'Allocation %',
        data: [65, 20, 10, 5],
        backgroundColor: [
          'rgba(255, 107, 0, 0.85)',
          'rgba(255, 158, 102, 0.85)',
          'rgba(26, 26, 26, 0.8)',
          'rgba(120, 120, 120, 0.7)',
        ],
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  return (
    <ChartScrollWrapper minWidth={340}>
      <Bar options={options} data={data} />
    </ChartScrollWrapper>
  );
};
