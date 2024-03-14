// Import necessary libraries and dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import Chartmap from "./component/Chartmap";
import Header from "./component/Header"
import Siderbar from './component/Siderbar';
import Cardsection from './component/Cardsection';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [maxIntensitys,setmaxintensity] = useState([])
  const [filters, setFilters] = useState({
    endYear: '',
    topics: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    swot: '',
    country: '',
  });

  const createCharts = (data) => {
    createAreaChart(data);
    // Add more chart functions as needed
  };

  const createAreaChart = (data) => {
    const ctx = document.getElementById('areaChart').getContext('2d');
    const aggregatedData = aggregateData(data)

    const sampledData = sampleData(aggregatedData);
     

    const countries = sampledData.map(entry => entry.country);
    const intensities = sampledData.map(entry => entry.intensity);
    const  maxintensity = sampledData.map(entry => entry.maxElement )
      setmaxintensity(maxintensity)

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: countries,
        datasets: [{
          label: 'Intensity',
          data: intensities,
          fill: true,
          above: 'rgb(255, 0, 0)',
          below: 'rgb(0, 0, 255)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
          },

        },
        borderWidth: 2,
      },
    });
  };

  const applyFilters = (data) => {
    return data.filter(entry => {
      return (
       
        (filters.country === '' || entry.country.toLowerCase().includes(filters.country.toLowerCase()))
      );
    });
  };

  const aggregateData = (data) => {


    const aggregatedData = data.reduce((result, entry) => {
      const country = entry.country;
      const intensity = entry.intensity;

      if (!result[country]) {
        result[country] = {
          country: country,
          totalIntensity: 0,
          count: 0,
        };
      }

      result[country].totalIntensity += intensity;
      result[country].count += 1;

      return result;
    }, {});

    return Object.values(aggregatedData).map(entry => ({
      country: entry.country,
      intensity: entry.totalIntensity / entry.count,
    }));
  };

  const sampleData = (data) => {


    const sampledData = [];
    const sampleSize = 5;

    for (let i = 0; i < sampleSize && i < data.length; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      sampledData.push(data[randomIndex]);
    }
   
    
    const maxIntensity = Math.max(...sampledData.map(entry => entry.intensity)).toFixed(2);
    sampledData.push({ maxElement: parseFloat(maxIntensity) });
    return sampledData;
  };

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };




  useEffect(() => {
    axios.get('http://dashboard-server-two.vercel.app/api/data')
      .then(response => {
        setData(response.data);

        const filtered = applyFilters(response.data);
        setFilteredData(filtered);
        createCharts(filtered);
      })
      .catch(error => console.error(error));
  }, [filters]);

  return (
    <div className='flex'>

      <div className='basis-[12%] h-[100vh] border'>
        <Siderbar />
      </div>

<div className='w-full'>
  <Header handleFilterChange={handleFilterChange} />
  <Cardsection data={data} maxintensity={maxIntensitys} />
  <div className='flex'>
    <div className='w-1/2 border shadow p-2'>
      <canvas id="areaChart" width="300" height="200"></canvas>
    </div>
    <div className='w-1/2 border shadow p-2'>
      <Chartmap datas={filteredData} />
    </div>
  </div>
</div>


    </div>
  );
}

export default App;
