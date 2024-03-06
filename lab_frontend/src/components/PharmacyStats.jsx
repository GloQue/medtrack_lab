import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

function PharmacyStats({ pharmacyData }) {
  // Sort pharmacyData by price in descending order
  const sortedData = pharmacyData.slice().sort((a, b) => b.drugPrice - a.drugPrice);

  // Get the top 5 drugs with the highest prices
  const top5Data = sortedData.slice(0, 5);

  // Extract drug names and prices from the top 5 data
  const drugNames = top5Data.map((item) => item.drugName.slice(0, 12));
  const drugPrices = top5Data.map((item) => item.drugPrice);

  // Chart data
  const chartData = {
    labels: drugNames,
    datasets: [
      {
        label: 'Drug Prices',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: drugPrices,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default PharmacyStats;

