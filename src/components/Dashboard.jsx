import React from "react";
import Card from "./Card";
import { FaBox, FaCog, FaShoppingCart, FaUser } from "react-icons/fa";
import { dataLine, dataBar } from "../assets/ChartData"; // Adjust the path as needed
import { Line, Bar } from "react-chartjs-2";

// ✅ Import BarElement and Filler — this was missing!
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,   // ✅ added
  Title,
  Tooltip,
  Legend,
  Filler        // ✅ added
} from "chart.js";


// ✅ Register all chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,   // ✅ registered
  Title,
  Tooltip,
  Legend,
  Filler        // ✅ registered
);

const Dashboard = () => {
  return (
    <div className="grow p-8">

     {/* <h1 className="text-2xl mb-4 text-center">Dashboard</h1> } */}


       {/* ✅ Step 1: Add welcome message here */}
       <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Welcome back, Admin 👋</h1>
        <p className="text-gray-600">Here's a quick overview of your store !</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card icon={<FaShoppingCart />} title="Orders" value="140" />
        <Card icon={<FaBox />} title="Products" value="120" />
        <Card icon={<FaUser />} title="Users" value="30" />
        <Card icon={<FaCog />} title="Settings" value="11" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Sales Data</h3>
          <Line data={dataLine} />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Product Quantities</h3>
          <Bar data={dataBar} />
        </div>
    
      </div>
    </div>
  );
};

export default Dashboard;
