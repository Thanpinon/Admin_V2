import { FC } from "react";
import {
  Title,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale,
  LineController,
  Chart as ChartJS,
  ChartOptions,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { colors } from "@utils/themeColors";

ChartJS.register(
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Filler
);

const datasetOptions = {
  fill: true,
  borderWidth: 1,
  pointRadius: 2,
  pointBorderWidth: 4,
  borderColor: colors.primary.main,
  backgroundColor: colors.primary.light,
};

const options: ChartOptions = {
  responsive: true,
  indexAxis: "x",
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          console.log(context.element.y);
          let label = context.dataset.label || "";

          if (label) {
            label += " - ";
          }

          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
              context.parsed.y
            );
          }

          return label;

          // return `${label}$${Math.round(context.yLabel * 100) / 100}`;
          // return `${label}$${Math.round(context.parsed.y * 100) / 100}`;
        },
      },
    },
  },
};

// ===================================================================
type Props = { sales: { labels: string[]; data: number[] } };
// ===================================================================

const VendorAnalyticsChart: FC<Props> = ({ sales }) => {
  return (
    <Chart
      type="line"
      options={options}
      data={{
        labels: sales.labels,
        datasets: [{ data: sales.data, ...datasetOptions }],
      }}
    />
  );
};

export default VendorAnalyticsChart;
