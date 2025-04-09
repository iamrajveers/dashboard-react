import "./index.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
// import Orders from "./components/Orders";
// import Customers from "./components/Customers";
// import Users from "./components/Users";
// import Products from "./components/Products";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Orders from "./pages/orders/page";
import Users from    "./pages/Users/UserDetails"
import Customers from "./pages/Customers/CustomerDetails";
import Products from "./pages/Products/ProductDetails";



function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900">
          <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
             <Route path="/customers" element={<Customers />} />
             <Route path="/users" element={<Users />} /> 
             <Route path="/products" element={<Products />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
