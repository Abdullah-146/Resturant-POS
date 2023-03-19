import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import { ResponsiveContainer } from "recharts";
// import useWindowDimensions from "./useWindowDimensions";

function RoundGraph() {
  // console.log(useWindowDimensions().width);

  return (
    <ResponsiveContainer>
      <Chart
        type="donut"
        series={[100, 50, 25]}
        // width={useWindowDimensions().width / 4}
        // height={useWindowDimensions().width / 4}
        options={{
          labels: ["Orders", "Amount", "Clients"],
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    fontSize: 30,
                    fontFamily: "Poppins",
                    color: "#989898",
                  },
                },
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
        }}
      />
    </ResponsiveContainer>
  );
}

export default RoundGraph;
