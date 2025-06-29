import { DatePicker } from "antd";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { createRoot } from "react-dom/client";

const Chart = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [state] = useState({
    series: [
      {
        name: "Monthly Data",
        data: [320, 180, 240, 450, 360, 390, 230, 520, 360, 330, 440, 600, ],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: false },
        dropShadow: {
          enabled: true,
          top: 10,
          left: 0,
          blur: 8,
          opacity: 0.25,
          color: "#3BA7F2",
        },
      },
      stroke: {
        curve: "smooth",
        width: 4,
        colors: ["#3BA7F2"],
      },
      colors: ["#3BA7F2"],
      markers: {
        size: 0, // ✅ No dot on line
      },
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ],
        labels: {
          style: {
            colors: "#666",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        min: 100,
        max: 600,
        tickAmount: 5,
        labels: {
          style: {
            colors: "#666",
            fontSize: "12px",
          },
        },
      },
      grid: {
        borderColor: "#eee",
        strokeDashArray: 5,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val) => `${val}`,
        },
      },
      fill: {
        type: "solid",
      },
      dataLabels: {
        enabled: false,
      },
    },
  });

  return (
    <div className="">
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-2xl font-normal text-[#333333]">User Growth</h1>
          <p className="text-[#3698DC] font-medium text-[20px]">
            1 Jan 24 - 5 Jan 25
          </p>
          <div>
            <DatePicker onChange={onChange} picker="month" />
          </div>
        </div>
      </div>
      <ReactApexChart
        className="h-[430px] mt-5"
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  const domContainer = document.getElementById("app");
  const root = createRoot(domContainer);
  root.render(<Chart />);
});

export default Chart;
