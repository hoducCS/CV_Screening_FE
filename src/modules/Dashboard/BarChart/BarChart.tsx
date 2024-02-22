"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement,
  Title,
  Legend,
  layouts,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
  layout: {
    padding: 0,
  },
};
export default function BarChart() {
  return (
    <>
      <Bar
        options={options}
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Monthly Spend",
              data: [
                100, 120, 115, 134, 168, 132, 200, 100, 120, 115, 134, 168, 132,
                200,
              ],
              backgroundColor: "#264eca",
            },
          ],
        }}
      />
    </>
  );
}
