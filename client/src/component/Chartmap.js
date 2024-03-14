// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';

// const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

// const Chartmap = ({ datas }) => {
//   const [chartData, setChartData] = useState({
//     labels: ['Northern America'],
//     datasets: [],
//   });

//   useEffect(() => {
//     if (datas) {
//       const limitedData = datas.slice(0, 6);
//       const likelihood = limitedData.map(entry => entry.likelihood);
//       const region = limitedData.map(entry => entry.region);

//       setChartData({
//         labels: region,
//         datasets: [{
//           label: 'Likelihood',
//           data: likelihood,
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//           hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
//           hoverBorderColor: 'rgba(75, 192, 192, 1)',
//         }],
//       });
//     }
//   }, [datas]);

//   return (
//     <div className='pt-[40px]'>
//       {datas && (
//         <Bar data={chartData} options={options} />
//       )}
//     </div>
//   );
// };

// export default Chartmap;

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Chartmap = ({ datas }) => {
  const [chartData, setChartData] = useState({
    labels: ['Northern America'],
    datasets: [],
  });

  useEffect(() => {
    if (datas) {
      const limitedData = datas.slice(0, 6);
      const likelihood = limitedData.map(entry => entry.likelihood);
      const region = limitedData.map(entry => entry.region);

      // Generate random colors for each bar
      const backgroundColors = Array.from({ length: likelihood.length }, () =>
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`
      );

      setChartData({
        labels: region,
        datasets: [{
          label: 'Likelihood',
          data: likelihood,
          backgroundColor: backgroundColors,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
          hoverBorderColor: 'rgba(75, 192, 192, 1)',
        }],
      });
    }
  }, [datas]);

  return (
    <div className='pt-[40px]'>
      {datas && (
        <Bar data={chartData} options={options} />
      )}
    </div>
  );
};

export default Chartmap;

