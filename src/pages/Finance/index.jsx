import React, { useState } from 'react';
import axios from 'axios';
import { Commet } from 'react-loading-indicators';
import { Helmet } from "react-helmet";
import { Line } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,  // Register the category scale
  LinearScale,    // Register the linear scale (for y-axis)
  LineElement,    // Register the line element
  PointElement,   // Register the point element (for data points)
  Title,          // Register title component
  Tooltip,        // Register tooltip component
  Legend          // Register legend component
);

const FinanceAPIKey = 'PKDIGX8LDIF9PY0D';

const Finance = () => {
  const [stockData, setStockData] = useState(null);
  const [stockSymbol, setStockSymbol] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchStockData = async (symbol) => {
    if (symbol) {
      setLoading(true);
      setError('');
      try {
        const stockResponse = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${FinanceAPIKey}`
        );
        
        // Log the full response to check the structure
        console.log('API Response:', stockResponse.data);

        // Check if data for the Time Series is available
        const timeSeries = stockResponse.data['Time Series (5min)'];

        if (timeSeries) {
          setStockData(stockResponse.data);
        } else {
          setError('');
        }
      } catch (err) {
        setError('Error fetching data. Please try again.');
        console.error(err);
      }
      setLoading(false);
    }
  };

  const handleStockSearch = (e) => {
    setStockSymbol(e.target.value);
    fetchStockData(e.target.value);
  };

  const chartData = stockData && stockData['Time Series (5min)'] && {
    labels: Object.keys(stockData['Time Series (5min)']),
    datasets: [{
      label: stockSymbol,
      data: Object.values(stockData['Time Series (5min)']).map(item => item['1. open']),
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
    }],
  };

  return (
    <>
        <Helmet>
          <title>User Dashboard - Sygnus Techlabs</title>
          <meta
            name="description"
            content="Access the Sygnus Admin Dashboard to manage restaurant listings, view statistics, and perform administrative tasks efficiently."
          />
              <link rel="icon" href="images/PGAGI.jpeg" />
        </Helmet>
    <div className="finance-section">
      <input
        type="text"
        placeholder="Enter stock symbol"
        onChange={handleStockSearch}
        value={stockSymbol}
      />
      {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <Commet color="#0bb5c9" size="medium" text="PGAGI" textColor="#7bc8d1" />
          </div>
        )}
      {error && <p>{error}</p>}
      {stockData && stockData['Time Series (5min)'] && !loading && (
        <Line data={chartData} />
      )}
    </div>
    </>
  );
};

export default Finance;
