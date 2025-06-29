import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { createRoot } from "react-dom/client";

const BarChart = () => {
  const [state] = useState({
    series: [44, 55, 41, 17, 15],
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
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      labels: ["USA", "UK", "Canada", "Australia", "Germany"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-[] bg-white mt-5 p-5 rounded-lg shadow-md">
      <div id="chart">
        <h1 className="text-xl mb-4 text-center">Most visited countries</h1>
        <ReactApexChart
          options={state.options}
          series={state.series}
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
