import { BsBorderWidth } from "react-icons/bs";

export const dataLine = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales Data',
      data: [65, 59, 80, 81, 56],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      fill: true,
    },
  ],
};

export const dataBar = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Quantity',
      data: [12, 19, 3, 5],
      backgroundColor: "rgba(153,102,255,0.2)",
      borderColor: "rgba(153,102,255,1)",
      borderWidth: 1,  // Corrected this line to use borderWidth instead of BsBorderWidth
    },
  ],
};
