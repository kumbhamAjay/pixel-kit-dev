// import ReactApexChart from "react-apexcharts";
// import { PiChartProps } from "./chart";
// import { ApexOptions } from "apexcharts";



// export function generateChartTemplate({categories,series,text}:PiChartProps){
//     const barSeries = [
//         {
//           name: 'Inflation',
//           data: series,  // Bar chart data will be passed here
//         },
//       ];
//     const barOptions: ApexOptions = {
//         chart: {
//           height: 350,
//           type: 'bar',
//         },
//         plotOptions: {
//           bar: {
//             borderRadius: 10,
//             dataLabels: {
//               position: 'top', // top, center, bottom
//             },
//           },
//         },
//         dataLabels: {
//           enabled: true,
//           formatter(val) {
//             return `${val}%`;  // Template literal instead of string concatenation
//           },
//           offsetY: -20,
//           style: {
//             fontSize: '12px',
//             colors: ["#304758"],
//           },
//         },
//         xaxis: {
//           categories: categories || [],
//           position: 'top',
//           axisBorder: {
//             show: false,
//           },
//           axisTicks: {
//             show: false,
//           },
//           crosshairs: {
//             fill: {
//               type: 'gradient',
//               gradient: {
//                 colorFrom: '#D8E3F0',
//                 colorTo: '#BED1E6',
//                 stops: [0, 100],
//                 opacityFrom: 0.4,
//                 opacityTo: 0.5,
//               },
//             },
//           },
//           tooltip: {
//             enabled: true,
//           },
//         },
//         yaxis: {
//           axisBorder: {
//             show: false,
//           },
//           axisTicks: {
//             show: false,
//           },
//           labels: {
//             show: false,
//             formatter(val) {
//               return `${val}%`;  // Template literal instead of string concatenation
//             },
//           },
//         },
//         title: {
//           text: text||'Default',
//           floating: 1,
//           offsetY: 330,
//           align: 'center',
//           style: {
//             color: '#444',
//           },
//         },
//       };
//     return(
//         <ReactApexChart options={barOptions} series={barSeries} type="bar" height="100%" />
//     )

// }
///////////////////////////////////
import React from "react";
import ReactApexChart from "react-apexcharts";
import { PiChartProps } from "./chart";
import { ApexOptions } from "apexcharts";

export function generateChartTemplate({ categories = [], series = [], text = "Default Title" }: PiChartProps) {
    const barSeries = [{ name: "Inflation", data: series }];

    const barOptions: ApexOptions = {
        chart: {
            height:"100%",
            type: "bar",
        },
        plotOptions: {
          bar: {
            // Fix: Removed `borderRadius`, replaced with `borderRadiusApplication`
            // borderRadiusApplication: "end", // or 'around' for different effects
            // borderRadiusWhenStacked: "last",
            dataLabels: {
                position: "top",
            },
        },
        },
        dataLabels: {
            enabled: true,
            formatter: (val) => `${val}%`,
            offsetY: -20,
            style: { fontSize: "12px", colors: ["#304758"] },
        },
        xaxis: {
            categories,
            position: "top",
            axisBorder: { show: false },
            axisTicks: { show: false },
            crosshairs: {
                fill: {
                    type: "gradient",
                    gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
            },
            tooltip: { enabled: true },
        },
        yaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                formatter: (val) => `${val}%`,
            },
        },
        title: {
            text,
            // floating: true, // Corrected from `floating: 1`
            offsetY: 330,
            align: "center",
            style: { color: "#444" },
        },
    };

    return <>
    
    <div style={{height:"100%"}}>
    <ReactApexChart options={barOptions} series={barSeries} type="bar" />;
    </div>
    </>
   
}
