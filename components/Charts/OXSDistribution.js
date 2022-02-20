import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import data from "./Data/OXSDistribution";

ChartJS.register(ArcElement, Tooltip, Legend);

const OXSDistribution = () => {
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            align: "center",
          },
        },
        maintainAspectRatio: true,
        animation: {
          delay: 1000,
          animateScale: true,
        },
      }}
    />
  );
};

export default OXSDistribution;
