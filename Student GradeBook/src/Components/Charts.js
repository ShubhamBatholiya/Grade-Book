import React from 'react'
import Chart from "react-apexcharts";
import './CSS/charts.css'

function Charts(props) {
  return (
    <>
      {/* --------------  1. Bar Chart  ---------------*/}
      <Chart
        className="chart"
        type="bar"
        width={300}
        height={300}
        series={[
          {
            name: "Number of Students",
            data: props.tpfData,
            style: { colors: ["red", "green", "red"] },
          },
        ]}
        options={{
          chart: {
            type: "bar",
          },
          xaxis: {
            categories: ["All", "Passed", "Failed"],
            title: {
              text: "Status",
              style: { color: "#f90000", fontSize: 15 },
            },
          },
          yaxis: {
            labels: {
              style: { colors: "#f90000" },
            },
            title: { text: "Number of Students", style: { color: "#f90000" } },
          },
        }}
      ></Chart>

      {/* --------------  2. Pie Chart  ---------------*/}
      <Chart
        className="chart"
        type="pie"
        width={450}
        height={450}
        series={props.grades}
        options={{
          labels: [
            "Final-Grade 0-2",
            "Final-Grade 2-4",
            "Final-Grade 4-6",
            "Final-Grade 6-8",
            "Final-Grade 8-10",
          ],
          legend: {
            markers: {
              width: 12,
              height: 12,
              strokeWidth: 0,
              strokeColor: "#fff",
            },
          },
        }}
      ></Chart>


      {/* --------------  3. Bar Chart  ---------------*/}
      <Chart
        className="chart"
        type="bar"
        width={200}
        height={300}
        series={[
          {
            name: "Marks of Students",
            data: props.mam,
          },
        ]}
        options={{
          chart: {
            type: "bar",
          },

          xaxis: {
            categories: ["Min Marks", "Avg Marks", "Max Marks"],
            title: {
              text: "Status",
              style: { color: "#f90000", fontSize: 15 },
            },
          },
          yaxis: {
            labels: {
              style: { colors: "#f90000" },
            },
            title: { text: "Marks", style: { color: "#f90000" } },
          },
        }}
      ></Chart>
    </>
  )
}

export default Charts
