
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Chart from 'chart.js/auto';
// import Chartmap from "./Chartmap";
// // import Header from "./component/Header"
// // import Siderbar from './component/Siderbar';


// export default function Dashboard() {

//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [filters, setFilters] = useState({
//       endYear: '',
//       topics: '',
//       sector: '',
//       region: '',
//       pestle: '',
//       source: '',
//       swot: '',
//       country: '',
//     });
  
//     const createCharts = (data) => {
//       createAreaChart(data);
//       // Add more chart functions as needed
//     };
  
//     const createAreaChart = (data) => {
//       const ctx = document.getElementById('areaChart').getContext('2d');
//       const aggregatedData = data.slice(0,8)
  
//       const sampledData = aggregatedData;
  
//       const countries = sampledData.map(entry => entry.country);
//       const intensities = sampledData.map(entry => entry.intensity);
  
//       new Chart(ctx, {
//         type: 'line',
//         data: {
//           labels: countries,
//           datasets: [{
//             label: 'Intensity',
//             data: intensities,
//             fill: true,
//             above: 'rgb(255, 0, 0)',
//             below: 'rgb(0, 0, 255)',
//             borderWidth: 1,
//           }],
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true,
//             },
//           },
//           plugins: {
//             legend: {
//               display: true,
//             },
            
//           },
//       borderWidth: 2,
//         },
//       });
//     };
  
//     const applyFilters = (data) => {
//       return data.filter(entry => {
//         return (
//           (filters.endYear === '' || String(entry.end_year).includes(filters.endYear)) &&
//           (filters.topics === '' || entry.topic.toLowerCase().includes(filters.topics.toLowerCase())) &&
//           (filters.sector === '' || entry.sector.toLowerCase().includes(filters.sector.toLowerCase())) &&
//           (filters.region === '' || entry.region.toLowerCase().includes(filters.region.toLowerCase())) &&
//           (filters.pestle === '' || entry.pestle.toLowerCase().includes(filters.pestle.toLowerCase())) &&
//           (filters.source === '' || entry.source.toLowerCase().includes(filters.source.toLowerCase())) &&
//           (filters.swot === '' || entry.swot.toLowerCase().includes(filters.swot.toLowerCase())) &&
//           (filters.country === '' || entry.country.toLowerCase().includes(filters.country.toLowerCase()))
//         );
//       });
//     };
  
//     // const aggregateData = (data) => {
      
    
//     //   const aggregatedData = data.reduce((result, entry) => {
//     //     const country = entry.country;
//     //     const intensity = entry.intensity;
    
//     //     if (!result[country]) {
//     //       result[country] = {
//     //         country: country,
//     //         totalIntensity: 0,
//     //         count: 0,
//     //       };
//     //     }
    
//     //     result[country].totalIntensity += intensity;
//     //     result[country].count += 1;
    
//     //     return result;
//     //   }, {});
    
//     //   return Object.values(aggregatedData).map(entry => ({
//     //     country: entry.country,
//     //     intensity: entry.totalIntensity / entry.count,
//     //   }));
//     // };
    
//     // const sampleData = (data) => {
    
    
//     //   const sampledData = [];
//     //   const sampleSize = 5;
    
//     //   for (let i = 0; i < sampleSize && i < data.length; i++) {
//     //     const randomIndex = Math.floor(Math.random() * data.length);
//     //     sampledData.push(data[randomIndex]);
//     //   }
    
//     //   return sampledData;
//     // };
     
//     const handleFilterChange = (filterName, value) => {
//       setFilters({ ...filters, [filterName]: value });
//     };
  
    
     
   
//     useEffect(() => {
//       axios.get('http://localhost:5000/api/data')
//         .then(response => {
//           setData(response.data);
  
//           const filtered = applyFilters(response.data);
//           setFilteredData(filtered);
//           createCharts(filtered);
//         })
//         .catch(error => console.error(error));
//     }, [filters]); 
  
//   return (
//     <div>
        
//         <div className='w-[400px] h-[200px] border-black-50'>
//       <canvas id="areaChart" width="300" height="200"></canvas>
//     </div>
//     <div>
//     <Chartmap datas={filteredData}/>
//     </div>

//     </div>
//   )
// }
