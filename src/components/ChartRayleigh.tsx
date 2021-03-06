import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import {
  calcRayleighDistribution,
  calcAverage
} from "../script/rayleigh_distribution";
import { getGeneratedElectric } from "../script/getGeneratedElectric";

const Vs = Array(181)
  .fill(1)
  .map((_, index) => {
    return index / 4;
  });

export default function ChartRayleigh() {
  const [av, setAv] = useState(7.0)
  return (
    <div>
      <Line
        data={{
          labels: Vs,
          datasets: [
            {
              label: "風速の分布",
              yAxisID: "distribution",
              data: Vs.map(content => {
                return calcRayleighDistribution(content, calcAverage(av));
              }),
              backgroundColor: "#ffddcc",
              borderColor: "#ff9966",
              borderWidth: 2
            },
            {
              label: "風車出力",
              yAxisID: "electric",
              data: Vs.map(content => {
                return getGeneratedElectric(content);
              }),
              backgroundColor: "#B6FFC7",
              borderColor: "#9EE899",
              borderWidth: 2
            }
          ]
        }}
        options={{
          scales: {
            yAxes: [
              {
                id: "distribution",
                type: "linear",
                position: "left"
              },
              {
                id: "electric",
                type: "linear",
                position: "right"
              }
            ]
          }
        }}
      />
      <input type="number" value={av} onChange={(e) => setAv(parseInt(e.target.value))} />
    </div>
  );
}
