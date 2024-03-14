

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Chart from 'chart.js/auto';

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [filters, setFilters] = useState({
//     endYear: '',
//     topics: '',
//     sector: '',
//     region: '',
//     pestle: '',
//     source: '',
//     swot: '',
//   });

//   const createCharts = (data) => {
//     createAreaChart(data);
//     // Add more chart functions as needed
//   };

//   const createAreaChart = (data) => {
//     const ctx = document.getElementById('areaChart').getContext('2d');
//     const filteredData = applyFilters(data);

//     // Data Aggregation: Group data by a specific criterion (e.g., time intervals)
//     const aggregatedData = aggregateData(filteredData);

//     // Data Sampling: Select a subset of data points for visualization
//     const sampledData = sampleData(aggregatedData);

//     const countries = sampledData.map(entry => entry.country);
//     const intensities = sampledData.map(entry => entry.intensity);

//     new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: countries,
//         datasets: [{
//           label: 'Intensity',
//           data: intensities,
//           fill: true,
//           // backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           // borderColor: 'rgba(75, 192, 192, 1)',
//           above: 'rgb(255, 0, 0)',   // Area will be red above the origin
//                 below: 'rgb(0, 0, 255)',
//           borderWidth: 1,
//         }],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//         plugins: {
//           legend: {
//             display: true,
//           },
//         },
//       },
//     });
//   };

//   const applyFilters = (data) => {
//     // Implement filter logic based on selected filters
//     return data.filter(entry => {
//       // Check each filter criteria
//       return (
//         (filters.endYear === '' || entry.end_year === filters.endYear) &&
//         (filters.topics === '' || entry.topic === filters.topics) &&
//         (filters.sector === '' || entry.sector === filters.sector) &&
//         (filters.region === '' || entry.region === filters.region) &&
//         (filters.pestle === '' || entry.pestle === filters.pestle) &&
//         (filters.source === '' || entry.source === filters.source) &&
//         (filters.swot === '' || entry.swot === filters.swot)
//       );
//     });
//   };

//   const aggregateData = (data) => {
//     // Implement data aggregation logic here
//     // Group data points based on specific criteria and calculate aggregate values
//     return data; // Placeholder for aggregation logic
//   };

//   const sampleData = (data) => {
//     // Implement data sampling logic here
//     // Select a subset of data points for visualization
//     return data; // Placeholder for sampling logic
//   };

//   const handleFilterChange = (filterName, value) => {
//     setFilters({ ...filters, [filterName]: value });
//   };

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/data')
//       .then(response => {
//         setData(response.data);
//         createCharts(response.data);
//       })
//       .catch(error => console.error(error));
//   }, [filters]); // Include filters in the dependency array

//   return (
//     <div>
//       <div>
//         {/* Add filter UI elements */}
//         <label>End Year:</label>
//         <input type="text" onChange={(e) => handleFilterChange('endYear', e.target.value)} />

//         <label>Topics:</label>
//         <input type="text" onChange={(e) => handleFilterChange('topics', e.target.value)} />

//         {/* Add more filter elements for sector, region, PEST, Source, SWOT, etc. */}
//       </div>

//       <canvas id="areaChart" width="200" height="100"></canvas>
//       {/* Add more chart canvases or components as needed */}
//     </div>
//   );
// };

// export default Dashboard;

