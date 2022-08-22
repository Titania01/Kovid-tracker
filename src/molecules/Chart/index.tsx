import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({ data, label }: { data: number[]; label: any }) => {
  const config = {
    series: [
      {
        data: data,
      },
    ],
    options: {
      colors: ["#64A8E6"],
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.1,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "darken",
            value: 0.35,
          },
        },
      },
      chart: {
        height: 350,
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          horizontal: false,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: label,
      },
    },
  };

  return (
    <div className="!text-black">
      <Chart
        options={config.options}
        series={config.series}
        type="bar"
        height={500}
      />
    </div>
  );
};
export default BarChart;
