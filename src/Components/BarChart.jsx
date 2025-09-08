// import { useState } from "react";
// import ReactApexChart from "react-apexcharts";
// import { createRoot } from "react-dom/client";
// import { useAdminInfoQuery } from "../redux/features/useSlice";

// const BarChart = () => {

//     const {data} = useAdminInfoQuery();

//   const [state] = useState({
//     series: [44, 55, 41, 17, 15],
//     options: {
//       chart: {
//         width: 380,
//         type: "donut",
//       },
//       plotOptions: {
//         pie: {
//           startAngle: -90,
//           endAngle: 270,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       fill: {
//         type: "gradient",
//       },
//       legend: {
//         formatter: function (val, opts) {
//           return val + " - " + opts.w.globals.series[opts.seriesIndex];
//         },
//       },
//       labels: ["USA", "UK", "Canada", "Australia", "Germany"],
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200,
//             },
//             legend: {
//               position: "bottom",
//             },
//           },
//         },
//       ],
//     },
//   });

//   return (
//     <div className="flex flex-col items-center justify-center h-[] bg-white mt-5 p-5 rounded-lg shadow-md">
//       <div id="chart">
//         <h1 className="text-xl mb-4 text-center">Most visited countries</h1>
//         <ReactApexChart
//           options={state.options}
//           series={state.series}
//           type="donut"
//           width={380}
//         />
//       </div>
//     </div>
//   );
// };

// document.addEventListener("DOMContentLoaded", function () {
//   const domContainer = document.getElementById("app");
//   const root = createRoot(domContainer);
//   root.render(<BarChart />);
// });
// export default BarChart;

import { useState, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { createRoot } from "react-dom/client";
import { useAdminInfoQuery } from "../redux/features/useSlice";

const BarChart = () => {
  const { data } = useAdminInfoQuery();

  // Process most_visited_countries data for the chart
  const chartData = useMemo(() => {
    if (!data?.data?.most_visited_countries) {
      return {
        series: [],
        labels: [],
      };
    }

    const countries = data.data.most_visited_countries;
    const labels = countries.map((country) => country.country_name);
    // Create a uniform series array with equal values (e.g., [1, 1, 1, ...]) for equal segments
    const series = countries.map(() => 1);

    return {
      series,
      labels,
    };
  }, [data]);

  const [state] = useState({
    series: chartData.series,
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: true, // Show country names on the chart
        formatter: function (val, opts) {
          return opts.w.globals.labels[opts.seriesIndex]; // Display country name
        },
      },
      fill: {
        type: "gradient",
      },
      legend: {
        show: false, // Hide legend to avoid showing series data
      },
      labels: chartData.labels,
      tooltip: {
        enabled: false, // Disable tooltips to hide series data
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false, // Ensure legend is hidden on smaller screens
            },
          },
        },
      ],
    },
  });

  return (
    <div className="flex flex-col items-center justify-center bg-white mt-5 p-5 rounded-lg shadow-md">
      <div id="chart">
        <h1 className="text-xl mb-4 text-center">Most Visited Countries</h1>
        <ReactApexChart
          options={state.options}
          series={chartData.series} // Use chartData.series for reactivity
          type="donut"
          width={380}
        />
      </div>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  const domContainer = document.getElementById("app");
  const root = createRoot(domContainer);
  root.render(<BarChart />);
});

export default BarChart;