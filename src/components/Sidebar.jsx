import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt,  FaShoppingBag, FaBox, FaUser, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300">
      <h1 className="text-3xl font-bold hidden md:block mt-5 text-center">SW SHOP</h1>

      <ul className="flex flex-col mt-5 text-xl space-y-1">
        <Link to="/" className="flex items-center py-3 px-2 space-x-4 hover:rounded cursor-pointer hover:bg-blue-600 hover:text-white">
        <FaTachometerAlt />
          <span className="hidden md:inline">Dashboard</span>
        </Link>

        <Link to="/orders" className="flex items-center py-3 px-2 space-x-4 hover:rounded cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaShoppingBag />
          <span className="hidden md:inline">Orders</span>
        </Link>

        <Link to="/customers" className="flex items-center py-3 px-2 space-x-4 hover:rounded cursor-pointer hover:bg-blue-600 hover:text-white">
        <FaUsers />
          <span className="hidden md:inline">Customers</span>
        </Link>

        <Link to="/users" className="flex items-center py-3 px-2 space-x-4 hover:rounded cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaUser />
          <span className="hidden md:inline">Users</span>
        </Link>

        <Link to="/products" className="flex items-center py-3 px-2 space-x-4 hover:rounded cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaBox />
          <span className="hidden md:inline">Products</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
